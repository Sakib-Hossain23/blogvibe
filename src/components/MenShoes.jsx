// without filter loading

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function MenShoes({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 12;
  const navigate = useNavigate();
  const productsContainerRef = useRef(null);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  const handleOutOfStockClick = (productId) => {
    setOutOfStockClicked(productId);
    setTimeout(() => {
      setOutOfStockClicked(null);
    }, 5000);
  };

  const products = [
    {
      id: 16,
      name: "Tennis Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$42"],
      oldPrice: [""],
      image: "/img/ms60.jpg",
      images: ["/img/ms60.jpg", "/img/ms61.jpg", "/img/ms62.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0C32SZ9BK/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0C32SZ9BK&pd_rd_w=26sbH&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=6J7CZT8N2X96PYPMYQYM&pd_rd_wg=OVG7Y&pd_rd_r=9edb06f3-208e-4867-bc46-f06f39708901&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "Mens Slip On Wide Walking Shoes Memory Foam Runnning Tennis Shoes Lightweight Breathable Casual Sneakers",

      specifications: {
        SoleMaterial: "Phylon",
        OuterMaterial: "Mesh",
        ClosureType: "Pull-On",
      },
    },

    {
      id: 17,
      name: "Hype Sneaker",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$41.17 - $75.00"],
      oldPrice: [""],
      image: "/img/ms55.png",
      images: ["/img/ms55.png", "/img/ms56.jpg", "/img/ms57.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Skechers-Bobs-Squad-Chaos-Slip-Ins/dp/B0CB22RY4Q/ref=sr_1_7?dib=eyJ2IjoiMSJ9.Hnhicpv9OBYqNV1zyZaFYU3-1uVRxROSawpet2ZD4I-hn7mlY6LBfNSeYa_fZ-P8lVHJ4jhqGpT6e8mCJu14W2J_c5Dg9ftRJCvr8cyMDlZwJScGigIgI9ytTMvo25kfD4qHdZCoZKCcrEwC6ZtAq1y-kShndgteniegNgiNQvSOQnKyJcuOk1iMmCvO3BIf03rsM-F1cv56lxr2OWWsZsR77hNC-Qe2w9pIBw56DKOoDtOhHBYTFgUx6JnTjX_HE7vYJzhg9MKIeaI-aU50PfVOKN7X9gXX7hLBG3doAbc.oRXDoCEtUnQxzkW3u0L4AbtJaFioSRaWRQZgWHpC3g0&dib_tag=se&keywords=sneakers&qid=1744900973&refinements=p_n_feature_thirty-two_browse-bin%3A121075132011&rnid=121075130011&s=apparel&sr=1-7",

      features:
        "Skechers Men's Hands Free Slip-ins Bobs Squad Chaos-Daily Hype Sneaker",

      specifications: {
        Origin: "Imported",
        SoleMaterial: "Synthetic Rubber",
        ShaftHeight: "Ankle",
        OuterMaterial: "Engineered knit",
      },
    },
    {
      id: 18,
      name: "Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$23"],
      oldPrice: [""],
      image: "/img/ms52.jpg",
      images: ["/img/ms52.jpg", "/img/ms53.jpg", "/img/ms54.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/kufeiti-Canvas-Sneakers-Walking-Men%EF%BC%88Full/dp/B0D3PXMZZN/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.Hnhicpv9OBYqNV1zyZaFYSekpq_njB61-CROF9ed2CyPkCs4ustmRya3VdvIkRsuRIMa4-UU-cAmxKgad7ywAExetxt7HMjXd9ZdYiFMKyRp_P_uCFwPecDI-CvvI-_P3rIM0FAtFcAjzLWohKsp-EoHmPfdNh2pgIPofHFkhS7lLEYyttPFw6kQHA_VmvDJ4TkdgNbiMko5nM5DFUknt841yp2NEaHmI5KMRtWgcL8H9uohyIb93li53RNjFptsplzbVRwx1oeYoHYFICA1WXqiJ1d9VxFxjOXxerebB5E.FJHEQ4ZpuVkqmpwdzyGuQQ1Kryl3hJidQtz8Hq96yrA&dib_tag=se&keywords=sneakers&qid=1744900167&refinements=p_n_feature_thirty-two_browse-bin%3A121075132011&rnid=121075130011&s=apparel&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1",

      features:
        "kufeiti Men's Canvas Black Casual Shoes Sneakers Low Top Lace Up Walking Shoes Sneakers for Men",

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Canvas",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 19,
      name: "Dress Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["$34"],
      oldPrice: [""],
      image: "/img/ms90.png",
      images: ["/img/ms90.png", "/img/ms91.jpg", "/img/ms92.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DG1VL9H4/ref=sspa_dk_detail_2?pd_rd_i=B0DG1VL9H4&pd_rd_w=lw10h&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=XZZYWGEGW7C9AVB5MCQM&pd_rd_wg=YD8xm&pd_rd_r=5f0a8f96-8b30-4d0a-a4ed-00d4401e4a30&s=shoes&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features: "Men's Casual Oxfords Dress Shoes Business Formal Sneakers",

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Polyurethane (PU)",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 20,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$39"],
      oldPrice: [""],
      image: "/img/ms66.png",
      images: ["/img/ms66.png", "/img/ms67.jpg", "/img/ms68.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0D6TS7JDY/ref=sspa_dk_detail_4?pd_rd_i=B0D6TS7JDY&pd_rd_w=V32XG&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=XJ2JE7MMXC5TQE0VE2FM&pd_rd_wg=5OoCS&pd_rd_r=4a70cafb-26a8-4d88-8e2d-1cb73874cd2a&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Mens Wide Sneakers Walking Shoes - Wide Slip on Tennis Shoes,Lightweight Breathable Comfortable Running Shoes for Athletic Workout Gym Jogging and Casual Wear Wide Width",

      specifications: {
        SoleMaterial: "Phylon",
        OuterMaterial: "Knit",
        ClosureType: "Pull-On",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },

    {
      id: 21,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$69"],
      oldPrice: [""],
      image: "/img/ms69.png",
      images: ["/img/ms69.png", "/img/ms70.jpg", "/img/ms71.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CLQGY531/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0CLQGY531&pd_rd_w=bLUty&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=6RW10JVGJZE8DNC7WVYC&pd_rd_wg=MwpjV&pd_rd_r=7a31bc81-86b8-4998-9d05-aa05e42d60a3&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "FitVille Extra Wide Walking Shoes for Men Wide Width, Hook and Loop Orthopedic Sneakers for Swollen Feet Neuropathy - Rebound Core V8",

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Mesh",
        ClosureType: "Hook & Loop",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },

    {
      id: 22,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$69"],
      oldPrice: [""],
      image: "/img/ms72.png",
      images: ["/img/ms72.png", "/img/ms73.jpg", "/img/ms74.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CLQ1ND7W/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B0CLQ1ND7W&pd_rd_w=4Xar1&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=ABGH4ZW0K5217J9DXV6D&pd_rd_wg=wpyD9&pd_rd_r=4737e176-218c-4865-8a49-c6916b111705&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "FitVille Men's Walking Shoes Wide Width Diabetic Shoes Orthopedic Sneaker Hook and Loop Running Shoes for Flat Feet Plantar Fasciitis - Rebound Core V7",

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Mesh",
        ClosureType: "Hook & Loop",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },
    {
      id: 23,
      name: "Leather Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["$69"],
      oldPrice: [""],
      image: "/img/ms46.png",
      images: ["/img/ms46.png", "/img/ms47.png", "/img/ms48.png"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Gunnar-Troy-Sentinel-Leather-Ironhide/dp/B0DB66ZMZV/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.8e-PNscV7Hxzt1raMagqKvyeAmWFTsxybBPuC3Aqy8gRGcjMeMKuA6KOydezKYbMSb9fob1X13vBMFNav9DflpWcQ4DiTi0NfbUKyRd3OfG1GtTxveM46L6O4fVusF7Ha6v_1gjaYBvrgzauHcvmmrSHP7bqJ-5ZAwoTPuuMKtpqrYp3n0HFHiBWnqUVGgGe6-f0EOm8lHF_EyOmzIxXHHHuz60nPeF6nENBLR_n7uZuO5JxTocLpRJWX1wQSyrJCMRnIoox1nByRgdAHnRBh0bzFF5zIqnf3IS_pVhka_c.aez5z2ddsjYve8FKtQDmBu7ThaisnfV9aFxapooRQEQ&dib_tag=se&keywords=mens%2Bshoes%2Bon%2Bsale&qid=1744898316&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1",

      features:
        "Gunnar and Troy Sentinel Soft Leather Mens Dress Shoes | Classic Lace-up Wingtip Oxford Shoes | Classic Modern Leather Shoes for Men",

      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Leather",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 24,
      name: "Dress Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["$44"],
      oldPrice: [""],
      image: "/img/ms49.png",
      images: ["/img/ms49.png", "/img/ms50.png", "/img/ms51.png"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Gunnar-Troy-Thorsson-Cushioned-Ironhide/dp/B0DB674RCX/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.8e-PNscV7Hxzt1raMagqKvyeAmWFTsxybBPuC3Aqy8gRGcjMeMKuA6KOydezKYbMSb9fob1X13vBMFNav9DflpWcQ4DiTi0NfbUKyRd3OfG1GtTxveM46L6O4fVusF7Ha6v_1gjaYBvrgzauHcvmmrSHP7bqJ-5ZAwoTPuuMKtpqrYp3n0HFHiBWnqUVGgGe6-f0EOm8lHF_EyOmzIxXHHHuz60nPeF6nENBLR_n7uZuO5JxTocLpRJWX1wQSyrJCMRnIoox1nByRgdAHnRBh0bzFF5zIqnf3IS_pVhka_c.aez5z2ddsjYve8FKtQDmBu7ThaisnfV9aFxapooRQEQ&dib_tag=se&keywords=mens%2Bshoes%2Bon%2Bsale&qid=1744898316&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1",

      features:
        "Gunnar and Troy Thorsson Oxford Mens Dress Shoes | PU Leather Shoes for Men | Classic Wingtip Oxford for Men | Cushioned Dual Density Footbed Tuxedo Shoes | Ironhide Black",

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Faux Leather",
        ClosureType: "Lace-Up",
      },
    },
    {
      id: 25,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$42"],
      oldPrice: [""],
      image: "/img/ms63.png",
      images: ["/img/ms63.png", "/img/ms64.jpg", "/img/ms65.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0BKG1KMH5/ref=sspa_dk_detail_1?pd_rd_i=B0BKG1KMH5&pd_rd_w=ZI8jX&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=7J8JH6J029CM3E30Y0J8&pd_rd_wg=Oslf3&pd_rd_r=1066e34d-3494-4755-941b-9bc2c61e2636&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Walking Shoes for Men Sneakers - Slip on Memory Foam Running Tennis Shoes for Athletic Workout Gym Jogging Indoor Outdoor Lightweight Breathable Casual Sneakers",

      specifications: {
        SoleMaterial: "MD",
        OuterMaterial: "Knitted, MD",
        ClosureType: "Pull-On",
      },
    },

    {
      id: 26,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$36"],
      oldPrice: [""],
      image: "/img/ms75.png",
      images: ["/img/ms75.png", "/img/ms76.jpg", "/img/ms77.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Bruno-Marc-Sneakers-Lightweight-Grand-01/dp/B07ZLSTZGB/ref=sr_1_3_sspa?crid=27XQF806DGWY8&dib=eyJ2IjoiMSJ9.lZsi2r72BrPaKTf6qa08F-FTIKX2OqEIX3YmAB7_BHz0qQYT4GQkaiSUgegLYM4bXI7ju1Sb3xPyh2cJ_SDxcRDOp5HltcuZ_XNjUHYvFc8XGi43L3LzsmnPZIH8u9zQtMKrTD8p8a-nd3MnrgOS4GLKj1FGg-pAxRjwv0t3xFTgVao2M5nzhYl4-qyn5AnJuRnF2sujcQYWmKc3YD6UTLwFLBtUUyDlwcFCQnAeDU5-HBo4ZdeX2yeZABEQipAEWK-PCvotPxS22ED_3nUTH6wlkTkiecy8Vcw3cdIiceg.a4-Ips1TaKg7nxokibCbJNsb-rCtrF0Ynt8mnqa7c8E&dib_tag=se&keywords=mens%2Bshoes&qid=1744922337&sprefix=mens%2Bshoes%2Caps%2C394&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1",

      features:
        "Bruno Marc Men's KnitFlex Breeze Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes",

      specifications: {
        FabricType: "100% Textile",
        Origin: "Imported",
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
      },
    },

    {
      id: 27,
      name: "Walking Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$29"],
      oldPrice: [""],
      image: "/img/ms78.png",
      images: ["/img/ms78.png", "/img/ms79.jpg", "/img/ms80.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CNRHLB1J/ref=sspa_dk_detail_1?pd_rd_i=B0CNRHLB1J&pd_rd_w=F3IxT&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=P9C3Z7W5FGQVCGAP3249&pd_rd_wg=SohDU&pd_rd_r=4d8faf06-24a5-4e89-9ab4-319c57a057dc&s=shoes&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Mens Casual Dress Oxfords Shoes Fashion Mesh Work Business Walking Sneakers Comfortable Lightweight Soft Sole",

      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 28,
      name: "Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$35"],
      oldPrice: [""],
      image: "/img/ms81.png",
      images: ["/img/ms81.png", "/img/ms82.jpg", "/img/ms83.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B01N3MAX7M/ref=sspa_dk_detail_2?pd_rd_i=B01N3MAX7M&pd_rd_w=eQf5W&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=E63F010BH3GQ5P5KS7VD&pd_rd_wg=O89y8&pd_rd_r=0183d044-d062-4920-a647-128db135b77c&s=shoes&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features: "Bruno Marc Men's Rivera Oxfords Shoes Sneakers",

      specifications: {
        FabricType: "Textile",
        SoleMaterial: "Rubber",
        OuterMaterial: "Fabric/Polyurethane",
        ClosureType: "Lace-Up",
      },
    },
    {
      id: 29,
      name: "Mesh Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$29"],
      oldPrice: [""],
      image: "/img/ms84.png",
      images: ["/img/ms84.png", "/img/ms85.jpg", "/img/ms86.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DLH2RS48/ref=sspa_dk_detail_9?pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=E63F010BH3GQ5P5KS7VD&pd_rd_wg=O89y8&pd_rd_w=eQf5W&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pd_rd_r=0183d044-d062-4920-a647-128db135b77c&s=shoes&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Mens Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes Fashion Sneakers Shoes",

      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Fabric",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 30,
      name: "Mesh Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["$36"],
      oldPrice: [""],
      image: "/img/ms87.png",
      images: ["/img/ms87.png", "/img/ms88.jpg", "/img/ms89.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DJS8PG73/ref=sspa_dk_detail_4?pd_rd_i=B0DJS8PG73&pd_rd_w=vMmdf&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=773E02ME6M22ACV4D6RA&pd_rd_wg=oqjHy&pd_rd_r=b670a351-e23c-4b86-943c-3f819d81aba5&s=shoes&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Bruno Marc Men's KnitFlex Breeze Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes",

      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
        ClosureType: "Lace-Up",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },
  ];

  // Filter products based on the selected filter
  const filteredProducts =
    selectedFilter === "All"
      ? products
      : selectedFilter === "Shoes"
      ? products.filter((product) => product.brand === "Shoes")
      : products.filter((product) => product.subBrand === selectedFilter);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -220;
      const elementPosition =
        productsContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setLoading(true);
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  useEffect(() => {
    if (currentPage !== 1 || selectedFilter !== "All") {
      scrollToProductsContainer();
    }
  }, [currentPage, selectedFilter]);

  const handleProductClick = (product, e) => {
    const isOutOfStockButton = e.target.closest(".btn.out-of-stock");
    if (isOutOfStockButton) {
      e.preventDefault();
      e.stopPropagation();
      handleOutOfStockClick(product.id);
      return;
    }
    const isViewDetailsButton = e.target.closest(".btn.buy-now");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="products-container" style={{ marginTop: "78px" }}>
      <h2>Men's Shoes Collection</h2>
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Men's Sneakers", "Men's Dress Shoes"].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`filter-button ${
              selectedFilter === filter ? "active" : ""
            }`}
          >
            {filter === "Men's Sneakers"
              ? "Sneakers"
              : filter === "Men's Dress Shoes"
              ? "Dress Shoes"
              : filter}
          </button>
        ))}
      </div>
      {loading && <div className="loading-spinner"></div>}
      <div
        className={`products-grid ${loading ? "loading" : ""}`}
        ref={productsContainerRef}
      >
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={(e) => handleProductClick(product, e)}
            style={{
              cursor: product.stock === "in-stock" ? "pointer" : "default",
            }}
          >
            {product.stock === "out-of-stock" && (
              <div className="out-of-stock-badge">Out of Stock</div>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 style={{ fontSize: "14px" }}>{product.name}</h3>
              <p style={{ fontSize: "12px", color: "#666" }}>
                <span style={{ display: "none" }}>{product.brand}</span>
                {product.subBrand && ` ${product.subBrand}`}
              </p>

              <div>
                <p className="product-price">
                  {product.price}{" "}
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice}</span>
                  )}
                </p>
              </div>
              <div className="product-buttons">
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #000",
                  }}
                  className="btn buy-now"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`, { state: { product } });
                  }}
                >
                  View Details
                </button>
                {product.stock === "in-stock" ? (
                  <button
                    className="btn add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement("a");
                      link.href = product.link; // Your affiliate URL
                      link.target = "_blank";
                      link.rel = "nofollow noopener noreferrer";
                      link.click();
                    }}
                  >
                    Buy on Amazon
                  </button>
                ) : (
                  <button
                    className="btn out-of-stock"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOutOfStockClick(product.id);
                    }}
                    style={{ backgroundColor: "#ff4444" }}
                  >
                    {outOfStockClicked === product.id
                      ? "Out of Stock"
                      : "Out of Stock"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`pagination-button ${
              currentPage === 1 ? "disabled" : ""
            }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`pagination-button ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              );
            } else if (
              (page === 2 && currentPage > 4) ||
              (page === totalPages - 1 && currentPage < totalPages - 3)
            ) {
              return (
                <span key={page} className="pagination-dots">
                  ...
                </span>
              );
            }
            return null;
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`pagination-button ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {alertVisible && (
        <div className="custom-alert">
          <img
            className="alert-image"
            src="./img/right.png"
            alt="Success Icon"
          />
          <div className="alert-message">Successfully added product</div>
        </div>
      )}
    </div>
  );
}

export default MenShoes;
