import { defineField } from "sanity";

export default {
  name: 'booking',
  title: 'Booking',
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
      name: 'checkinDate',
      title: 'Check-in Date',
      type: 'date',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Check-out Date',
      type: 'date',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Number of Days',
      type: 'number',
      initialValue: 1,
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'adults',
      title: 'Adults',
      type: 'number',
      initialValue: 1,
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'number',
      initialValue: 0,
      validation: rule => rule.required().min(0)
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: rule => rule.required().min(0)
    }),
  ]
}