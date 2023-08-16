import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import { CompanyImages } from "../components/gallery-image";
import '../App.css';
import ownerphoto from "../images/site-17.JPG";

const CompanyHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 35px;
    padding-top:100px;
    padding-bottom:50px;
`
const CompanyText = styled.div`
    display: flex;
    align-items: ;
    font-size: 20px;
    text-align: justify;
    padding-top: ;
    padding-bottom:80px;
    padding-right:25vw;
    padding-left:25vw;
    text-indent: 4ch;  
    
`

const Company: React.FunctionComponent = () => {
    return (
        <>
        <CompanyHeading>Who Are We</CompanyHeading>
        <CompanyText>
            The name Ark had been chosen due to the pure love and pride founder Shannon Kaplan 
            has for his son Noah. Shannon, wanted so badly to pass something down to Noah for him 
            to keep and build on, aside from daddy’s unconditional love.  What better to name a 
            company than Ark.
        </CompanyText>
        
        
        <div className="image-wrapper">
            <img alt='Owner' src={ownerphoto} width='800px'/>
        </div> 
        
        

        <CompanyHeading>Biography</CompanyHeading>
        <CompanyText>
            Shannon Kaplan’s journey began working/ and managing his friend’s HVAC/R business while 
            studying in college and gaining his EPA 608 certificate.  As life changed his course; 
            Shannon decided to further his education by attending graduate school to earn his master of 
            science degree for Industrial-Organizational Psychology.  Already having a deeper background 
            in safety through Human Resources and developing S.O.P. for HVAC/R, Food Distribution, Moving, 
            Warehousing-Trucking companies; it was time to try a new but familiar industry.  With the 
            support of his wife and love for Noah, Shannon had successfully passed BCSP’s CHST, ASP and CSP 
            while toiling full-time as a Site Safety , Construction Superintendent and authorized OSHA trainer 
            in both Construction and General Industry simultaneously.
        </CompanyText>
        <CompanyText>
             Here we are at present day, with all the years of hard work and gained knowledge in multiple 
             industries; Ark Construction Safety and Health’s founder Shannon Kaplan developed the maturity 
             and acumen to confidently serve our client’s safety and environmental needs.
        </CompanyText>
        </>

    )
}

export default Company