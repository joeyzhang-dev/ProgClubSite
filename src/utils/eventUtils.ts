/**
 * =============================================================================
 * EVENT UTILITIES - PERFORMANCE OPTIMIZATION HELPERS
 * =============================================================================
 * 
 * This module provides utilities for categorizing events by display priority
 * to implement a three-tier rendering system for optimal performance.
 * 
 * 🚀 PERFORMANCE STRATEGY:
 * - Full animated cards: Pinned events, featured events, today's events
 * - Lite cards: Regular upcoming events - same design, minimal animations
 * - Simple list: Past events - lightweight list format
 * =============================================================================
 */

// Type definitions to match the event structure
export interface Event {
  title: string;
  slug: { current: string };
  date?: {
    isTBD?: boolean;
    value?: string;
  };
  time?: {
    isTBD?: boolean;
    value?: string;
  };
  location?: {
    isTBD?: boolean;
    value?: string;
  };
  pinned?: boolean;
  specialTags?: Array<{
    _id: string;
    name: string;
    slug: { current: string };
    color: string;
    isActive: boolean;
  }>;
  resources?: any[];
  description?: any;
}

/**
 * Determines if an event should get the full animated card treatment
 * 
 * 🎯 CRITERIA FOR FULL ANIMATED CARDS:
 * - Pinned events (high importance)
 * - Today's events (active/current)
 * - Featured events with special tags
 * 
 * @param event - The event object to evaluate
 * @returns true if event deserves full animations
 */
export function shouldGetFullAnimatedCard(event: Event): boolean {
  // Always give pinned events full treatment
  if (event.pinned) {
    return true;
  }

  // Check if event is today (active status)
  const eventStatus = getEventStatus(event.date?.value ? new Date(event.date.value) : null);
  if (eventStatus === 'active') {
    return true;
  }

  // Check for special/featured tags that indicate importance
  if (event.specialTags && event.specialTags.length > 0) {
    const importantTags = event.specialTags.some(tag => 
      tag.isActive && (
        tag.name.toLowerCase().includes('featured') ||
        tag.name.toLowerCase().includes('special') ||
        tag.name.toLowerCase().includes('highlight')
      )
    );
    if (importantTags) {
      return true;
    }
  }

  return false;
}

/**
 * Determines if an event should be displayed as a simple list item
 * 
 * 🎯 CRITERIA FOR SIMPLE LIST:
 * - Past events (to reduce clutter and improve performance)
 * - Events without descriptions
 * - Very old events (more than 6 months past)
 * 
 * @param event - The event object to evaluate  
 * @returns true if event should be in simple list format
 */
export function isSimpleListEvent(event: Event): boolean {
  const eventDate = event.date?.value ? new Date(event.date.value) : null;
  const eventStatus = getEventStatus(eventDate);
  
  // Past events go to simple list
  if (eventStatus === 'past') {
    return true;
  }

  // Events without meaningful content
  if (!event.description || (Array.isArray(event.description) && event.description.length === 0)) {
    return true;
  }

  return false;
}

/**
 * Determines event status based on date
 * 
 * @param date - The event date
 * @returns 'upcoming' | 'active' | 'past'
 */
export function getEventStatus(date: Date | null): 'upcoming' | 'active' | 'past' {
  if (!date) return 'upcoming';
  
  const now = new Date();
  const eventDate = new Date(date);
  
  // Set event date to start of day for comparison
  eventDate.setHours(0, 0, 0, 0);
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  
  if (eventDate < today) return 'past';
  if (eventDate.getTime() === today.getTime()) return 'active';
  return 'upcoming';
}

/**
 * Separates events into three display types for optimal performance
 * 
 * 🚀 PERFORMANCE STRATEGY:
 * - Full animated cards: Pinned, active, featured events
 * - Lite cards: Regular upcoming events - same design, no heavy animations
 * - Simple list: Past events - lightweight list format
 * 
 * @param events - Array of events to separate
 * @returns Object with fullCardEvents, liteCardEvents, and listEvents arrays
 */
export function separateEventsByDisplayType(events: Event[]): {
  fullCardEvents: Event[];
  liteCardEvents: Event[];
  listEvents: Event[];
} {
  const fullCardEvents: Event[] = [];
  const liteCardEvents: Event[] = [];
  const listEvents: Event[] = [];
  
  events.forEach(event => {
    if (isSimpleListEvent(event)) {
      // Past events and basic events get simple list format
      listEvents.push(event);
    } else if (shouldGetFullAnimatedCard(event)) {
      // Important events get full animated cards
      fullCardEvents.push(event);
    } else {
      // Regular upcoming events get lite cards (same design, no heavy animations)
      liteCardEvents.push(event);
    }
  });
  
  return { fullCardEvents, liteCardEvents, listEvents };
}

/**
 * Gets event priority for sorting (higher number = higher priority)
 * 
 * @param event - The event to get priority for
 * @returns Priority number for sorting
 */
export function getEventPriority(event: Event): number {
  const eventStatus = getEventStatus(event.date?.value ? new Date(event.date.value) : null);
  
  // Pinned events get highest priority
  if (event.pinned) return 1000;
  
  // Active events (today) get very high priority
  if (eventStatus === 'active') return 900;
  
  // Upcoming events with special tags
  if (eventStatus === 'upcoming' && event.specialTags && event.specialTags.length > 0) {
    return 800;
  }
  
  // Regular upcoming events
  if (eventStatus === 'upcoming') return 500;
  
  // Past events get lowest priority
  return 100;
}

/**
 * Sorts events by priority and date
 * 
 * @param events - Array of events to sort
 * @returns Sorted array with most important events first
 */
export function sortEventsByPriority(events: Event[]): Event[] {
  return events.sort((a, b) => {
    const priorityA = getEventPriority(a);
    const priorityB = getEventPriority(b);
    
    // First sort by priority
    if (priorityA !== priorityB) {
      return priorityB - priorityA; // Higher priority first
    }
    
    // Then sort by date
    const dateA = a.date?.value ? new Date(a.date.value) : new Date(0);
    const dateB = b.date?.value ? new Date(b.date.value) : new Date(0);
    
    return dateB.getTime() - dateA.getTime(); // Newer dates first
  });
} 