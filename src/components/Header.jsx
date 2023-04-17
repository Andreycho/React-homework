import Banner from "./Banner";
import ListItems from "./ListItem";
import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <>
      <Banner/>
      <SearchBar/>
          <div>
                <div className="flex justify-around bg-gray-100 text-lg">
                    <div className="my-3 px-2 flex">
                            <span className="flex">
                                <img src="src/assets/tick.svg" className="my-auto mr-1"/>
                                <span><span className="font-bold">Free Delivery</span> On All Orders Over $50</span>
                            </span>
                            <span></span>
                    </div>
                    <div className="my-3 px-2 flex">
                            <span className="flex">
                                <img src="src/assets/tick.svg" className="my-auto mr-1"/>
                                <span className="font-bold">Customer Rate Us 4.7/5</span>
                            </span>
                    </div>
                    <div class="my-3 px-2">
                            <span>
                                <span className="src/assets/tick.svg"></span>
                                <span><span className="font-bold">Free & Easy</span> Returns*</span>
                            </span>
                    </div>
                </div>
          </div>

           <ListItems/>        
        
    <header className="w-full h-full my-4 text-center">
      <h1 className="mb-4 font-bold">Animal Wallpaper</h1>
      <p className="mb-4 p-4 max-w-[80%] mx-auto">
        When it comes to adding a dose of exotic chic to your home, you can’t go
        wrong with our animal print wallpaper. From tiny critters to magnificent
        beasts, we’ve got an impressive selection of gorgeous animal wallpaper
        to complement every room in the house – including living rooms, dining
        rooms and even your bedroom! Available in a wide range of colourways,
        our animal print wallpaper is the perfect way to create a feature wall
        or used to decorate the entire space to make a bold statement.
      </p>
    </header>
   </> 
  );
};

export default Header;
