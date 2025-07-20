import rss from "@astrojs/rss";
import { getEvents } from "@/lib/sanity.js";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export async function GET(context) {
  const events = await getEvents();
  
  // Helper function to extract plain text from description
  function getPlainTextExcerpt(description) {
    if (typeof description === 'string') return description;
    if (!description || !Array.isArray(description)) return '';
    
    // Extract text from block content
    return description
      .filter(block => block._type === 'block')
      .map(block => 
        block.children
          ?.filter(child => child._type === 'span')
          ?.map(span => span.text)
          ?.join('') || ''
      )
      .join(' ')
      .substring(0, 150) + '...';
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: events.map((event) => ({
      title: event.title,
      description: getPlainTextExcerpt(event.description),
      pubDate: new Date(event.date),
      link: `/events/${event.slug.current}/`,
    })),
  });
}
