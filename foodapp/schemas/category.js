import {defineType, validation} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Category',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
