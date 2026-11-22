# Nook & Co.: demo store for Can It Fit

A one-page demo furniture shop. Each product's **View in your room** button opens the
Can It Fit Android app with that product, at its real size.

Live at https://blacknif.github.io/canitfit-shop/

## Files
- `index.html` is the page structure, `style.css` the look, `script.js` builds the product list
  from `products.json`, and `icons.svg` holds the icons. Nothing is inline.
- `products.json` holds the products. The app reads the same file, so one change updates both.
  Sizes are in cm (width, depth, height). `model` points to a glTF file in `models/`; leave it
  empty and the app builds the piece from its size.
- `images/` has the product pictures and `models/` the 3D models.

## Credits
3D models and photos of the sofa, lounge chair and TV console come from Poly Haven
(https://polyhaven.com) under CC0. Nook & Co. is not a real shop and nothing is for sale.
