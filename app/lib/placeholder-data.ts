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

const users = {
  id: 'uuid',
  name: 'string',
  email: 'string',
  password: 'string',
  roles: ['buyer', 'seller'], // User has multiple roles
  shop_id: 'uuid', // Optional: links to the shop if the user is a seller
  created_at: 'Date',
  updated_at: 'Date',
};



const shops = {
  id: 'uuid', // Unique identifier for each shop
  name: 'string', // Name of the shop
  owner_id: 'uuid', // Links to the User who owns this shop
  description: 'string', // Description of the shop
  created_at: 'Date', // Timestamp for shop creation
  updated_at: 'Date', // Timestamp for shop last update
};

// const customers = [
  //   {
  //     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  //     name: 'Evil Rabbit',
  //     email: 'evil@rabbit.com',
  //     image_url: '/customers/evil-rabbit.png',
  //   },
  //   {
  //     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  //     name: 'Delba de Oliveira',
  //     email: 'delba@oliveira.com',
  //     image_url: '/customers/delba-de-oliveira.png',
  //   },
  //   {
  //     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  //     name: 'Lee Robinson',
  //     email: 'lee@robinson.com',
  //     image_url: '/customers/lee-robinson.png',
  //   },
  //   {
  //     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  //     name: 'Michael Novotny',
  //     email: 'michael@novotny.com',
  //     image_url: '/customers/michael-novotny.png',
  //   },
  //   {
  //     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
  //     name: 'Amy Burns',
  //     email: 'amy@burns.com',
  //     image_url: '/customers/amy-burns.png',
  //   },
  //   {
  //     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
  //     name: 'Balazs Orban',
  //     email: 'balazs@orban.com',
  //     image_url: '/customers/balazs-orban.png',
  //   },
  // ];

  // const invoices = [
    //   {
    //     customer_id: customers[0].id,
    //     amount: 15795,
    //     status: 'pending',
    //     date: '2022-12-06',
    //   },
    //   {
    //     customer_id: customers[1].id,
    //     amount: 20348,
    //     status: 'pending',
    //     date: '2022-11-14',
    //   },
    //   {
    //     customer_id: customers[4].id,
    //     amount: 3040,
    //     status: 'paid',
    //     date: '2022-10-29',
    //   },
    //   {
    //     customer_id: customers[3].id,
    //     amount: 44800,
    //     status: 'paid',
    //     date: '2023-09-10',
    //   },
    //   {
    //     customer_id: customers[5].id,
    //     amount: 34577,
    //     status: 'pending',
    //     date: '2023-08-05',
    //   },
    //   {
    //     customer_id: customers[2].id,
    //     amount: 54246,
    //     status: 'pending',
    //     date: '2023-07-16',
    //   },
    //   {
    //     customer_id: customers[0].id,
    //     amount: 666,
    //     status: 'pending',
    //     date: '2023-06-27',
    //   },
    //   {
    //     customer_id: customers[3].id,
    //     amount: 32545,
    //     status: 'paid',
    //     date: '2023-06-09',
    //   },
    //   {
    //     customer_id: customers[4].id,
    //     amount: 1250,
    //     status: 'paid',
    //     date: '2023-06-17',
    //   },
    //   {
    //     customer_id: customers[5].id,
    //     amount: 8546,
    //     status: 'paid',
    //     date: '2023-06-07',
    //   },
    //   {
    //     customer_id: customers[1].id,
    //     amount: 500,
    //     status: 'paid',
    //     date: '2023-08-19',
    //   },
    //   {
    //     customer_id: customers[5].id,
    //     amount: 8945,
    //     status: 'paid',
    //     date: '2023-06-03',
    //   },
    //   {
    //     customer_id: customers[2].id,
    //     amount: 1000,
    //     status: 'paid',
    //     date: '2022-06-05',
    //   },
    // ];


const products = [
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



export { users, shops, products };
