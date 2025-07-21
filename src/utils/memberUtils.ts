// Member utility functions for role checking and sorting
// Future editors: These functions help organize and display members correctly

import type { Member, MembersByYear } from '@/data/members';

/**
 * Check if a member's role is president-level
 * Used for special styling and sparkle effects
 */
export function isPresidentRole(role: string): boolean {
  return role.toLowerCase().includes('president');
}

/**
 * Check if this is the founding president (Jenny Liu gets extra special treatment!)
 * Used for ultra-special sparkle effects and styling
 */
export function isFoundingPresident(role: string): boolean {
  return role.toLowerCase().includes('founding president');
}

/**
 * Get role priority for sorting members within each year
 * Lower numbers = higher priority (displayed first)
 * 
 * HOW TO ADD NEW ROLES:
 * 1. Add the role name to the priorities object
 * 2. Assign it a priority number (1 = highest, 99 = lowest)
 * 3. Members will automatically sort correctly
 */
export function getRolePriority(role: string): number {
  const priorities: Record<string, number> = {
    "President": 1,
    "Founding President": 1,
    "2nd President": 1,
    "3rd President": 1,
    "4th President": 1,
    "5th President": 1,
    "Founding Academic Advisor": 2,
    "Vice President": 3,
    "Former President": 3,
    "VP": 3,
    "Former VP": 3,
    "Founding VP": 3,
    "Secretary": 4,
    "Secretary/Librarian": 4,
    "Former Secretary": 4,
    "Treasurer": 5,
    "Director of Events": 6,
    "Event Lead": 6,
    "Events Coordinator": 6,
    "Director of Technology": 7,
    "Tech Chair": 7,
    "Workshop Lead": 8,
    "Former Exec": 9,
    "Server Owner": 10
  };
  
  return priorities[role] || 99; // Default to lowest priority for unknown roles
}

/**
 * Sort all members by their role priority within each academic year
 * This automatically organizes members in the correct hierarchical order
 */
export function sortMembersByRole(membersByYear: MembersByYear): MembersByYear {
  const sortedMembers = { ...membersByYear };
  
  Object.keys(sortedMembers).forEach(year => {
    sortedMembers[year].sort((a, b) => getRolePriority(a.role) - getRolePriority(b.role));
  });
  
  return sortedMembers;
}

/**
 * Get placeholder text for members without descriptions
 * Provides contextual placeholder based on the academic year
 */
export function getPlaceholderDescription(year: string): string {
  if (year === "2020-2021") {
    return "Founding member of PROGgsu. More information coming soon...";
  }
  return "Former member of PROGgsu. More information coming soon...";
} 