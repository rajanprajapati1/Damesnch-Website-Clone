import axios from "axios";

export const data = [
  {
    section: "Innerwear",
    categories: [
      {
        heading: "All",
        items: ["All Innerwear", "Innerwear Packs", "Briefs & Trunks"]
      },
      {
        heading: "All Briefs",
        items: ["All Briefs", "All Trunks", "Relaxed Underwear", "Boxer Briefs", "Brief Packs", "Trunk Packs", "Vests"]
      },
      {
        heading: "All Vests",
        items: ["All Vests", "Bamboo Vests", "Cotton Vests", "Vest Packs", "Boxers"]
      },
      {
        heading: "All Boxers",
        items: ["All Boxers", "Inner Boxers", "Boxer Shorts"]
      }
    ]
  },
  {
    section: "Topwear",
    categories: [
      {
        heading: "All",
        items: ["All Topwear", "All T-Shirts", "All Shirts", "All Hoodies", "All Sweatshirts", "All Tank Tops", "T-Shirts & Tank Tops"]
      },
      {
        heading: "Polo T-Shirts",
        items: ["Polo T-Shirts", "Breeeze T-Shirts", "Oversized T-Shirts", "Waffle T-Shirts", "Popcorn T-shirts", "Fluid T-Shirts", "Pique T-Shirts", "Statement Polo T-Shirts", "500 Day T-Shirts", "Tank Tops", "Sweatshirts & Hoodies"]
      },
      {
        heading: "Statement Sweatshirts",
        items: ["Statement Sweatshirts", "Statement Hoodies", "Constant Sweatshirts", "Shirts"]
      },
      {
        heading: "All Shirts",
        items: ["All Shirts"]
      }
    ]
  },
  {
    section: "Bottomwear",
    categories: [
      {
        heading: "All",
        items: ["All Bottomwear", "All Shorts", "All Pyjamas", "All Joggers & Track Pants", "Shorts"]
      },
      {
        heading: "Casual Shorts",
        items: ["Casual Shorts", "Chino Shorts", "Raw Edge Shorts", "Statement Waffle Shorts", "Zig Zag Shorts", "Lounge Shorts"]
      },
      {
        heading: "Statement Elemental Joggers",
        items: ["Statement Elemental Joggers", "Statement Textured Joggers", "Track Pants", "Pyjamas"]
      },
      {
        heading: "Pyjama Pants",
        items: ["Pyjama Pants"]
      }
    ]
  },
  {
    section: "500 Day T-Shirts",
    categories: [
      {
        heading: "T-Shirt & Jogger",
        items: ["T-Shirt & Jogger"]
      },
      {
        heading: "500 Day T-Shirts",
        items: ["500 Day T-Shirts", "Shorts"]
      },
      {
        heading: "Casual Shorts",
        items: ["Casual Shorts", "Chino Shorts"]
      },
      {
        heading: "Sweatshirt & Hoodie",
        items: ["Sweatshirt & Hoodie"]
      },
      {
        heading: "Constant Sweatshirts",
        items: ["Constant Sweatshirts"]
      }
    ]
  }
];
export const imageUrls = [
  "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2FHomepage%2520Banners%2F2ndnov%2Fhp-1nov-deosoft-d.png%3Ffm%3Dwebp%26h%3D600%26q%3D70&w=2048&q=65",
  "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2FHomepage%2520Banners%2F2ndnov%2Fhp-1nov-vesttanks-d.png%3Ffm%3Dwebp%26h%3D600%26q%3D70&w=2048&q=65",
  "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2FHomepage%2520Banners%2F2ndnov%2Fhp-1nov-boxer-d.png%3Ffm%3Dwebp%26h%3D600%26q%3D70&w=2048&q=65",
  "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2FHomepage%2520Banners%2F29thoct%2Fhp-1novclearance-d.jpg%3Ffm%3Dwebp%26h%3D600%26q%3D70&w=2048&q=65",
  "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2FHomepage%2520Banners%2F2ndnov%2Fhp-1nov-shorts-d.png%3Ffm%3Dwebp%26h%3D600%26q%3D70&w=2048&q=65"
];
export const Productimg = [
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_breezeteenew.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew-statementsweatshirts.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_statementhoodie.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_trackpants-opt2.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_trackpants-opt2.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_rawedgeshorts.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatnew_waffleshorts.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40',
'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fwhatsnew%2Fwhatsnew_upd_relaxedunderwear.png%3Ffm%3Dwebp%26h%3D500%26q%3D40&w=640&q=40'

];
export const settings = {
  dots: false, autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const setting2 = {
  dots: false, autoplay: true,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: 'ease',
};
export const setting3 = {
  dots: false, autoplay: true,
  infinite: true,
  speed: 100,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: 'ease',
};
export const Productdata = [
  {
      id: 1,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Fstatement_hoodie-closed-jet_black_(1).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",
      brand: "Puma",
      rating: 4.6,
      title: "Fluid CAUSAL Tank Top Jet Black",
      price: 449,
      originalPrice: 999,
      discount: 50,
      sizes: ["M"],
  },
  {
      id: 2,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Ftrack_pants-jet_black_(6).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",
      brand: "Nike",
      rating: 4.8,
      title: "Running Shoes",
      price: 599,
      originalPrice: 899,
      discount: 30,
      sizes: ["S", "M", "L"],
  },
  {
      id: 3,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Ftank_tops_jet_black_(7).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",
      brand: "Adidas",
      rating: 4.5,
      title: "Sports Shorts",
      price: 299,
      originalPrice: 399,
      discount: 25,
      sizes: ["S", "M", "L", "XL"],
      img1:'https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Fstatement_hoodie-closed-jet_black_(1).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65',
      img2: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Ftrack_pants-jet_black_(6).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",

  },
  {
      id: 4,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Fpique_shirts_fs_ivory_white_(4).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",
      brand: "Reebok",
      rating: 4.7,
      title: "Fitness Leggings",
      price: 499,
      originalPrice: 799,
      discount: 38,
      sizes: ["S", "M", "L"],
  },
  {
      id: 5,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fproducts%2Ftrack_pants-jet_black_(6).jpg%3Ffm%3Dwebp%26h%3D700%26q%3D70&w=1920&q=65",
      brand: "Under Armour",
      rating: 4.9,
      title: "Compression Shirt",
      price: 349,
      originalPrice: 449,
      discount: 22,
      sizes: ["S", "M"],
  },
  {
      id: 6,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Ftopcategory%2Ftc_polo.png%3Ffm%3Dwebp%26h%3D500%26q%3D65&w=2048&q=65",
      brand: "New Balance",
      rating: 4.4,
      title: "Running Jacket",
      price: 799,
      originalPrice: 999,
      discount: 20,
      sizes: ["M", "L", "XL"],
  },
  {
      id: 7,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Ftopcategory%2Ftc_innerboxer.png%3Ffm%3Dwebp%26h%3D500%26q%3D65&w=2048&q=65",
      brand: "Puma",
      rating: 4.7,
      title: "Training Gloves",
      price: 199,
      originalPrice: 249,
      discount: 20,
      sizes: ["S", "M", "L"],
  },
  {
      id: 8,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Ftopcategory%2Ftc_pyjama.png%3Ffm%3Dwebp%26h%3D500%26q%3D65&w=2048&q=65",
      brand: "Adidas",
      rating: 4.6,
      title: "Yoga Mat",
      price: 499,
      originalPrice: 599,
      discount: 16,
      sizes: ["One Size"],
  },
  {
      id: 9,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Ftopcategory%2Ftc_piquetshirt.png%3Ffm%3Dwebp%26h%3D500%26q%3D65&w=2048&q=65",
      brand: "Nike",
      rating: 4.8,
      title: "Sweatpants",
      price: 449,
      originalPrice: 549,
      discount: 18,
      sizes: ["S", "M", "L", "XL"],
  },
  {
      id: 10,
      imgSrc: "https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Ftopcategory%2Ftc_bamboovests.png%3Ffm%3Dwebp%26h%3D500%26q%3D65&w=2048&q=65",
      brand: "Reebok",
      rating: 4.5,
      title: "CrossFit Shoes",
      price: 699,
      originalPrice: 899,
      discount: 22,
      sizes: ["S", "M", "L"],
  },
];
export const attributes = [
  {
    category : 'Category',options:[
  { name: "Bamboo Vest Packs", pieces: 4 },
  { name: "Bamboo Vests", pieces: 10 },
  { name: "Boxer Briefs", pieces: 10 },
  { name: "Boxer Shorts", pieces: 40 },
  { name: "Breeze Tank Tops", pieces: 5 },
  { name: "Brief Packs", pieces: 13 },
  { name: "Cotton Vest Packs", pieces: 2 },
  { name: "Cotton Vests", pieces: 8 },
  { name: "Deo-Cotton Brief Packs", pieces: 8 },
  { name: "Deo-Cotton Briefs", pieces: 9 },
  { name: "Deo-Cotton Trunk Packs", pieces: 7 },
  { name: "Deo-Cotton Trunks", pieces: 7 },
  { name: "Deo-Soft Briefs", pieces: 45 },
  { name: "Deo-Soft Trunks", pieces: 38 },
  { name: "Inner Boxers", pieces: 50 },
  { name: "Relaxed Underwear", pieces: 6 },
  { name: "Trunk Packs", pieces: 8 }
    ]
  }
  ,
  { category: "Colour", options: [
    { name: "Multicolour", count: 39 },
    { name: "Red", count: 16 },
    { name: "Green", count: 18 },
    // Add more options as needed
  ]},
  { category: "Neck", options: [
    { name: "Round Neck", count: 24 },
    { name: "Square Neck", count: 5 },
    // Add more options as needed
  ]},
  { category: "Pattern", options: [
    { name: "Printed", count: 131 },
    { name: "Solid", count: 114 },
    // Add more options as needed
  ]},
  { category: "Single/Pack", options: [
    { name: "Single", count: 228 },
    { name: "Pack of 2", count: 34 },
    { name: "Pack of 3", count: 4 },
    // Add more options as needed
  ]}
];


export const GetData = async(query)=>{
  try {
    const a  = await axios.get(`http://localhost:3000/api/${query}`);
    return a?.data
    // console.log(a?.data)
  } catch (error) {
    console.log(error)
  }
}
GetData()