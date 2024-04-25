import { useState } from "react";

const Navbar = () => {

  const [active, setActive] = useState("flex flex-col md:hidden");
  const [toggle, setToggle] = useState(false);

  function Show(){
    if(toggle){
      setToggle(false)
      setActive("flex flex-col")
    }else{
      setToggle(true)
      setActive("flex flex-col md:hidden")
      
    }
  }
  return (
    <nav class="section__container  nav__container">
    <div class="nav__logo">Health <span>Care</span></div>
    <ul class="nav__links ms:hidden">
        <li class="link"><a href="#home">Home</a></li> 
        <li class="link"><a href="#About ">About Us</a></li> 
        <li class="link"><a href="#Services">Services</a></li> 
        <li class="link"><a href="#pages">Pages</a></li> 
        <li class="link"><a href="#Blog">Blog</a></li> 
    </ul>
    <button                 className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Us</button>
    <a
                href="/Register"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reservation
              </a>
    <button type="button" onClick={Show} className="-m-2.5 inline-flex items-center justify-center lg:hidden rounded-md p-2.5 text-gray-700">
    Menu </button>

    <ul class= {active}>
        <li class="link"><a href="#home">Home</a></li> 
        <li class="link"><a href="#About ">About Us</a></li> 
        <li class="link"><a href="#Services">Services</a></li> 
        <li class="link"><a href="#pages">Pages</a></li> 
        <li class="link"><a href="#Blog">Blog</a></li> 
    </ul>
</nav>
  );
}

export default Navbar;
