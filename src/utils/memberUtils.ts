/**
 * =============================================================================
 * MEMBER UTILITY FUNCTIONS
 * =============================================================================
 * 
 * This file contains all the helper functions for managing and displaying 
 * member data. These utilities handle role checking, sorting, and content
 * generation for the members page.
 * 
 * 🎯 MAIN FUNCTIONS:
 * - isPresidentRole() - Check if someone gets special sparkle effects
 * - isFoundingPresident() - Check if someone gets EXTRA special effects  
 * - getRolePriority() - Determine sorting order within each year
 * - sortMembersByRole() - Sort all members for display
 * - getPlaceholderDescription() - Generate fallback text
 * 
 * 🔧 FOR FUTURE DEVELOPERS:
 * - Add new special roles to getRolePriority()
 * - Modify sparkle effects logic in isPresidentRole()
 * - Update placeholder text in getPlaceholderDescription()
 * 
 * 💡 TESTING CHANGES:
 * - Run `npm run dev` and check /members page
 * - Verify sorting is correct within each year section
 * - Check that special effects work on president cards
 * =============================================================================
 */

import type { Member, MembersByYear } from '@/data/members';

/**
 * Determines if a member's role qualifies for special sparkle effects
 * 
 * ⚡ SPECIAL EFFECTS RULES:
 * - Presidents (1st-5th) get golden sparkle effects
 * - Vice Presidents do NOT get special effects
 * - Only actual "President" roles qualify
 * 
 * @param role - The member's role string (e.g., "5th President", "Vice President")
 * @returns true if the role gets special sparkle effects, false otherwise
 * 
 * @example
 * isPresidentRole("5th President")     // true - gets golden sparkles
 * isPresidentRole("Vice President")    // false - no special effects
 * isPresidentRole("Director of Events") // false - no special effects
 */
export function isPresidentRole(role: string): boolean {
  const roleLC = role.toLowerCase();
  return roleLC.includes('president') && !roleLC.includes('vice president');
}

/**
 * Determines if this is THE founding president (Jenny Liu) for ultra-special effects
 * 
 * 🌟 ULTRA-SPECIAL EFFECTS:
 * - Only "Founding President" gets violet sparkle effects
 * - This is the highest level of special styling
 * - Currently only applies to Jenny Liu
 * 
 * @param role - The member's role string
 * @returns true if this is the founding president, false otherwise
 * 
 * @example
 * isFoundingPresident("Founding President") // true - gets violet sparkles
 * isFoundingPresident("2nd President")      // false - gets golden sparkles instead
 */
export function isFoundingPresident(role: string): boolean {
  return role.toLowerCase().includes('founding president');
}

/**
 * Determines the priority order for sorting members within each academic year
 * 
 * 📊 SORTING RULES:
 * - Lower numbers = displayed first (higher priority)
 * - Presidents always appear at the top
 * - Founding roles get special priority treatment  
 * - Executive roles come before general members
 * 
 * 🔧 HOW TO ADD NEW ROLES:
 * 1. Add the role name to the priorities object below
 * 2. Assign it a priority number (1 = highest, 99+ = lowest)
 * 3. Members will automatically sort correctly
 * 
 * @param role - The member's role string
 * @returns Priority number (1 = highest priority, 99+ = lowest priority)
 * 
 * @example
 * getRolePriority("President")         // 1 - appears first
 * getRolePriority("Vice President")    // 4 - appears after advisors  
 * getRolePriority("Member")           // 11 - appears last
 * getRolePriority("Unknown Role")     // 99 - default for unknown roles
 */
export function getRolePriority(role: string): number {
  // 🎯 ROLE PRIORITY HIERARCHY
  // Add new roles here and assign appropriate priority numbers
  const priorities: Record<string, number> = {
    // === PRESIDENTIAL ROLES (Highest Priority) ===
    "President": 1,
    "Founding President": 1,
    "2nd President": 1,
    "3rd President": 1,
    "4th President": 1,
    "5th President": 1,
    
    // === ADVISOR ROLES ===
    "Founding Academic Advisor": 2,
    "Academic Advisor": 3,
    
    // === LEADERSHIP ROLES ===
    "Vice President": 4,
    "Founding Member": 5,
    
    // === OFFICER ROLES ===
    "Secretary": 6,
    "Secretary/Librarian": 6,
    "Librarian": 6,
    "Treasurer": 7,
    
    // === DIRECTOR/LEAD ROLES ===
    "Director of Events": 8,
    "Director of Technology": 8,
    "Tech Chair": 8,
    "Event Lead": 8,
    
    // === EXECUTIVE & GENERAL ROLES ===
    "Exec": 9,
    "Server Owner": 10,
    "Member": 11
  };
  
  return priorities[role] || 99; // Default to lowest priority for unknown roles
}

/**
 * Sorts all members by their role priority within each academic year section
 * 
 * 🔄 SORTING PROCESS:
 * 1. Each academic year section is sorted independently
 * 2. Members with higher priority roles appear first
 * 3. Original member data is preserved (creates new sorted object)
 * 
 * @param membersByYear - The complete member data organized by academic year
 * @returns New object with all members sorted by role priority within each year
 * 
 * @example
 * const sorted = sortMembersByRole(membersByYear);
 * // Result: Presidents appear first, then VPs, then other roles in each year
 */
export function sortMembersByRole(membersByYear: MembersByYear): MembersByYear {
  const sorted: MembersByYear = {};
  
  // Process each academic year section independently
  for (const [year, members] of Object.entries(membersByYear)) {
    // Sort members by role priority (lower numbers = higher priority = displayed first)
    sorted[year] = [...members].sort((a, b) => {
      const priorityA = getRolePriority(a.role);
      const priorityB = getRolePriority(b.role);
      return priorityA - priorityB;
    });
  }
  
  return sorted;
}

/**
 * Generates contextual placeholder descriptions for members without detailed info
 * 
 * 💬 PLACEHOLDER STRATEGY:
 * - Provides role-appropriate fallback text when member.description is missing
 * - Maintains professional tone while indicating more info is coming
 * - Contextual based on the member's role level
 * 
 * @param role - The member's role string
 * @returns Appropriate placeholder description text
 * 
 * @example
 * getPlaceholderDescription("Founding President")
 * // → "Founding President of PROGgsu. More details about their incredible journey coming soon..."
 * 
 * getPlaceholderDescription("Vice President")  
 * // → "Valued member of PROGgsu. More information coming soon..."
 * 
 * getPlaceholderDescription("Exec")
 * // → "Executive member who contributed to PROGgsu's leadership and growth. More information coming soon..."
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