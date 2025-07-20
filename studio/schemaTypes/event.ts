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
      name: 'date', 
      title: 'Date', 
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
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