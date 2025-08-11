// src/data/fakeDB.js

export const users = [
  { id: 1, name: "John Smith",email : "john.smith@ihuza.com", role :"Admin", status:"Active" },
  { id: 2, name: "Sarah Johnson",email : "sarah.j@ihuza.com", role :"Manager", status:"Active"},
];

export const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: "Laptops",
    date: "Dec 10, 2024",
    status: "in Stock",
    statusColor: "green",
  },
  {
    id: 2,
    name: "iPad Air",
    category: "Tablets",
    date: "Dec 7, 2024",
    status: "in Stock",
    statusColor: "green",
  },
  {
    id: 3,
    name: "Dell XPS 13",
    category: "Laptops",
    date: "Dec 9, 2024",
    status: "in Stock",
    statusColor: "green",
  },
  {
    id: 4,
    name: "Surface Pro 9",
    category: "Tablets", 
    date: "Dec 6, 2024",
    status: "out of Stock",
    statusColor: "red",
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    category: "Mobile",
    date: "Dec 8, 2024",
    status: "low Stock",
    statusColor: "yellow",
  },
];

export const assignments = [
  { id: 1, productId: 1, userId: 1 },
  { id: 2, productId: 2, userId: 2 },
  // ... autres assignations
];

export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Office" },
  // ... autres catégories
];
