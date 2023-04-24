import Rating from "./Rating";

const ProductCard = (props) => {

  // const randomPrice = (Math.random() * (100 - 10) + 10).toFixed(2);

  return (
    <article className="p-4 flex flex-col justify-center gap-y-4">
      <img src={props.url} alt="Product Logo" className="cursor-pointer h-1/2" />
      <p className="cursor-pointer hover:underline text-base">{props.title}</p>
      <div className="w-full flex flex-col justify-between">
        <Rating rating={props.rating} />
        <p className="text-lg">£{props.price}</p>
        <button className="underline cursor-pointer text-sm self-end">
          Order example
        </button>
      </div>
      <p className="text-base uppercase">Per roll</p>
    </article>
  );
};

export default ProductCard;
