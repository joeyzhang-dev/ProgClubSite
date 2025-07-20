export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      description: 'The display name of the tag (e.g., "Featured", "Workshop")',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Tag Slug',
      type: 'slug',
      description: 'The URL-friendly version of the tag name (auto-generated from name)',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of what this tag represents'
    },
    {
      name: 'color',
      title: 'Tag Color',
      type: 'string',
      description: 'Choose a color theme for this tag',
      options: {
        list: [
          { title: 'Purple (Default)', value: 'purple' },
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Red', value: 'red' },
          { title: 'Orange', value: 'orange' },
          { title: 'Pink', value: 'pink' },
          { title: 'Teal', value: 'teal' }
        ]
      },
      initialValue: 'purple'
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this tag is available for use',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      color: 'color'
    },
    prepare(selection: any) {
      const { title, subtitle, color } = selection;
      return {
        title: title,
        subtitle: subtitle || `Color: ${color}`,
        media: () => {
          const colors: Record<string, string> = {
            purple: '🟣',
            blue: '🔵',
            green: '🟢',
            yellow: '🟡',
            red: '🔴',
            orange: '🟠',
            pink: '🩷',
            teal: '🩵'
          };
          return colors[color] || '🏷️';
        }
      };
    }
  }
}; 