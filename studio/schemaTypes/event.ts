export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Title', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'pinned',
      title: 'Pinned Event',
      type: 'boolean',
      description: 'Pin this event to the top of the events list',
      initialValue: false
    },
    {
      name: 'specialTags',
      title: 'Special Tags',
      type: 'array',
      description: 'Add special tags to highlight this event. Tags can be managed in the "Tags" section.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {
          name: 'isTBD',
          title: 'Date TBD',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'value',
          title: 'Date Value',
          type: 'date',
          hidden: ({ parent }: any) => parent?.isTBD
        }
      ],
      validation: (Rule: any) => Rule.custom((dateObj: any) => {
        if (!dateObj) return 'Date is required';
        if (dateObj.isTBD) return true;
        if (!dateObj.value) return 'Date value is required when not TBD';
        return true;
      })
    },
    {
      name: 'time',
      title: 'Time',
      type: 'object',
      fields: [
        {
          name: 'isTBD',
          title: 'Time TBD',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'value',
          title: 'Time Value',
          type: 'string',
          hidden: ({ parent }: any) => parent?.isTBD
        }
      ],
      validation: (Rule: any) => Rule.custom((timeObj: any) => {
        if (!timeObj) return 'Time is required';
        if (timeObj.isTBD) return true;
        if (!timeObj.value) return 'Time value is required when not TBD';
        return true;
      })
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'isTBD',
          title: 'Location TBD',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'value',
          title: 'Location Value',
          type: 'string',
          hidden: ({ parent }: any) => parent?.isTBD
        }
      ],
      validation: (Rule: any) => Rule.custom((locationObj: any) => {
        if (!locationObj) return 'Location is required';
        if (locationObj.isTBD) return true;
        if (!locationObj.value) return 'Location value is required when not TBD';
        return true;
      })
    },
    { 
      name: 'description', 
      title: 'Description', 
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'post',
      title: 'Event Post',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { 
        source: 'title', 
        maxLength: 96 
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Event Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' }
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'type', 
              title: 'Type', 
              type: 'string', 
              options: { 
                list: ['Video', 'Slides', 'Article', 'Recording', 'Other'] 
              } 
            },
            { 
              name: 'label', 
              title: 'Label', 
              type: 'string' 
            },
            { 
              name: 'url', 
              title: 'URL', 
              type: 'url' 
            }
          ]
        }
      ]
    }
  ]
} 