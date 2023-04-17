const ListItems = () => {
  const items = ['Home', ' / ', 'Wallpaper', ' / ', 'Shop By Design', ' / ', 'Animal'];

  return (
    <ul className="flex list-none ml-6">
      {items.map((item, index) => (
        <li
          key={index}
          className="mr-2"
        >
          {item.includes('/') ? (
            <span className="text-avenir text-base">{item}</span>
          ) : (
            <span className="underline text-avenir text-base">{item}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListItems;