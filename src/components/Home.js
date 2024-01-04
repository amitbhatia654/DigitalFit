import React from 'react'
import pic4 from "./images/pic4.png"
import AboutUs from './AboutUs'
import ServiceFile from './ServiceFile'
// import Design from "./images/Design.mp4"


export default function Home() {
    return (
        <div>
            {/* <img src={pic4} alt='Hello' /> */}
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={pic4} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="d-block w-100 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <AboutUs />










            {/* <video width="600" height="500" autoPlay muted loop  >
                <source src={Design} type="video/mp4" />
            </video> */}
            {/* import services from './services' */}

            <ServiceFile></ServiceFile>






        </div>
    )
}
