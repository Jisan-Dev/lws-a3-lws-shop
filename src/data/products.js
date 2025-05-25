const data = [
  {
    id: crypto.randomUUID(),
    name: "Gradient Graphic T-shirt",
    price: 105,
    rating: 2,
    stock: 1,
    image: "image 1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Polo with Tipping Details",
    price: 180,
    rating: 1,
    stock: 3,
    image: "image 10-1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Black Striped T-shirt",
    price: 120,
    image: "image 10-2.png",
    stock: 12,
    rating: 4,
    createdAt: "2024-06-11T17:45:00Z",
  },
  {
    id: crypto.randomUUID(),
    name: "Skinny Fit Jeans",
    price: 129,
    image: "image 7-1.png",
    stock: 5,
    rating: 4,
    createdAt: "2024-05-19T14:55:00Z",
  },
  {
    id: crypto.randomUUID(),
    name: "Checkered Shirt",
    price: 180,
    image: "image 8-2.png",
    stock: 0,
    rating: 2,
    createdAt: "2024-03-15T12:10:00Z",
  },
  {
    id: crypto.randomUUID(),
    name: "Sleeve Striped T-shirt",
    price: 130,
    image: "image 9-1.png",
    stock: 8,
    rating: 3,
    createdAt: "2024-04-04T09:00:00Z",
  },
];

function getAllProducts() {
  return data;
}

export { getAllProducts };
