import img from "../img/helthcare1.jpg"
function Choose () {
    return(
        <section class="section__container why__container">
        <div class="why__image">
            <img src={img} alt="why choose us"/>
        </div>
        <div class="why__content">
            <h2 class="section__header">Why Choose Us</h2>
            <p>
                hhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhh
            </p>
            <div class="why__grid">
                <span><i class="ri-hand-heart-line"></i></span>
                <div>
                    <h4>Intensive Care </h4>
                    <p>
                        gfhfhfff
                        fgggggggg
                        gggggggg
                    </p>
                </div>
                <span><i class="ri-truck-line"></i></span>
                <div>
                    <h4>Ambulance car  </h4>
                    <p>
                        gfhfhfff
                        fgggggggg
                        gggggggg
                    </p>
                </div><span><i class="ri-hospital-line"></i></span>
                <div>
                    <h4>Medical and Surgical </h4>
                    <p>
                        gfhfhfff
                        fgggggggg
                        gggggggg
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Choose;