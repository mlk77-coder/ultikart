export type Related = {
  id: number; brand: string; title: string; price: number; oldPrice: number;
  off: number; badge?: "Trending" | "Featured"; offer: number; image: string; swatches?: string[];
};

export const product = {
  slug: "gym-coords-set",
  title: "Gym Coords Set (Brown)",
  price: 15,
  sku: "SP19 (COPY)",
  weight: "150 Gms",
  unit: "1 Item",
  quantity: 50,
  stock: "In stock",
  featured: true,
  sellingFast: "Selling fast! 2 people have this in their carts.",
  images: [
    "/images/products/brown-1.jpg",
    "/images/products/blue-1.jpg",
    "/images/products/green-1.jpg",
    "/images/products/brown-2.jpg",
    "/images/products/brown-3.jpg",
    "/images/products/brown-4.jpg",
  ],
  colors: [
    { name: "Brown", image: "/images/products/brown-1.jpg" },
    { name: "Blue", image: "/images/products/blue-1.jpg" },
    { name: "Green", image: "/images/products/green-1.jpg" },
  ],
  description: [
    `"Gym Coords Set" offers a comprehensive solution for those seeking comfort and style in their workout attire. This coordinated set is meticulously designed to elevate your gym experience, blending functionality with fashion seamlessly. Crafted from high-quality, breathable fabrics, each piece in the set ensures optimal performance and comfort during your exercise routines.`,
    `The set includes everything you need for a complete workout ensemble, featuring coordinating tops, bottoms, and accessories. Whether you're hitting the treadmill, pumping iron, or attending a yoga class, the Gym Coords Set has you covered in both style and functionality.`,
    `With its modern design and versatile color palette, this set transitions effortlessly from the gym to casual outings, making it a practical addition to any active lifestyle. Embrace the confidence and motivation that comes with looking and feeling your best during every workout session with the Gym Coords Set.`,
  ],
  recent: { name: "Red Roses Charm Mug", ago: "59 Minutes Ago", image: "/images/products/mug.svg" },
};

export const related: Related[] = [
  { id: 1, brand: "EnduraFit", title: "Grey Sport Set", price: 12.6, oldPrice: 14, off: 10, badge: "Trending", offer: 10, image: "/images/products/rel-1.jpg" },
  { id: 2, brand: "Thrive Athleisure", title: "Fitted Coords Set (Grey)", price: 13.5, oldPrice: 15, off: 10, badge: "Trending", offer: 5, image: "/images/products/rel-2.jpg", swatches: ["/images/products/rel-2a.jpg", "/images/products/rel-2b.jpg", "/images/products/rel-2c.jpg"] },
  { id: 3, brand: "Thrive Athleisure", title: "Athleisure Set", price: 17.1, oldPrice: 18, off: 5, badge: "Trending", offer: 5, image: "/images/products/rel-3.jpg" },
  { id: 4, brand: "EnduraFit", title: "Sport Set (Green/S)", price: 9, oldPrice: 10, off: 10, badge: "Featured", offer: 10, image: "/images/products/rel-4.jpg", swatches: ["/images/products/rel-4a.jpg", "/images/products/rel-4b.jpg", "/images/products/rel-4c.jpg"] },
  { id: 5, brand: "EnduraFit", title: "Grey Gym Suit (S)", price: 9.5, oldPrice: 10, off: 5, offer: 5, image: "/images/products/rel-5.jpg" },
];
