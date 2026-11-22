# Nook & Co. — demo store for Can It Fit

A one-page demo furniture shop. Each product's **View in your room** button opens the
Can It Fit Android app with that product, at its real size.

Live at: https://blacknif.github.io/canitfit-shop/

## Files
- `index.html` — the shop page (reads `products.json`).
- `products.json` — the products. The app reads this same file, so a change here changes both.
  Sizes are in cm (width × depth × height). `model` is a glTF file in `models/`, or empty to
  have the app shape the product from its size.
- `images/` — product pictures. `models/` — 3D models.

## Credits
3D models and photos of the sofa, lounge chair and TV console: Poly Haven (https://polyhaven.com), CC0.
Nook & Co. is not a real shop; nothing is for sale.
