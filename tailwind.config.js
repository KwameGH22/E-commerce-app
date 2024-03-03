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
        'mob-xx59': "url('../resources/assets/product-xx59-headphones/mobile/image-product.jpg')"
        

        
      }
    },
  },
  plugins: [],
}

