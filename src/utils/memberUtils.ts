// Member utility functions for role checking and sorting
// Future editors: These functions help organize and display members correctly

import type { Member, MembersByYear } from '@/data/members';

/**
 * Check if a member's role is president-level
 * Used for special styling and sparkle effects
 * Excludes Vice President - only actual Presidents get special effects
 */
export function isPresidentRole(role: string): boolean {
  const roleLC = role.toLowerCase();
  return roleLC.includes('president') && !roleLC.includes('vice president');
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
    "Academic Advisor": 3,
    "Vice President": 4,
    "Founding Member": 5,
    "Secretary": 6,
    "Secretary/Librarian": 6,
    "Librarian": 6,
    "Treasurer": 7,
    "Director of Events": 8,
    "Director of Technology": 8,
    "Tech Chair": 8,
    "Event Lead": 8,
    "Exec": 9,
    "Server Owner": 10,
    "Member": 11
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
 * Generate placeholder descriptions for members without detailed info
 * Used when member.description is undefined or empty
 */
export function getPlaceholderDescription(role: string): string {
  if (isFoundingPresident(role)) {
    return "Founding President of PROGgsu. More details about their incredible journey coming soon...";
  } else if (isPresidentRole(role)) {
    return "President of PROGgsu leading the club to new heights. More information coming soon...";
  } else if (role.toLowerCase().includes('founding')) {
    return "Founding member of PROGgsu who helped establish our amazing community. More details coming soon...";
  } else if (role.toLowerCase().includes('advisor')) {
    return "Academic advisor who provided invaluable guidance to PROGgsu. More information coming soon...";
  } else if (role.toLowerCase().includes('exec')) {
    return "Executive member who contributed to PROGgsu's leadership and growth. More information coming soon...";
  } else {
    return "Valued member of PROGgsu. More information coming soon...";
  }
} 