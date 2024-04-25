import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
const Header = () => {
  const [Data, setData]= useState({firstname:'', lastname:'', address:'', phone:''});
  const [error, setError]= useState(null);

const Change = (e) => {
  const { name, value } = e.target;
  setData(prevState => ({
    ...prevState,
    [name]: value
  }));
  console.log(Data)
};

  function Submit(e){
    e.preventDefault();

    try {
    axios.post(`http://localhost:3000/register`, Data).then(res=>{
      setError(""+res.data.success)
    })}
    catch(error){
      setError("request not existe")
      console.log(error);
    }
    }
  return (
    <header id ='home' >
      <Navbar/>
    <div class="section__container header__container">
    <div class="header__container">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
    </div>
    <a href ="#Services" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See&nbsp;Servers </a>
<div class="header__form">
    <form  method="POST" onSubmit={Submit}>
        <h4>Book Now</h4>
        <input type="text" name="firstname" placeholder="Firste name" onChange={Change}/>
        <input type="text" placeholder="Laste name"  name="lastname" onChange={Change}/>
        <input type="text" placeholder="address" name="address" onChange={Change}/>
        <input type="numer" placeholder="Phone" name="phone" onChange={Change}/>
        <button class="btn form__btn"> Book Appointement</button>
    </form>
    <h1>{error}</h1>
</div>
</div>
</header>
  );
}

export default Header;