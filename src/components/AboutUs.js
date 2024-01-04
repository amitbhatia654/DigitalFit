import React from 'react'
import DigitalFit from "./images/DigitalFit.png"

export default function AboutUs() {
    return (

        <>
            <div className='container-fluid my-5'>
                <div className='row mx-3'>
                    <div className='col-md-5'>
                        <img src={DigitalFit} alt='DigitalFit' className='img-fluid' ></img>
                    </div>

                    <div className='col-md-6 '>

                        <span className='about'>
                            At DigitalFit IT Services, we craft innovative software solutions to elevate your business potential.
                        </span> <br></br>

                        DigitalFit is a business solution provider for corporate, small companies and individuals interested in designing & development needs of their web-based projects. We are specialised in Responsive Web Design, Custom Web Development, Android and IOS Mobile App Development , Software Development, E-Commerce, CRM across the globe.
                        <br></br>
                        <button className='btn btn-primary my-3'>Contact us</button>
                    </div>
                </div>
            </div >


            <div className='about2'>
                <div className='container'>
                    <div className=''>
                        <span className='about  '>Who We Are?</span>
                        <br></br>

                        <span> We are a software development company specializing in web 3.0 solutions with a focus on innovation and quality work. We specialize in providing cutting-edge digital solutions that help businesses of all sizes achieve their goals. We believe in leveraging the latest technology to build efficient and effective software solutions that drive business growth.
                        </span>

                        <br></br>
                        <span >
                            Whether it's building a custom website, developing a mobile app, or creating complex software systems, we have the expertise and experience to bring your vision to life. We're dedicated to helping our clients succeed in a rapidly changing digital landscape. At our core, we are driven by a passion for technology and a commitment to delivering & boosting business potential.
                        </span>
                    </div>

                </div>



                <div className=' container'>
                    <div className=''>
                        <span className='badge bg-info text-dark fs-4 my-3 '>Our Mission
                        </span>
                        <br></br>


                        <span className='about '>
                            Building Software to Empower & Transform
                        </span>

                        <br></br>

                        <span>With over a decade of experience in the IT industry, he has a proven track record of successfully leading teams and delivering high-quality software. His passion for innovation and customer satisfaction has been the driving force behind our company's growth.

                        </span>



                        <div className='row'>
                            <div className='col-md-12 '>
                                <span className=' fs-2 text'><b> Why is IT support important for businesses?</b></span>
                                <br></br>
                                Nowadays, digital technology is an integral part of nearly all industries. Companies use a wide variety of software and hardware systems to streamline their operations and deliver increased value to customers. IT services are essential to maintaining these systems and ensuring that companies remain competitive in an evolving technological environment. Here are some of the benefits of good IT services:
                                <ul>
                                    <li>Monitoring and analytics</li>
                                    <li>Increased productivity</li>
                                    <li>Enhanced security</li>
                                    <li>Better marketing</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}
