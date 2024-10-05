import {defineType, validation} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Dish Description',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Category',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'price of the dish',
      type: 'number',
      validation: (rule) => rule.required(),
    },
  ],
})
