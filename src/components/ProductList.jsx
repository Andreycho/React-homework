import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
      );

      if (!result.ok) return;

      const data = await result.json();

      setProductList(data);
    };

    fetchData();

  }, []);

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
          <a className="font-avenir">Sort</a>
        </li>
      </ul>
    </div>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            url={product.url}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
