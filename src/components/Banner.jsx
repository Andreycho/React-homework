import React, { useState } from 'react'

const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);

    const closeBanner = () => {
        setShowBanner(false);
    }

  return (
    <div>
    {showBanner && 
       (<div className="py-1 relative text-center bg-emerald-500 text-base text-avenir">
            <div>
                <a> Get 10% Off Your First Order* With HELLO10</a>
            </div>
            <span className="absolute right-2 inset-y-1 cursor-pointer" onClick={closeBanner}>
               <img className="w-[10px] h-[12px] mt-1 mr-2" src="src\assets\close.png"/>
            </span>
        </div>) 
    }
    </div>
    
  )
}

export default Banner
