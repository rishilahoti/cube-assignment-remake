export interface Customer {
    id: number;
    name: string;
    title: string;
    details: string;
    photos: string[];
  }
  
  export const initialCustomers: Customer[] = [
    {
      id: 1,
      name: "Customer 01",
      title: "Indian",
      details: "Details about Customer 01",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 2,
      name: "Customer 02",
      title: "Indian",
      details: "Details about Customer 02",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 3,
      name: "Customer 03",
      title: "CFO",
      details: "Details about Customer 03",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 4,
      name: "Customer 01",
      title: "Indian",
      details: "Details about Customer 01",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 5,
      name: "Customer 02",
      title: "Indian",
      details: "Details about Customer 02",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 6,
      name: "Customer 03",
      title: "CFO",
      details: "Details about Customer 03",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 7,
      name: "Customer 01",
      title: "Indian",
      details: "Details about Customer 01",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 8,
      name: "Customer 02",
      title: "Indian",
      details: "Details about Customer 02",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
    {
      id: 9,
      name: "Customer 03",
      title: "CFO",
      details: "Details about Customer 03",
      photos: Array.from({ length: 9 }, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
    },
  ];
  