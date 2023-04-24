const ProductCard = (props) => {

  // const randomPrice = (Math.random() * (100 - 10) + 10).toFixed(2);

  return (
    <article className="p-4 flex flex-col justify-center gap-y-4">
      <img src={props.url} alt="Product Logo" className="cursor-pointer h-1/2" />
      <p className="cursor-pointer hover:underline text-base">{props.title}</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm">£{props.price}</p>
        <button className="underline cursor-pointer text-sm">
          Order example
        </button>
      </div>
      <p className="text-base uppercase">Per roll</p>
    </article>
  );
};

export default ProductCard;
