import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stay',
  title: 'Stay',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: rule => rule.required().min(0)
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5)
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'postalCode', type: 'string', title: 'Postal Code'},
        {name: 'city', type: 'string', title: 'City'},
        {name: 'area', type: 'string', title: 'Area'},
        {name: 'country', type: 'string', title: 'Country'},
      ]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'reviewScore',
      title: 'Review Score',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10)
    }),
    defineField({
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'text', type: 'text', title: 'Review Text'},
          {name: 'author', type: 'string', title: 'Author Name'},
          {name: 'country', type: 'string', title: 'Author Country'},
        ]
      }]
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Good Breakfast', value: 'breakfast'},
          {title: 'Private parking', value: 'private_parking'},
          {title: 'Private Bathroom', value: 'private_bathroom'},
          {title: 'Free Wifi', value: 'free_wifi'},
          {title: 'Air conditioning', value: 'air_conditioning'},
          {title: 'Non-smoking rooms', value: 'non_smoking'},
          {title: 'Bathtub', value: 'bathtub'},
          {title: 'Flat-screen TV', value: 'flat_screen_tv'},
          {title: '24-hour front desk', value: '24h_front_desk'},
          {title: 'Parking on site', value: 'parking_on_site'},
        ]
      }
    }),
    defineField({
      name: 'wifiRating',
      title: 'Wifi Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10)
    }),
    defineField({
      name: 'subwayAccess',
      title: 'Subway Access',
      type: 'boolean',
    }),
  ]
})