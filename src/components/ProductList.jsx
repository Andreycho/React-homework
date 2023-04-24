import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [sortOption, setSortOption] = useState('price-low-to-high');
  

  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch(
        "https://dummyjson.com/products"
      );

      if (!result.ok) return;

      const data = await result.json();

      setProductList(data.products);
    };

    fetchData();

  }, []);

  function handleSortChange(event) {
    setSortOption(event.target.value);
    switch (event.target.value) {
      case 'price-low-to-high':
        setProductList([...productList].sort((a, b) => a.price - b.price));
        break;
      case 'price-high-to-low':
        setProductList([...productList].sort((a, b) => b.price - a.price));
        break;
      default:
        setProductList(productList);
    }
  }

  return (
    <>
      <div className="flex justify-between items-center text-base border-b-2 border-lime-500 p-4">
      <p>
        <span className="font-bold">Found: </span>
        <span className="font-avenir">{productList.length} results</span>
      </p>
      <ul className="flex space-x-16 font-avenir text-lg">
        <li>
          <a className="font-avenir">Colour</a>
        </li>
        <li>
          <a className="font-avenir">Brand</a>
        </li>
        <li>
          <a className="font-avenir">Design Style</a>
        </li>
        <li>
        <label htmlFor="sort-selec font-avenir">Sort by:</label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
        </li>
      </ul>
    </div>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            url={product.images[0]}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
