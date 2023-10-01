import React from 'react'
import styled from 'styled-components'
import '../App.css';

const ContactHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 35px;
    padding-top:100px;
    padding-bottom:50px;
`
const ContactText = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    padding-top: ;
    padding-bottom:50%;
    padding-right:25vw;
    padding-left:25vw;
    text-indent: 0ch;  
`

const Contact: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
        <ContactHeading>CONTACT US</ContactHeading>
        <ContactText>
            <br/>Shannon Kaplan
            <br/>Tel: (517) 707-8362
            <br/>Email: arkconstructionsafetyandhealth@gmail.com
        </ContactText>
        </div>
        </>

    )
}

export default Contact