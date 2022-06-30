const dummyData = [
  {
    title: "Nestle Milkybar Choo Strawberry Classic",
    category: "Chocolate",
    rate: "95",
    offer: "50",
    quantity: "95",
    images: [
      "https://m.media-amazon.com/images/I/710AwR3ceKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51RjrGlGqDL.jpg",
      "https://m.media-amazon.com/images/I/21GSo5LUSAL.jpg",
      "https://firebasestorage.googleapis.com/v0/b/bikai-d5ee5/o/images%2F0d09e634-0f14-4eb2-b92e-bd7809227c56?alt=media&token=7bd47745-3e2f-4cd2-8045-c492fefd934b",
      "https://firebasestorage.googleapis.com/v0/b/bikai-d5ee5/o/images%2Fccf4bed7-7e49-4cfe-8c15-431267706d08?alt=media&token=835be324-c733-4332-8703-7101bb914ed0",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",

    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
  {
    title: "Cadbury Dairy Milk Silk Chocolate Bar, 150g (Pack of 3)",
    category: "Chocolate",
    rate: "451",
    offer: "480",
    quantity: "150",
    images: [
      "https://m.media-amazon.com/images/I/61PV9Ep1k+L._SX385_.jpg",
      "https://m.media-amazon.com/images/I/416nTMDyJ1L._SS200_.jpg",
      "https://m.media-amazon.com/images/I/71Ufwf2yU7L._SX385_.jpg",
      "https://m.media-amazon.com/images/I/71n-UCR7VVL._SX385_.jpg",
      "https://m.media-amazon.com/images/I/71kZ40EOddL._SX385_.jpg",
    ],
    rating: "4.8",
    customers: "1567",
    highlights:
      "Indulge in a rich, smooth and creamy celebration Order now and experience the rich taste of Cadbury Dairy Milk Silk Chocolate bar. Gourmet : Yes This Pack Contains 3 Units of Cadbury Dairy Milk Silk - 150g each Country of Origin: India Allergen Information: Contains Diary",
    productDetail:
      "Indulge in a rich, smooth and creamy celebration Order now and experience the rich taste of Cadbury Dairy Milk Silk Chocolate bar. Gourmet : Yes This Pack Contains 3 Units of Cadbury Dairy Milk Silk - 150g each Country of Origin: India Allergen Information: Contains Diary",
  },
  {
    title: "Nestle Kitkat Bars  (36.5 g)",
    category: "Chocolate",
    rate: "39",
    offer: "25",
    quantity: "195",
    images: [
      "https://rukminim1.flixcart.com/image/416/416/l4d2ljk0/chocolate/2/7/4/-original-imagf9uwhrgvfjzu.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/l4d2ljk0/chocolate/e/5/u/-original-imagf9uwj3hpx7qu.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/l4d2ljk0/chocolate/f/g/g/-original-imagf9uwqbftedzh.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/l4d2ljk0/chocolate/j/z/n/-original-imagf9uwx7gxybwt.jpeg?q=70",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "You can fuel up your energy in between hectic work presentations by taking a break and munching on the delicious Nestle KITKAT bars. Coated with the deliciousness of chocolate, these crunchy bars add sweetness and fun to your breaks while treating your taste buds to their delectable flavour. Plus, these bars have been made with vegetarian ingredients and produced with care in Ponda, a scenic city in Goa.",
  },
  {
    title: "Bourbon, Chocolate, 100g",
    category: "Chocolate",
    rate: "95",
    offer: "50",
    quantity: "95",
    images: [
      "https://m.media-amazon.com/images/I/71PXU5+68JL._SX385_.jpg",
      "https://m.media-amazon.com/images/I/41KTJWevOOL._SS200_.jpg",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "An exotic combination of rich cream nestled amid perfectly baked dark choco biscuits For those who desire nothing but the best",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
  {
    title: "Britannia Biscuits - Bourbon New and Chocolatier, 150g Pack",
    category: "Chocolate",
    rate: "95",
    offer: "50",
    quantity: "95",
    images: [
      "https://m.media-amazon.com/images/I/6151EF84AaL._SX385_.jpg",
      "https://m.media-amazon.com/images/I/41KTJWevOOL._SS200_.jpg",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen_information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },

  {
    title: "Casual Bishop Sleeve Printed Women Yellow Top",
    category: "Womens Costume",
    rate: "1099",
    offer: "224",
    quantity: "95",
    images: [
      "https://rukminim1.flixcart.com/image/714/857/k0r15e80/top/r/z/e/xxl-gujari294-gujari-original-imafj4fhgbp57san.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/k0r15e80/top/r/z/e/xxl-gujari294-gujari-original-imafj4fhqxbjmsaf.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/k0r15e80/top/r/z/e/xxl-gujari294-gujari-original-imafj4fhaa5myryu.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/k0r15e80/top/r/z/e/xxl-gujari294-gujari-original-imafj4fh9wz5srcb.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/jz05rww0/top/r/z/e/m-gujari294-gujari-original-imafj4fhzz8g73zg.jpeg?q=50",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen_information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
  {
    title: "Women Fit and Flare Dark Blue Dress",
    category: "Womens Costume",
    rate: "1999",
    offer: "475",
    quantity: "23",
    images: [
      "https://rukminim1.flixcart.com/image/880/1056/l251xu80/dress/6/v/l/m-3702-diego-original-imagdk484vrhyjug.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/f/2/s/m-3702-diego-original-imagdk48rjubgmev.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/f/4/h/m-3702-diego-original-imagdk48hzrmnrpd.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/6/v/l/m-3702-diego-original-imagdk484vrhyjug.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/r/r/o/m-3702-diego-original-imagdk48tgnuzntf.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/s/z/3/m-3702-diego-original-imagdk486n6zffph.jpeg?q=50",
    ],
    rating: "4.2",
    customers: "95",
    highlights:
      "If you Love skater style frock, then this is for you. It is a foil printed skater dress. It is crafted from pure Rayon fabric with Love. Rayon we crafted is very comfortable and rich for skin so you can wear it casually in office with a pair of Boot and sinkers as well. The length of skater is below knee.",
    productDetail:
      "If you Love skater style frock, then this is for you. It is a foil printed skater dress. It is crafted from pure Rayon fabric with Love. Rayon we crafted is very comfortable and rich for skin so you can wear it casually in office with a pair of Boot and sinkers as well. The length of skater is below knee.",
    color: [
      "https://rukminim1.flixcart.com/image/714/857/l26hdow0/dress/w/2/t/l-3703-diego-original-imagdk75x7rnzbgq.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/a/j/f/s-3701-diego-original-imagdk57abhudktz.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l251xu80/dress/s/d/v/xl-3705-diego-original-imagdkfmrfwakm82.jpeg?q=50",
    ],
  },
  {
    title: "Casual Regular Sleeves Embroidered Women Light Blue Top",
    category: "Womens Costume",
    rate: "1499",
    offer: "379",
    quantity: "10",
    images: [
      "https://rukminim1.flixcart.com/image/714/857/knni7ww0/top/t/m/w/s-dmp300-dmp-fashion-original-imag2a5qmkgfrgek.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/knni7ww0/top/w/k/l/s-dmp300-dmp-fashion-original-imag2a5qu72x49ea.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/knni7ww0/top/j/w/8/s-dmp300-dmp-fashion-original-imag2a5qnsddtvzn.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/knni7ww0/top/w/k/8/s-dmp300-dmp-fashion-original-imag2a5q9gudvphf.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/knni7ww0/top/5/h/b/s-dmp300-dmp-fashion-original-imag2a5qvbdpyybu.jpeg?q=50",
    ],
    rating: "4.1",
    customers: "123",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen_information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
  {
    title: "Women Pleated Purple Dress",
    category: "Chocolate",
    rate: "2330",
    offer: "459",
    quantity: "45",
    images: [
      "https://rukminim1.flixcart.com/image/714/857/kuwzssw0/dress/t/g/w/m-ut-3006-aask-original-imag7xssme44aynm.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/kuwzssw0/dress/j/h/n/m-ut-3006-aask-original-imag7xssq8f9dzx4.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/kuwzssw0/dress/y/4/2/m-ut-3006-aask-original-imag7xssnsx4fk5z.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/kuwzssw0/dress/q/m/p/m-ut-3006-aask-original-imag7xsszxz6zade.jpeg?q=50",
    ],
    rating: "4.6",
    customers: "95",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen_information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
  {
    title: "Women Robe Style 3/4th Sleeve White Shrug",
    category: "Womens Costume",
    rate: "699",
    offer: "282",
    quantity: "95",
    images: [
      "https://rukminim1.flixcart.com/image/714/857/l0lbrm80/shrug/y/4/y/xs-1-casual-shirak-original-imagcbrzehjzcgws.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l0lbrm80/shrug/o/o/y/xs-1-casual-shirak-original-imagcbrzw8mufspr.jpeg?q=50",
      "https://rukminim1.flixcart.com/image/714/857/l0lbrm80/shrug/i/g/y/xs-1-casual-shirak-original-imagcbrzpdsxwyxn.jpeg?q=50",
    ],
    rating: "4.6",
    customers: "765",
    highlights:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen*information: Milk 30 Chocolate BarInside llergen_information Milk is_expiration_dated_product: Yes material_features: vegetarian",
    productDetail:
      "Pack Of 30 Pcs Strawberry Flavour Packed Safely 10% Extra allergen_information: Milk 30 Chocolate Bar Inside llergen_information: Milk is_expiration_dated_product: Yes material_features: vegetarian",
  },
];
export default dummyData;
