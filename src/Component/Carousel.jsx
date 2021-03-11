import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";

// Force CSSPlugin to not get dropped during build
export default function ControlledCarousel() {
  let latestProduct = [
    {
      id: 1,
      name: "Eric Emanuel - Reebok Club C85",
      url:
        "https://cdn.shopify.com/s/files/1/0286/6505/3287/files/reebok-classics-eric-emanuel-club-c-22_2000x.jpg?v=1598259777",
    },
    {
      id: 2,
      name: "Reebok CL Leather AZ",
      url:
        "https://cdn.shopify.com/s/files/1/0286/6505/3287/files/reebok-classics-cl-leather-az-aztec-og-fw20-50_2000x.jpg?v=1599528767",
    },
    {
      id: 3,
      name: " Nike Dunk Hi 'Pro Green'",
      url:
        "https://cdn.accentuate.io/393462808679/1600244572861/nike-dunk-high-pro-green-49.jpg?v=0",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <div></div>;
}
