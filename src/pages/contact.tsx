import React from 'react'
import styled from 'styled-components'
import '../App.css';

const ContactHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 50px;
    padding-top:100px;
    padding-bottom:100px;
`
const ContactText = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    padding-top: ;
    padding-bottom:15px;
    padding-right:25vw;
    padding-left:25vw;
    text-indent: 0ch;  
`

const Contact: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
        <ContactHeading>Contact Us</ContactHeading>
        <ContactText>
            <br/>Shannon Kaplan
            <br/>Phone Number: (517) 707-8362
            <br/>Email: arkconstructionsafetyandhealth@gmail.com
        </ContactText>
        </div>
        </>

    )
}

export default Contact