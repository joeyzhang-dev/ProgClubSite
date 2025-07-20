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

// Helper function to normalize event data (handle both old and new schema formats)
function normalizeEventData(event) {
  return {
    ...event,
    // Handle date field - could be string (old) or object (new)
    date: typeof event.date === 'string' 
      ? { isTBD: false, value: event.date }
      : event.date || { isTBD: true, value: null },
    
    // Handle time field - could be string (old) or object (new)
    time: typeof event.time === 'string'
      ? { isTBD: false, value: event.time }
      : event.time || { isTBD: true, value: null },
    
    // Handle location field - could be string (old) or object (new)
    location: typeof event.location === 'string'
      ? { isTBD: false, value: event.location }
      : event.location || { isTBD: true, value: null }
  };
}

// Helper function to fetch all events
export async function getEvents() {
  const events = await sanityClient.fetch(`
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
  
  return events.map(normalizeEventData);
}

// Helper function to fetch a single event by slug
export async function getEvent(slug) {
  const event = await sanityClient.fetch(`
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
  
  return event ? normalizeEventData(event) : null;
} 