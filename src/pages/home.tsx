// import '../App.css';

// const Home = () => {
//     return (
//         <>
//             <h1 className='text-box'>Ark Construction Safety and Health, Inc</h1>
           
//             <p className='text-box'>
//                 We are a boutique EHS firm built & customized according to our client’s 
//                 environmental and safety needs since 2019. Do not believe for a moment 
//                 that we cannot size up with the big dogs in the industry. What we 
//                 “strategically” lack in size; we make up in “bite.”  At our conception, 
//                 Ark was solely a solution maker for NYC’s R.E. Developers and General 
//                 Contractors struggling to comply with NYC’s construction safety and building codes.
//             </p>
//             <p className='text-box'>
//                 From humble baby steps we have evolved into a one of a kind EHS service provider 
//                 offering clients multiple world-class services by world-class professionals in the 
//                 field(s) of Construction Industry, General Industry, Industrial Hygiene, Industrial 
//                 Psychology, Human Resources and Performance Coaching.
//             </p>
//         </>
//     )
// };

// export default Home;

// import React from 'react'
// import '../App.css';



// const Home: React.FunctionComponent = () => {
//     return (
//     <>
//     <h1 className='text-box'>Ark Construction Safety and Health, Inc</h1>
//     <p className='text-box'>
//         We are a boutique EHS firm built & customized according to our client’s 
//         environmental and safety needs since 2019. Do not believe for a moment 
//         that we cannot size up with the big dogs in the industry. What we 
//         “strategically” lack in size; we make up in “bite.”  At our conception, 
//         Ark was solely a solution maker for NYC’s R.E. Developers and General 
//         Contractors struggling to comply with NYC’s construction safety and building codes.
//     </p>
//     <p className='text-box'>
//         From humble baby steps we have evolved into a one of a kind EHS service provider 
//         offering clients multiple world-class services by world-class professionals in the 
//         field(s) of Construction Industry, General Industry, Industrial Hygiene, Industrial 
//          Psychology, Human Resources and Performance Coaching.
//         </p>
//     </>
        
//     )
// }

// export default Home

import React from 'react'
import styled from 'styled-components'

const HomeHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 25vh;
`
const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    padding: 100px;
    text-indent: 4ch;  
    
`

const Home: React.FunctionComponent = () => {
    return (
        <>
        <HomeHeading>Ark Construction Safety and Health, Inc</HomeHeading>
        <HomeText>We are a boutique EHS firm built & customized according to our client’s 
         environmental and safety needs since 2019. Do not believe for a moment 
         that we cannot size up with the big dogs in the industry. What we 
         “strategically” lack in size; we make up in “bite.”  At our conception, 
         Ark was solely a solution maker for NYC’s R.E. Developers and General 
        Contractors struggling to comply with NYC’s construction safety and building codes.</HomeText>
        </>

    )
}

export default Home