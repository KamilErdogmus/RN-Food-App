import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Restaurant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Restaurant Description',
      type: 'text',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Longitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'rating',
      title: 'Enter a Number Between 1-5',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5).error('Please enter value between 1-5'),
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
