# Multikart – Gym Coords Set (Next.js)

Replica of https://angular.pixelstrap.com/multikart-frontend/product/gym-coords-set built with Next.js 14 (App Router) + TypeScript + plain CSS.

## Run
```bash
npm install
npm run dev     # http://localhost:3000  (redirects to /product/gym-coords-set)
npm run build && npm start
```

## Images
Save the original images from the page (DevTools > Network > Img) into `public/images/products/` using the file names in `data/products.ts`
(brown-1..4, blue-1, green-1, mug, rel-1..5, rel-2a/b/c, rel-4a/b/c). Missing images show a grey placeholder so the layout never breaks.

## Deploy
Push to GitHub, import the repo on vercel.com, and share the generated URL.
