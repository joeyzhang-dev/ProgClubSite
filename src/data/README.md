# Members Section Documentation

This document explains how to edit and maintain the PROGgsu members section. The code has been organized into separate, easy-to-edit files.

## 📂 File Structure

```
src/
├── data/
│   ├── members.ts          # 👈 EDIT MEMBER DATA HERE
│   └── README.md          # This documentation
├── components/
│   └── MemberCard.astro   # 👈 EDIT CARD APPEARANCE HERE
├── utils/
│   └── memberUtils.ts     # 👈 EDIT ROLES/SORTING HERE
└── pages/
    └── members.astro      # 👈 Main page (rarely needs editing)
```

## 🎯 Common Tasks

### ✅ Adding New Members

**File to edit:** `src/data/members.ts`

1. Find the appropriate academic year section
2. Add a new member object:

```typescript
{
  name: "Student Name",
  role: "President", // Use exact role names from priorities
  description: "Optional description of the member", // Optional
  github: "username", // Optional - only if verified
  linkedin: "username", // Optional - only if verified  
  specialties: ["Skill 1", "Skill 2"] // Optional
}
```

3. Missing fields will show as "Information coming soon"

### ✅ Adding New Academic Years

**File to edit:** `src/data/members.ts`

1. Add a new key to `membersByYear` object:

```typescript
"2027-2029": [
  {
    name: "Future President",
    role: "President",
    // ... other fields
  }
],
```

2. The year will automatically appear on the website

### ✅ Adding New Roles

**File to edit:** `src/utils/memberUtils.ts`

1. Find the `getRolePriority` function
2. Add your new role to the `priorities` object:

```typescript
const priorities: Record<string, number> = {
  // ... existing roles
  "New Role Name": 6, // Lower number = higher priority
};
```

3. Members with this role will automatically sort correctly

### ✅ Changing Card Appearance

**File to edit:** `src/components/MemberCard.astro`

This file contains all the styling, sparkle effects, and layout for member cards. You can:
- Modify colors and gradients
- Adjust sparkle effects
- Change card layout
- Update hover animations

### ✅ Updating Social Links

**File to edit:** `src/data/members.ts`

Only include verified GitHub/LinkedIn usernames:

```typescript
{
  name: "Member Name",
  github: "actual-github-username", // ✅ Verified only
  linkedin: "linkedin-username",    // ✅ Verified only
}
```

Missing links will show as grayed-out "coming soon" buttons.

## 🏆 Special Member Types

### Founding President (Jenny Liu)
- Gets extra sparkle effects (violet/purple/pink theme)
- Uses `role: "Founding President"`
- Automatically receives special treatment

### Regular Presidents  
- Get golden sparkle effects (amber/yellow theme)
- Any role containing "president" gets special styling
- Automatically sorted to top of their year

### Regular Members
- Standard purple/blue theme
- Clean, professional appearance
- "Information coming soon" placeholders for missing data

## 🎨 Design Philosophy

- **Verified data only**: Only include real GitHub/LinkedIn profiles
- **Graceful degradation**: Missing information shows helpful placeholders
- **Automatic sorting**: Members automatically organize by role importance
- **Responsive design**: Cards work on all screen sizes
- **Performance focused**: Optimized animations and loading

## 🚀 Performance Features

- **Component separation**: Easy to maintain and modify
- **TypeScript types**: Prevents errors and provides autocomplete
- **Lazy loading ready**: Structure supports future performance improvements
- **Modular CSS**: Animations are isolated and optimized

## 📝 Notes for Future Developers

1. **Never hardcode member data** in components - always use the data file
2. **Test on mobile** when making layout changes
3. **Preserve sparkle effects** for presidents - they're a beloved feature!
4. **Follow naming conventions** for roles to ensure proper sorting
5. **Verify social links** before adding them to avoid broken links

## ❓ Getting Help

If you need help or something breaks:
1. Check this documentation first
2. Look at existing examples in the data file
3. Test your changes locally before committing
4. Ask other club members if you're unsure

Remember: It's better to leave a field empty than to include incorrect information! 