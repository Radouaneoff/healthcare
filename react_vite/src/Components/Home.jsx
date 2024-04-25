import img1 from '../img/doctor1.jpg'
import img2 from '../img/doctor2.webp'
import img3 from '../img/doctor3.webp'
import Services from './Servers';
import About from './About';
import Choose from './Why_Choose';
export default ()=>{

    return(
        <>
        <About/>
        <Services/>
        <Choose/>
       <section class="section__container doctors__container">
        <div class="doctors__header">
        <div class="doctors__header__content">
            <h2 class="text-3xl"> Our Special Doctors</h2>
                <p>hhhhhhhhhhhhhhhhhh HHHHHHH</p>
        </div>
        </div>
       <div class= "doctors__grid d-flex">
       <div class="doctors__card">
  <div class="doctors__card__image"> 
    <img class="h-50 w-auto" src={img1} alt="doctor" />
    <div class="doctors__contact-info shadow-2xl">
      <div class="flex doctors__socials flex">
        <span><i class="bi bi-facebook"></i></span>
        <span><i class="bi bi-instagram"></i></span>
        <span><i class="bi bi-twitter"></i></span>
        <span> <i class="bi bi-envelope"></i></span>
       
      </div>
    </div>
  </div>
    <h4 className='h-50 w-auto'>Sora ,Anne</h4>
  <p>and that the image is loading properly. Sometimes, if an image fails to load</p>
</div>
<div class="doctors__card">
  <div class="doctors__card__image"> 
    <img class="h-50 w-auto" src={img2} alt="doctor" />
    <div class="doctors__contact-info shadow-2xl">
      <div class="flex doctors__socials flex">
        <span><i class="bi bi-facebook"></i></span>
        <span><i class="bi bi-instagram"></i></span>
        <span><i class="bi bi-twitter"></i></span>
        <span> <i class="bi bi-envelope"></i></span>
      </div>
    </div>
  </div>
    <h4 className='h-50 w-auto'>Dr Ait Mechedal Radhouane</h4>
  <p>and that the image is loading properly. Sometimes, if an image fails to load</p>
</div>
<div class="doctors__card">
  <div class="doctors__card__image"> 
    <img class="h-50 w-auto" src={img3} alt="doctor" />
    <div class="doctors__contact-info shadow-2xl">
      <div class="flex doctors__socials flex">
        <span><i class="bi bi-facebook"></i></span>
        <span><i class="bi bi-instagram"></i></span>
        <span><i class="bi bi-twitter"></i></span>
        <span> <i class="bi bi-envelope"></i></span>
       
      </div>
    </div>
  </div>
    <h4 className='h-50 w-auto'>Dr Ait Mechedal Radhouane</h4>
  <p>and that the image is loading properly. Sometimes, if an image fails to load</p>
</div>

       
       
       </div>
      
    </section>
        </>
    )
}