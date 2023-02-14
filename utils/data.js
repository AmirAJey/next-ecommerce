import bcrypt from 'bcryptjs'

export const data = {
  users: [
    {
      name: 'amir',
      email: 'amir@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'mahdi',
      email: 'mahdi@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    },
  ],
  categories: [
    {
      id: `category-1`,
      name: 'Shirts',
    },
    {
      id: `category-2`,
      name: 'Pants',
    },
  ],
  brands: [
    {
      id: `brand-1`,
      name: 'Nike',
    },
    {
      id: `brand-2`,
      name: 'Adidas',
    },
    {
      id: `brand-3`,
      name: 'Raymond',
    },
    {
      id: `brand-4`,
      name: 'Oliver',
    },
    {
      id: `brand-5`,
      name: 'Zara',
    },
    {
      id: `brand-6`,
      name: 'Casely',
    },
  ],
  products: [
    {
      id: `product-1`,
      name: 'Free Shirt',
      slug: 'free-shirt',
      category_id: 'category-1',
      img: '/images/shirt1.jpg',
      price: 70,
      brand_id: 'brand-1',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      id: `product-2`,
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category_id: 'category-1',
      img: '/images/shirt2.jpg',
      price: 80,
      brand_id: 'brand-2',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      id: `product-3`,
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category_id: 'category-1',
      img: '/images/shirt3.jpg',
      price: 90,
      brand_id: 'brand-3',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      id: `product-4`,
      name: 'Golf Pants',
      slug: 'golf-pants',
      category_id: 'category-2',
      img: '/images/pants1.jpg',
      price: 90,
      brand_id: 'brand-4',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      id: `product-5`,
      name: 'Fit Pants',
      slug: 'fit-pants',
      category_id: 'category-2',
      img: '/images/pants2.jpg',
      price: 95,
      brand_id: 'brand-5',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      id: `product-6`,
      name: 'Classic Pants',
      slug: 'classic-pants',
      category_id: 'category-2',
      img: '/images/pants3.jpg',
      price: 75,
      brand_id: 'brand-6',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ]
}