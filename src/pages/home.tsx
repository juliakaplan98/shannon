import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import { HomeImages } from "../components/gallery-image";
// import image from '../images/construction-site-01.jpg';
import '../App.css';

const HomeHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 50px;
    padding-top:100px;
    padding-bottom:100px;
`
const HomeText = styled.div`
    display: flex;
    align-items: ;
    font-size: 20px;
    text-align: justify;
    padding-top:100px;
    padding-bottom:15px;
    padding-right:15vw;
    padding-left:15vw;
    text-indent: 4ch;  
`

// const HomeImage = styled.img`
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     width: 650px;
//     height: auto;
    
//     border-radius: 10px;
//     box-shadow: 10px 10px 5px 12px #C1C3C5;
// `


const Home: React.FunctionComponent = () => {
    return (
        <>
        <HomeHeading>Ark Construction Safety and Health, Inc</HomeHeading>
        {/* <HomeImage src={image} alt="" /> */}
        <div className="image-gallery-wrapper">
            <ImageGallery 
            items={HomeImages} 
            showThumbnails={false}
            />
        </div>
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