import { Client } from '@notionhq/client'
import fs from 'fs'
import path from 'path'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID

async function syncEvents() {
  try {
    console.log('🔄 Syncing events from Notion...')
    
    // Fetch events from Notion database
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    })

    console.log(`📊 Found ${response.results.length} published events`)

    // Process each event
    for (const event of response.results) {
      const properties = event.properties
      
      // Extract properties
      const title = properties.Title?.title?.[0]?.plain_text || 'Untitled Event'
      const description = properties.Description?.rich_text?.[0]?.plain_text || ''
      const date = properties.Date?.date?.start || new Date().toISOString()
      const slug = properties.Slug?.rich_text?.[0]?.plain_text || 
                   title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      
      // Extract resources
      const resources = properties.Resources?.multi_select || [];
      const resourceUrls = properties.ResourceURLs?.rich_text || [];

      // Parse ResourceURLs as key-value pairs
      const urlMap = {};
      resourceUrls.forEach(lineObj => {
        const line = lineObj.plain_text.trim();
        if (!line) return;
        const [key, ...rest] = line.split(":");
        if (!key || rest.length === 0) return;
        urlMap[key.trim().toLowerCase()] = rest.join(":").trim();
      });

      const hasVideo = resources.some(r => r.name === 'Video');
      const hasSlides = resources.some(r => r.name === 'Slides');
      const hasRecording = resources.some(r => r.name === 'Recording');
      const hasArticle = resources.some(r => r.name === 'Article');

      // Extract URLs by key (case-insensitive)
      const videoUrl = urlMap['video'] || '';
      const slidesUrl = urlMap['slides'] || '';
      const recordingUrl = urlMap['recording'] || '';
      const articleUrl = urlMap['article'] || '';

      // Create markdown content
      const markdown = `---
title: "${title}"
description: "${description}"
pubDate: "${date}"
hasVideo: ${hasVideo}
hasSlides: ${hasSlides}
hasRecording: ${hasRecording}
hasArticle: ${hasArticle}
videoUrl: "${videoUrl}"
slidesUrl: "${slidesUrl}"
recordingUrl: "${recordingUrl}"
articleUrl: "${articleUrl}"
---

# ${title}

${description}

## Event Details

**Date:** ${new Date(date).toLocaleDateString()}

${hasVideo || hasSlides || hasRecording || hasArticle ? `
## Resources

${hasVideo ? `- [Video](${videoUrl})` : ''}
${hasSlides ? `- [Slides](${slidesUrl})` : ''}
${hasRecording ? `- [Recording](${recordingUrl})` : ''}
${hasArticle ? `- [Article](${articleUrl})` : ''}
` : ''}
`

      // Write to file
      const filePath = path.join(process.cwd(), 'src/content/events', `${slug}.md`)
      fs.writeFileSync(filePath, markdown)
      
      console.log(`✅ Created: ${slug}.md`)
    }

    console.log('🎉 Sync completed successfully!')
    
  } catch (error) {
    console.error('❌ Error syncing from Notion:', error)
    process.exit(1)
  }
}

// Run the sync
syncEvents() 