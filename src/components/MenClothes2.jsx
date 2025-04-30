import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function MenClothes2({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
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
      id: 31,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$33.98"],
      oldPrice: [""],
      image: "/img/ms93.png",
      images: ["/img/ms93.png", "/img/ms94.jpg", "/img/ms95.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/TACVASEN-Lightweight-Jacket-Spring-Flight/dp/B07VGQTMYD?ref_=Oct_d_obs_d_1045830_1&pd_rd_w=ieQt3&content-id=amzn1.sym.3077d44e-b53e-482e-b605-9df89d795020&pf_rd_p=3077d44e-b53e-482e-b605-9df89d795020&pf_rd_r=3D6SZ86G711MWECH8R45&pd_rd_wg=uJX11&pd_rd_r=5c73609b-3746-4471-88be-ccc222c2a082&pd_rd_i=B07VGQTMYD",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Machine Wash",
      },
    },

    {
      id: 32,
      name: "Lightweight Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms96.png",
      images: ["/img/ms96.png", "/img/ms97.jpg", "/img/ms98.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B089B3YH4X/ref=sspa_dk_detail_1?pd_rd_i=B089B3YH4X&pd_rd_w=YnmW7&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=1AXA820PGSDZD6E20K4P&pd_rd_wg=6Vx2O&pd_rd_r=72bf7144-f3cb-4029-a591-6aa2df5b91c2&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",

      specifications: {
        FabricType: "100% Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 33,
      name: "Lightweight Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$31"],
      oldPrice: [""],
      image: "/img/ms99.png",
      images: ["/img/ms99.png", "/img/ms100.jpg", "/img/ms101.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0C1CF21MG/ref=sspa_dk_detail_3?pd_rd_i=B0C1CF21MG&pd_rd_w=R1epe&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=VZQJB8HB16VS7XSZ2J7R&pd_rd_wg=4qXQY&pd_rd_r=ecae54ba-0866-48f5-a92b-56876fb764a0&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Spring Bomber Fall Windbreaker Casual Stylish Coats with Pockets",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
        Origin: "Imported",
      },
    },

    {
      id: 38,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$17.99 - $65.72"],
      oldPrice: [""],
      image: "/img/ms114.jpg",
      images: [
        "/img/ms114.jpg",
        "/img/ms115.jpg",
        "/img/ms116.jpg",
        "/img/ms117.jpg",
        "/img/ms118.jpg",
      ],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Gildan-T-Shirts-Multipack-Heather-X-Large/dp/B09312N4RH/ref=sr_1_5?c=ts&dib=eyJ2IjoiMSJ9.9lnJWFoAwmY-gUmtOOViO6SddJd_hU_Qbc4Lk-O7fCwKJQoM14OM2O4SQdKRhoJOOCUrFO10WsCMAG6MBehOc4z1UYMayQMCVgoXjoFJy1fUk6Z8YhF15ocCDUameUHEgpxLW2xqOwNrhyyQyUnmvwkiSzn9dcnJ4-wc9hc1N8iyjMGqKXpj_gCINMv3z6XkrlWBX3VOnQdi3JUXM1hBPPHFkhLv4HlpuwODASAQRMJLVF8G_FJk2e0S-31zhPBhwbvRwS5kVI_l650AuUCDPuDUZKUDtrQC4KFnNufPeR8.TNMIEns3aXWaHIsHABqN_oSAj-gAH3KJBgrZx1xHMjA&dib_tag=se&keywords=Men%27s+T-Shirts+%26+Tanks&qid=1745771761&s=apparel&sr=1-5&ts_id=15697821011",

      features: "Gildan Men's Crew T-Shirts, Multipack, Style G1100",

      specifications: {
        FabricType: "100% Cotton",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },

    {
      id: 41,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$44"],
      oldPrice: [""],
      image: "/img/ms125.png",
      images: ["/img/ms125.png", "/img/ms126.jpg", "/img/ms127.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Kingsted-Mens-T-Shirts-Pack-Comfortable/dp/B07NHW8Z3N/ref=sr_1_2_sspa?c=ts&dib=eyJ2IjoiMSJ9.DvUJ9bqwMpS9ZZCfH_-n5gmFVqSHayIJppR66Lidj1EKJQoM14OM2O4SQdKRhoJOOCUrFO10WsCMAG6MBehOc4z1UYMayQMCVgoXjoFJy1fUk6Z8YhF15ocCDUameUHEgpxLW2xqOwNrhyyQyUnmvwkiSzn9dcnJ4-wc9hc1N8iyjMGqKXpj_gCINMv3z6XkrlWBX3VOnQdi3JUXM1hBPPHFkhLv4HlpuwODASAQRMJLVF8G_FJk2e0S-31zhPBhwbvRwS5kVI_l650AuUCDPuDUZKUDtrQC4KFnNufPeR8.6d4onzvmCE5C6zP3KN9eSvQnKNJu1I2aAjyqlkrsY20&dib_tag=se&keywords=Men%27s+T-Shirts+%26+Tanks&qid=1745773156&s=apparel&sr=1-2-spons&ts_id=15697821011&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",

      features:
        "Kingsted T-Shirts for Men Pack - Royally Comfortable - Super Soft Premium Fabric - Well-Crafted Classic Tee",

      specifications: {
        FabricType: "Polycotton",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Side-Seamed",
      },
    },

    {
      id: 39,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$76"],
      oldPrice: [""],
      image: "/img/ms119.png",
      images: ["/img/ms119.png", "/img/ms120.jpg", "/img/ms121.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0B57TPMH4/ref=sspa_dk_detail_0?pd_rd_i=B0B57TPMH4&pd_rd_w=S2kvx&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=2E0DE165D9PAYSDN9NYK&pd_rd_wg=oAU37&pd_rd_r=e120c1de-e8c1-4ea7-aa6d-e03b4f3c21ac&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "Fresh Clean Threads Crew Neck T-Shirt - Pre Shrunk Soft Fitted Premium Tee - Men’s T- Cotton Poly",

      specifications: {
        FabricType: "60% cotton / 40% polyester jersey knit 145gsm",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },

    {
      id: 40,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$35"],
      oldPrice: [""],
      image: "/img/ms122.png",
      images: ["/img/ms122.png", "/img/ms123.jpg", "/img/ms124.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/JMIERR-Hipster-Longline-Crewneck-T-Shirt/dp/B0BXXFW5FT/ref=sr_1_3_sspa?c=ts&dib=eyJ2IjoiMSJ9.DvUJ9bqwMpS9ZZCfH_-n5gmFVqSHayIJppR66Lidj1EKJQoM14OM2O4SQdKRhoJOOCUrFO10WsCMAG6MBehOc4z1UYMayQMCVgoXjoFJy1fUk6Z8YhF15ocCDUameUHEgpxLW2xqOwNrhyyQyUnmvwkiSzn9dcnJ4-wc9hc1N8iyjMGqKXpj_gCINMv3z6XkrlWBX3VOnQdi3JUXM1hBPPHFkhLv4HlpuwODASAQRMJLVF8G_FJk2e0S-31zhPBhwbvRwS5kVI_l650AuUCDPuDUZKUDtrQC4KFnNufPeR8.6d4onzvmCE5C6zP3KN9eSvQnKNJu1I2aAjyqlkrsY20&dib_tag=se&keywords=Men%27s+T-Shirts+%26+Tanks&qid=1745773156&s=apparel&sr=1-3-spons&ts_id=15697821011&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",

      features:
        "JMIERR Mens 3 Pack Cotton Hipster Hip Hop Longline Crewneck T-Shirt",

      specifications: {
        FabricType: "62%Polyester, 32%Cotton, 6%Elastane",
        CareInstructions: "Machine Wash",
        Origin:
          "We Use American Standard Size: S=(US 38), M=(US 40), L=(US 43), XL=(US 46), 2XL=(US 50), 3XL=(US 52), 4XL=(US 56), 5XL=(US 60).",
        ClosureType: "Pull On",
      },
    },

    {
      id: 37,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$39"],
      oldPrice: [""],
      image: "/img/ms111.png",
      images: ["/img/ms111.png", "/img/ms112.jpg", "/img/ms113.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CJ8RQCH7/ref=sspa_dk_detail_5?pd_rd_i=B0CJ8RQCH7&pd_rd_w=lB3jn&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=CKG4ZFTPZ3CC24ADR7XB&pd_rd_wg=8noNP&pd_rd_r=9168cbf6-1a87-4632-9bb4-63aea4692f90&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Bomber Jackets Thermal Quilted Jacket Water Resistant Warm Winter Coats",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },

    {
      id: 34,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms102.png",
      images: ["/img/ms102.png", "/img/ms103.jpg", "/img/ms104.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0B3X5JGZ6/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0B3X5JGZ6&pd_rd_w=kzKXN&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=AXJH1HCPTCJR1BPBTCM2&pd_rd_wg=ZZgfE&pd_rd_r=54d050ea-4c12-4a3b-a47e-3c7d267e4ae7&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 35,
      name: "Lightweight Jacket ",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms105.png",
      images: ["/img/ms105.png", "/img/ms106.jpg", "/img/ms107.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0B51V3H4R/ref=sspa_dk_detail_1?pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=2AYN0N2G06R6N3S54HBE&pd_rd_wg=GbG7F&pd_rd_w=YZBhe&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pd_rd_r=c0be6180-bace-4950-a8c1-bae0db3e5ab4&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",

      specifications: {
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 36,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["$42"],
      oldPrice: [""],
      image: "/img/ms108.png",
      images: ["/img/ms108.png", "/img/ms109.jpg", "/img/ms110.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B07VQJ8QGP/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B07VQJ8QGP&pd_rd_w=1ncPg&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=GG58RT8RMF4A6JQNSCT6&pd_rd_wg=NQOkW&pd_rd_r=e6836639-396f-4dd4-9a3c-4cc19178aca8&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "TACVASEN Men's Jackets-Bomber Jacket Fall Winter Warm Windbreaker Full Zip Casual Padded Coats",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },

    {
      id: 42,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$44"],
      oldPrice: [""],
      image: "/img/ms128.png",
      images: ["/img/ms128.png", "/img/ms129.jpg", "/img/ms130.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B08V25CBT2/ref=sspa_dk_detail_3?pd_rd_i=B08V25CBT2&pd_rd_w=89F08&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=3R38SPA625DMCETX2QJZ&pd_rd_wg=2gs3N&pd_rd_r=4fea5707-604c-45e1-ac1a-9cc5f235ec5b&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features: "Charles Wilson Men's 5 Pack Crew Neck T-Shirt",

      specifications: {
        FabricType: "100% Cotton",
        CareInstructions: "Machine Wash",
        ClosureType: "Pull On",
        NeckStyle: "Crew Neck",
      },
    },
    {
      id: 43,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$28"],
      oldPrice: [""],
      image: "/img/ms131.png",
      images: ["/img/ms131.png", "/img/ms132.jpg", "/img/ms133.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DGKXS1V5/ref=sspa_dk_detail_2?pd_rd_i=B0DGKXS1V5&pd_rd_w=wakqd&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=ZSSAHT2KWKEQRZPSZP9E&pd_rd_wg=3gpet&pd_rd_r=09add0be-4bd1-473c-a32f-39f8092e1ba1&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "COOFANDY Men's Short Sleeve T-Shirts Crew Neck Casual Summer T Shirts 1-3 Pack Basic Tee Shirt",

      specifications: {
        FabricType: "Soft Fabric",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },
    {
      id: 44,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["$29"],
      oldPrice: [""],
      image: "/img/ms134.png",
      images: ["/img/ms134.png", "/img/ms135.jpg", "/img/ms136.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DHWWF5J4/ref=sspa_dk_detail_0?pd_rd_i=B0DHWWF5J4&pd_rd_w=OKghx&content-id=amzn1.sym.85ceacba-39b1-4243-8f28-2e014f9512c7&pf_rd_p=85ceacba-39b1-4243-8f28-2e014f9512c7&pf_rd_r=SS8SA3034222EPP72NE4&pd_rd_wg=TGldy&pd_rd_r=3f13e06a-84d8-4c07-8ed6-639e867a330f&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "COOFANDY Men's Henley Shirts Short Sleeve Casual Summer Basic T Shirt Soild Button Tee Top",

      specifications: {
        FabricType: "Soft Fabric",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Button",
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

  const handleFilterChange = (filter) => {
    setFilterLoading(true);
    setSelectedFilter(filter);

    setTimeout(() => {
      setFilterLoading(false);
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
    <div className="products-container" style={{ marginTop: "15px" }}>
      <h2>Men's Clothes Collection</h2>
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Men's Jacket", "men's t-shirts"].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`filter-button ${
              selectedFilter === filter ? "active" : ""
            }`}
            disabled={filterLoading}
            style={{
              fontFamily: "'Montserrat', sans-serif", // Add your desired font family here
              fontWeight: selectedFilter === filter ? "bold" : "bold",
              // Add any other consistent styles you want to maintain
            }}
          >
            {filter === "men's t-shirts"
              ? "T-shirts"
              : filter === "Men's Jacket"
              ? "Jackets"
              : filter}
          </button>
        ))}
      </div>

      {(loading || filterLoading) && <div className="loading-spinner"></div>}

      <div
        className={`products-grid ${loading || filterLoading ? "loading" : ""}`}
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
                      link.href = product.link;
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
            disabled={currentPage === 1 || loading}
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
                  disabled={loading}
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
            disabled={currentPage === totalPages || loading}
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

export default MenClothes2;
