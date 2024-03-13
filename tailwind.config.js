/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      "Manrope": ['Manrope', 'sans-serif']
    },
     screens: {

      'mobile': {'min': '234px', 'max': '640px'},
      //  => @media (min-width: 234px) and (max-width: 640px) 

      'tablet': '640px',
      // => @media (min-width: 640px) 

      'laptop': '1024px',
      // => @media (min-width: 1024px) 

      'desktop': '1280px',
      // => @media (min-width: 1280px) 
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('../resources/assets/home/mobile/image-header.jpg')",
        'hero-tablet': "url('../resources/assets/home/tablet/image-header.jpg')",
        'hero-desktop': "url('../resources/assets/home/desktop/image-hero.jpg')",
        'mob-speaker-home': "url('../resources/assets/home/mobile/image-speaker-zx7.jpg')",
        'tb-speaker-home': "url('../resources/assets/home/tablet/image-speaker-zx7.jpg')",
        'dt-speaker-home': "url('../resources/assets/home/desktop/image-speaker-zx7.jpg')",
        'mob-earphone-home': "url('../resources/assets/home/mobile/image-earphones-yx1.jpg')",
        'tb-earphone-home': "url('../resources/assets/home/tablet/image-earphones-yx1.jpg')",
        'dt-earphone-home': "url('../resources/assets/home/desktop/image-earphones-yx1.jpg')",
        'mob-gear-home': "url('../resources/assets/shared/mobile/image-best-gear.jpg')",
        'tb-gear-home': "url('../resources/assets/shared/tablet/image-best-gear.jpg')",
        'dt-gear-home': "url('../resources/assets/shared/desktop/image-best-gear.jpg')",
        'mob-xx99m2': "url('../resources/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg')",
        'tb-xx99m2': "url('../resources/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg')",
        'dt-xx99m2': "url('../resources/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg')",
        'mob-xx99m1': "url('../resources/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg')",
        'tb-xx99m1': "url('../resources/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg')",
        'dt-xx99m1': "url('../resources/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg')",
        'dt-xx59': "url('../resources/assets/product-xx59-headphones/desktop/image-product.jpg')",
        'tb-xx59': "url('../resources/assets/product-xx59-headphones/tablet/image-product.jpg')",
        'mob-xx59': "url('../resources/assets/product-xx59-headphones/mobile/image-product.jpg')",
        'mob-gallery1': "url('../resources/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg')",
        'mob-gallery2': "url('../resources/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg')",
        'mob-gallery3': "url('../resources/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg')",
        'tb-gallery1': "url('../resources/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg')",
        'tb-gallery2': "url('../resources/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg')",
        'tb-gallery3': "url('../resources/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg')",
        'dt-gallery1': "url('../resources/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg')",
        'dt-gallery2': "url('../resources/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg')",
        'dt-gallery3': "url('../resources/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg')",
        'mob-zx9speaker': "url('../resources/assets/shared/mobile/image-zx9-speaker.jpg')",
        'tb-zx9speaker': "url('../resources/assets/shared/tablet/image-zx9-speaker.jpg')",
        'dt-zx9speaker': "url('../resources/assets/shared/desktop/image-zx9-speaker.jpg')",
        'mob-zx7speaker': "url('../resources/assets/shared/mobile/image-zx7-speaker.jpg')",
        'tb-zx7speaker': "url('../resources/assets/shared/tablet/image-zx7-speaker.jpg')",
        'dt-zx7speaker': "url('../resources/assets/shared/desktop/image-zx7-speaker.jpg')",
        'mob-yx1': "url('../resources/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg')",
        'tb-yx1': "url('../resources/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg')",
        'dt-yx1': "url('../resources/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')",
        'mob-zx9': "url('../resources/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')",
        'tb-zx9': "url('../resources/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')",
        'dt-zx9': "url('../resources/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')",
        'mob-zx7': "url('../resources/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg')",
        'tb-zx7': "url('../resources/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg')",
        'dt-zx7': "url('../resources/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg')",
        'mob-gallery-m1-1': "url('../resources/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg')",
        'mob-gallery-m1-2': "url('../resources/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg')",
        'mob-gallery-m1-3': "url('../resources/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg')",
        'tb-gallery-m1-1': "url('../resources/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg')",
        'tb-gallery-m1-2': "url('../resources/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg')",
        'tb-gallery-m1-3': "url('../resources/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg')",
        'dt-gallery-m1-1': "url('../resources/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg')",
        'dt-gallery-m1-2': "url('../resources/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg')",
        'dt-gallery-m1-3': "url('../resources/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg')",
        'mob-gallery-xx59-1': "url('../resources/assets/product-xx59-headphones/mobile/image-gallery-1.jpg')",
        'mob-gallery-xx59-2': "url('../resources/assets/product-xx59-headphones/mobile/image-gallery-2.jpg')",
        'mob-gallery-xx59-3': "url('../resources/assets/product-xx59-headphones/mobile/image-gallery-3.jpg')",
        'tb-gallery-xx59-1': "url('../resources/assets/product-xx59-headphones/tablet/image-gallery-1.jpg')",
        'tb-gallery-xx59-2': "url('../resources/assets/product-xx59-headphones/tablet/image-gallery-2.jpg')",
        'tb-gallery-xx59-3': "url('../resources/assets/product-xx59-headphones/tablet/image-gallery-3.jpg')",
        'dt-gallery-xx59-1': "url('../resources/assets/product-xx59-headphones/desktop/image-product.jpg')",
        'dt-gallery-xx59-2': "url('../resources/assets/product-xx59-headphones/desktop/image-product.jpg')",
        'dt-gallery-xx59-3': "url('../resources/assets/product-xx59-headphones/desktop/image-product.jpg')"




        

        
      }
    },
  },
  plugins: [],
}

