import React from 'react'
import UserLayout from '../UserLayout'

const Contact = () => {
    return (
        <>
            <UserLayout>
                <section>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row py-5 justify-content-between">
                                <div className="col-lg-5 align-content-center">
                                    <p className='fs-2'>Laptops
                                    </p>
                                    <p className='fs-4'> Service Time : Mon~Sat 09:00-18:00
                                    </p>
                                    <p className='mb-5'>Telephone :  1800-2090365</p>
                                    <p className='fs-2'>Commercial (Expert Series Support)
                                    </p>
                                    <p className='fs-4'> Service Time : Mon~Sat 09:00-18:00
                                    </p>
                                    <p>Telephone : 1800-2678901</p>
                                </div>
                                <div className="col-lg-6">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d222000.1905078874!2d72.55892985675193!3d23.062114746921846!3m2!1i1024!2i768!4f13.1!2m1!1sasus%20service%20center!5e1!3m2!1sen!2sin!4v1744181165058!5m2!1sen!2sin" width={"100%"} height={"500px"} ></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </UserLayout>
        </>
    )
}

export default Contact
