import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import UserLayout from '../UserLayout.jsx'



const Home = () => {    
 return (
    <>
    <UserLayout>
      <main>
        {/* <p>{loginuser}</p> */}
          {/* section 1  swiper */}
        <Section1/>
        <Section2/>
        {/* section 3 budget  */}
        <Section3/>
        {/* section 4 processor  */}
        <Section4/>
        <Section5/>
      </main>
         {/* <Footer/> */}
    </UserLayout>
    </>
  )
}

export default Home
