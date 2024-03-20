export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: 'User is an admin and can access the CMS',
      initialValue: false,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'A short bio for the user'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url'
    },
    {
      // this is only if you use credentials provider
      name: 'password',
      type: 'string',
      hidden: true
    },
    {
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    }
  ]
};
