import React from 'react'
import styled from 'styled-components'

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
    font-size: 20px;
    text-align: justify;
    padding-top: ;
    padding-bottom:15px;
    padding-right:25vw;
    padding-left:25vw;
    text-indent: 4ch;  
`

const Contact: React.FunctionComponent = () => {
    return (
        <>
        <ContactHeading>Contact</ContactHeading>
        <ContactText>
          
        </ContactText>
        </>

    )
}

export default Contact