import React from 'react'

const Footer = () => {
  return (
    <>
     <footer>
     <div className="container-fluid bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className='nav gap-5 justify-content-center py-3 '>
                       <li> <a href="#" className='text-decoration-none text-light footer-text'>Copyright © ASUS India 2025 </a></li>
                       {/* <li> <a href="#" className='text-decoration-none text-light footer-text'>Terms of Use  </a></li>
                       <li> <a href="#" className='text-decoration-none text-light footer-text'>Privacy Policy </a></li>
                       <li> <a href="#" className='text-decoration-none text-light footer-text'>Sales Terms and Conditions </a></li> */}
                    </ul>
                </div>
            </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer
