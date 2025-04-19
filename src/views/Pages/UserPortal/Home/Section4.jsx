import React from 'react'
import BudgetPro from '../../../Layout/Component/Cards/BudgetPro'

const Section4 = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
            <div className="container py-md-3 py-4">
                <div className="row">
                    <div className="col-12">
                        <p className='m-0 fs-1 text-uppercase fw-bold text-center'>shop by processor</p>
                    </div>
                </div>
                <div className="row  budget  py-md-5 py-3">
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/i5.webp"}/>
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/i7.webp"}/>
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/i9.webp"}/>
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/amd-3.webp"}/>
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/amd-5.webp"}/>
                    <BudgetPro src={"https://dlcdnwebimgs.asus.com/files/media/5aa8cb62-57ee-482e-b5f4-6bdb6a5ba3a9/images/DT/AMD-Icon_227-x-203.png"}/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Section4
