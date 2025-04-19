import React from 'react'
import UserLayout from '../UserLayout'

const About = () => {
    return (
        <>
            <UserLayout>
                <div className="container-fluid">
                    <div className="container">
                    <div className="row justify-content-center  py-5">
                        <div className="col-md-10">
                            <p className='fs-4 fw-bold'>About Us : </p>
                        </div>
                        <div className="col-md-10">
                            <p className='display-6  text-info'>Introduction</p>
                            <p className='lh-lg'>
                                ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989. Dedicated to creating products for today’s and tomorrow’s smart life, ASUS is the world’s No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor. <br /><br />

                                ASUS became widely known in North America when it revolutionized the PC industry in 2007 with its Eee PC™. Today, the company is pioneering new mobile trends with the ASUS ZenFone™ series, and it is rapidly developing virtual and augmented reality products as well as IOT devices and robotics technologies. Most recently, ASUS introduced Zenbo, a smart home robot designed to provide assistance, entertainment, and companionship to families. <br /><br />

                                In 2015 and 2016, Fortune magazine recognized ASUS as one of the World’s Most Admired Companies, and for the past four years Interbrand has ranked ASUS Taiwan’s most valuable international brand. The company has more than 17,000 employees, including a world-class R&D team. Driven by innovation and committed to quality, ASUS won 4,385 awards and earned approximately US$13.3 billion in revenue in 2016.

                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </UserLayout>
        </>
    )
}

export default About
