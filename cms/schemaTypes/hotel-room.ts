import { defineField } from "sanity";

const roomTypes = [
  { title: 'Basic', value: 'basic' },
  { title: 'Luxury', value: 'luxury' },
  { title: 'Suite', value: 'suite' },
]

export default {
  name: 'hotelRoom',
  title: 'Hotel Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required().max(50)
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: rule => rule.required().max(500)
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: rule => rule.required().min(0)
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      validation: rule => rule.required().min(0)
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', title: 'Url', type: 'url' },
            { name: 'file', title: 'File', type: 'file' }
          ]
        }
      ],
      validation: rule => rule.required().min(3).max(12)
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        { name: 'url', title: 'Url', type: 'url' },
        { name: 'file', title: 'File', type: 'file' }
      ],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: roomTypes
      },
      initialValue: 'basic',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'text',
      initialValue: 'Check-in time is 2:00 PM and check-out time is 12:00 PM. If you have any special requests, please let us know in advance.',
      validation: rule => rule.max(1000)
    }),
    defineField({
      name: 'dimension',
      title: 'Dimension',
      type: 'string'
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Number of Beds',
      type: 'number',
      initialValue: 1,
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'offeredAmneties',
      title: 'Offered Amneties',
      type: 'array',
      of: [
        {
          type: 'object', 
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'icon', title: 'Icon', type: 'string' }
          ]
        }
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }]
    })
  ]
}