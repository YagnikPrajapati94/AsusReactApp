import React from 'react'
import BudgetPro from '../../../Layout/Component/Cards/BudgetPro'

const Section3 = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="container py-md-5 py-4">
                        <div className="row">
                            <div className="col-12">
                                <p className='m-0 fs-1 text-uppercase fw-bold text-center'>shop by budget</p>
                            </div>
                        </div>
                        <div className="row budget justify-content-center pt-md-5 py-3">
                            <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/40k.png"}/>
                            <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/40k-70k.png"}/>
                            <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/70k-100k.png"}/>
                            <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/under-100k.png"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
