// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.


// Started working on Supabase integration. Added users, shops, products, and categories.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: string[]; // User has multiple roles
  shop_id?: string; // Optional: links to the shop if the user is a seller
  created_at: Date;
  updated_at: Date;
};
export type Shop = {
  id: string; // Unique identifier for each shop
  name: string; // Name of the shop
  owner_id: string; // Links to the User who owns this shop
  description: string; // Description of the shop
  created_at: Date; // Timestamp for shop creation
  updated_at: Date; // Timestamp for shop last update
};

export type Product = {
  id: string;
  name: string;
  description: string;
  stock: number;
  category: string;
  subcategory: string;
  tags: string[];
  rating: number;
  reviews: number;
  created_at: string;
  updated_at: string;
  price: number; // Price in cents
  image_url: string; // URL to the product image
}

export type Category = {
  id: string;         // UUID
  name: string;       // VARCHAR
  description: string; // TEXT
  image_url: string;   // TEXT
  created_at: string;  // TIMESTAMPTZ
  updated_at: string;  // TIMESTAMPTZ
};


// export type Subcategory = {
//   id: string;
//   name: string;
//   description: string;
//   image_url: string;
//   created_at: string;
//   updated_at: string;
//   products: Product[];
//   category: Category;
// }

// export type Customer = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
// };

