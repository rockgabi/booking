import { defineField } from "sanity";

export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Hotel Room',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: rule => rule.required().min(1).max(5)
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: rule => rule.required().max(500)
    }),
  ]
}