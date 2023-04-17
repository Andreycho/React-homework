const SearchBar = () => {
  return (
    <>
    <div className="mx-0 pt-8 relative">
        <div className="flex justify-between mx-6">
          <div className="inline-block justify-center">
            <div className="inset-2">
              <img src="src/assets/wallpaperit-Logo.png"/> 
            </div>
            </div>
            <div className="inline-block px-3 max-w-4xl w-full relative">
              <div className="border-2 border-emerald-500 rounded-3xl px-5 py-2">
                <input className="font-avenir text-xl border-0 " type="text" placeholder="Search for products..."/>
                    <img src="src/assets/search.png" className="absolute right-6 bottom-4 "/>
                        <span className="hidden">Search</span>
                      </div>
                  </div>
                <div className="flex justify-between space-x-16 font-avenir text-xs font-extralight pr-4">
                    <div>
                  <img src="src/assets/profile.png" className="mx-auto"/>
                    <span>Sign In</span>
               </div>
                <div>
                <img src="src/assets//heart.png" className="mx-auto"/>
                    <span>Wishlist</span>
                </div>
                <div>
                <img src="src/assets/bag.png" className="mx-auto"/>
                <span>Bag</span>
                </div>
                </div>
            </div>
            </div>

            <div className="flex w-full justify-evenly text-center mt-8 border-b-4 border-b-lime-500">
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">WALLPAPER</div>
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">PAINT</div>
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">BRANDS</div>
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">WALL MURALS</div>
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">WALL ART</div>
            <div className="w-full sm:w-auto sm:flex-grow p-2 font-avenir text-[16px]">SALE</div>
          </div>
       </>           
  )
}

export default SearchBar