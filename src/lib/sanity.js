import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'

export const sanityClient = createClient({
  projectId: '44jj75h0', // Your project ID from studio/sanity.config.ts
  dataset: 'production',
  useCdn: true, // Use CDN for faster reads
  apiVersion: '2023-05-03', // Use current date in YYYY-MM-DD format
})

// Helper function to render Portable Text to HTML
export function renderPortableText(blocks) {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks; // Handle old simple text fields
  return toHTML(blocks);
}

// Helper function to fetch all events
export async function getEvents() {
  return await sanityClient.fetch(`
    *[_type == "event"] | order(date desc) {
      _id,
      title,
      date,
      time,
      location,
      description,
      post,
      slug,
      gallery[] {
        asset-> {
          url,
          metadata { lqip, dimensions }
        },
        alt
      },
      resources[] {
        type,
        label,
        url
      }
    }
  `)
}

// Helper function to fetch a single event by slug
export async function getEvent(slug) {
  return await sanityClient.fetch(`
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      date,
      time,
      location,
      description,
      post,
      slug,
      gallery[] {
        asset-> {
          url,
          metadata { lqip, dimensions }
        },
        alt
      },
      resources[] {
        type,
        label,
        url
      }
    }
  `, { slug })
} 