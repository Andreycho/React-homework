import mastercard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import visa from "../assets/visa.svg";
import paypal from "../assets/paypal.svg";
import americanexpress from "../assets/americanexpress.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import pinterest from "../assets/pinterest.png";

const Footer = () => {
  return (
    <footer className="mb-[-1rem] border-t-2">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 pb-9 px-6 lg:py-10 text-white bg-zinc-800">
                    <div className="lg:col-span-4">
                        <div className="lg:grid lg:grid-cols-4">
                            <div className="border-b border-dim-gray lg:border-0">
                                <button className="flex w-full items-center justify-between py-5 font-['DMSerifDisplay'] text-xl md:pt-0 md:pb-7.5 cursor-default">
                                    Shopping with Us
                                </button>
                                <div>
                                    <ul>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" href="/">Delivery and Returns</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" href="/">Wallpaper Sample Serivce</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" href="/">Privacy Policy</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" href="/">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b border-dim-gray lg:border-0">
                            <button className="flex w-full items-center justify-between py-5 font-['DMSerifDisplay'] text-xl md:pt-0 md:pb-7.5 cursor-default">
                                    Wallpaper Guides
                                </button>
                                <div>
                                    <ul>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >Wallpaper FAQs</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >Wallpaper Guide</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >How to Hang Wallpaper</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >How to Remove Wallpaper</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >How to Hang a Wall Mural</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b border-dim-gray lg:border-0 ">
                            <button className="flex w-full items-center justify-between py-5 font-['DMSerifDisplay'] text-xl md:pt-0 md:pb-7.5 cursor-default">
                                    Visit Us
                                </button>
                                <div>
                                    <ul>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >Outlet Stores</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-b border-dim-gray lg:border-0">
                            <button className="flex w-full items-center justify-between py-5 font-['DMSerifDisplay'] text-xl md:pt-0 md:pb-7.5 cursor-default">
                                    How Can We Help?
                                </button>
                                <div>
                                    <ul>
                                        <li className="pb-5 px-4 text-[16px] lg:px-0 font-light">
                                            <a className="font-['avenir']" >Customer Service</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >Email Us</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >About Us</a>
                                        </li>
                                        <li className="pb-5 px-4 text-16 lg:px-0 font-light">
                                            <a className="font-['avenir']" >Call Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 text-center md:text-left font-['DMSerifDisplay'] leading-normal text-[24px] md:pt-0 md:pb-7.5">Sign up to Our Newsletter</div>
                        <form>
                            <div className="text-accent-6 rounded-full w-full mb-5">
                                <div className="mt-1 relative rounded-md">
                                    <input type="email" placeholder="Enter the email here" className="text-[16px] font-['avenir'] font-normal text-maire leading-normal tracking-wide relative inline-flex w-full bg-white border focus:outline-none px-4 rounded-full p-3 border-none !placeholder-accent-6"/>
                                </div>
                            </div>
                            <p className="text-[14px]">By signing up you are consenting to receive the newsletter and other promotional materials from Wallpaper It.</p>
                            <button className="w-full mt-5 rounded-full border-0 bg-[#6ECEB2] px-[2.5rem] py-[0.875rem] font-['avenir', 'Helvetica', 'sans-serif'] text-[.875rem] font-medium tracking-[.96px] text-black" type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-800 border-t border-dim-gray lg:grid grid-cols-3 py-5 items-center">
                <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-start lg:pl-6">
                    <nav className="relative text-black">
                        <button className="bg-white text-maire flex justify-center items-center text-[14px] leading-normal px-3 py-1 border rounded-full">
                            <span className="font-bold mr-2">UK</span> - 
                            <span className="ml-2">GBP</span>
                            <span className="cursor-pointer">
                                <span className="ml-2.5 mb-1"/>
                            </span>
                        </button>
                    </nav>
                    <div className="flex mt-10 lg:mt-0 lg:ml-5">
                        <a href="/">
                            <img src={facebook} className="w-[35px] h-[35px] mr-5 mt-[2px]" alt="Facebook"/>
                        </a>
                        <a href="/">
                            <img src={instagram} className="w-[35px] h-[35px] mr-5 mt-[2px]" alt="Instagram"/>
                        </a>
                        <a href="/">
                            <img src={youtube} className="w-[35px] h-[35px] mr-5 mt-[2px]" alt="YouTube"/>
                        </a>
                        <a href="/">
                            <img src={pinterest} className="w-[35px] h-[35px] mr-5 mt-[2px]" alt="Pinterest"/>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center text-[14px] text-['avenir'] text-white mt-7.5 lg:mt-0">
                Â© 2023 WallpaperIt
                </div>
                <div className="flex justify-between mx-auto max-w-sm mt-10 lg:mt-0 lg:max-w-none w-full lg:justify-end px-2 lg:px-5">
                    <div className="lg:mr-3 w-[50px] h-8">
                        <div className="h-full w-full">
                            <span className="block bg-none border-0 m-0 p-0 relative ">
                                <span className="block bg-none border-0 m-0 p-0"></span>
                                <img src={visa} className="w-[48px] h-[34px]" alt="Visa"/>
                            </span>
                        </div>
                    </div>
                    <div className="lg:mr-3 w-[50px] h-8">
                        <div className="h-full w-full">
                            <span className="block bg-none border-0 m-0 p-0 relative ">
                                <span className="block bg-none border-0 m-0 p-0"></span>
                                <img src={americanexpress} className="w-[50px] h-[32px]" alt="AmericanExpress"/>
                            </span>
                        </div>
                    </div>
                    <div className="lg:mr-3 w-[50px] h-8">
                        <div className="h-full w-full">
                            <span className="block bg-none border-0 m-0 p-0 relative ">
                                <span className="block bg-none border-0 m-0 p-0"></span>
                                <img src={maestro} className="w-[50px] h-[32px]" alt="Maestro"/>
                            </span>
                        </div>
                    </div>
                    <div className="lg:mr-3 w-[50px] h-8">
                        <div className="h-full w-full">
                            <span className="block bg-none border-0 m-0 p-0 relative ">
                                <span className="block bg-none border-0 m-0 p-0"></span>
                                <img src={mastercard}  className="w-[50px] h-[32px]" alt="MasterCard"/>
                            </span>
                        </div>
                    </div>
                    <div className="lg:mr-3 w-[74.95px] h-8">
                        <div className="h-full w-full">
                            <span className="block bg-none border-0 m-0 p-0 relative ">
                                <span className="block bg-none border-0 m-0 p-0"></span>
                                <img src={paypal}  className="w-[75px] h-[32px]" alt="PayPal"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer