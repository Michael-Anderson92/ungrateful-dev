// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data


// const users = [
//   {
//     id: '410544b2-4001-4271-9855-fec4b6a6442a',
//     name: 'User',
//     email: 'user@nextmail.com',
//     password: '123456',
//   },
// ];

const User = {
  id: 'uuid',
  name: 'string',
  email: 'string',
  password: 'string',
  roles: ['buyer', 'seller'], // User has multiple roles
  shop_id: 'uuid', // Optional: links to the shop if the user is a seller
  created_at: 'Date',
  updated_at: 'Date',
};



const Shop = {
  id: 'uuid', // Unique identifier for each shop
  name: 'string', // Name of the shop
  owner_id: 'uuid', // Links to the User who owns this shop
  description: 'string', // Description of the shop
  created_at: 'Date', // Timestamp for shop creation
  updated_at: 'Date', // Timestamp for shop last update
};


const Products = [
  {
    id: '1',
    name: 'Anime Cat Ornament',
    description: 'A cute anime cat ornament for your home.',
    stock: 10,
    category: 'Home Decor',
    subcategory: 'Ornaments',
    tags: ['anime', 'cat', 'ornament'],
    rating: 4.8,
    reviews: 120,
    created_at: '2023-01-01',
    updated_at: '2023-01-15',
    price: 15.99,
    image_url: '/products/anime-cat-ornament.jpg',
  },
  {
    id: '2',
    name: 'Banana Bundt Cake',
    description: 'A delicious banana bundt cake.',
    stock: 25,
    category: 'Food & Drinks',
    subcategory: 'Desserts',
    tags: ['banana', 'cake', 'dessert'],
    rating: 4.7,
    reviews: 85,
    created_at: '2023-02-10',
    updated_at: '2023-03-01',
    price: 25.99,
    image_url: '/products/banana-bundt-cake.jpg',
  },
  {
    id: '3',
    name: 'Blueberry Pastry',
    description: 'A flaky blueberry pastry.',
    stock: 50,
    category: 'Food & Drinks',
    subcategory: 'Pastries',
    tags: ['blueberry', 'pastry', 'dessert'],
    rating: 4.5,
    reviews: 62,
    created_at: '2023-01-25',
    updated_at: '2023-02-10',
    price: 5.99,
    image_url: '/products/blueberry-pastry.webp',
  },
  {
    id: '4',
    name: 'Christmas Cookies',
    description: 'Festive Christmas cookies.',
    stock: 100,
    category: 'Food & Drinks',
    subcategory: 'Cookies',
    tags: ['christmas', 'cookies', 'festive'],
    rating: 4.9,
    reviews: 140,
    created_at: '2022-12-01',
    updated_at: '2022-12-20',
    price: 12.99,
    image_url: '/products/christmas-cookies-2.jpg',
  },
  {
    id: '5',
    name: 'Colorful Camera',
    description: 'A colorful camera for photography lovers.',
    stock: 8,
    category: 'Electronics',
    subcategory: 'Cameras',
    tags: ['colorful', 'camera', 'photography'],
    rating: 4.6,
    reviews: 50,
    created_at: '2023-01-05',
    updated_at: '2023-02-15',
    price: 199.99,
    image_url: '/products/colorful-camera.jpg',
  },
  {
    id: '6',
    name: 'Mason Jar Tree',
    description: 'A decorative mason jar tree.',
    stock: 20,
    category: 'Home Decor',
    subcategory: 'Decorative Items',
    tags: ['mason jar', 'tree', 'decor'],
    rating: 4.4,
    reviews: 36,
    created_at: '2023-01-10',
    updated_at: '2023-01-20',
    price: 30.00,
    image_url: '/products/mason-jar-tree.jpg',
  },
  {
    id: '7',
    name: 'Meringue Shells',
    description: 'Delicate meringue shells.',
    stock: 45,
    category: 'Food & Drinks',
    subcategory: 'Desserts',
    tags: ['meringue', 'shells', 'dessert'],
    rating: 4.3,
    reviews: 24,
    created_at: '2023-01-20',
    updated_at: '2023-02-10',
    price: 8.99,
    image_url: '/products/meringue-shells.jpg',
  },
  {
    id: '8',
    name: 'Professional Cake',
    description: 'A professional cake for special occasions.',
    stock: 15,
    category: 'Food & Drinks',
    subcategory: 'Desserts',
    tags: ['cake', 'dessert', 'special occasion'],
    rating: 4.8,
    reviews: 76,
    created_at: '2023-01-15',
    updated_at: '2023-02-05',
    price: 45.00,
    image_url: '/products/professional-cake-1.jpg',
  },
  {
    id: '9',
    name: 'Raspberry Macrons',
    description: 'Delicious raspberry macrons.',
    stock: 30,
    category: 'Food & Drinks',
    subcategory: 'Pastries',
    tags: ['raspberry', 'macrons', 'dessert'],
    rating: 4.5,
    reviews: 42,
    created_at: '2023-01-01',
    updated_at: '2023-01-20',
    price: 10.50,
    image_url: '/products/raspberry-macrons.jpg',
  },
];



export { User, Products, };
