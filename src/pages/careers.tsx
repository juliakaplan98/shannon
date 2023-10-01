import React from 'react'
import styled from 'styled-components'
import '../App.css';

const CareersHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 50px;
    padding-top:170px;
    padding-bottom:100px;
`
const CareersText = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    font-size: 20px;
    text-align: justify;
    padding-top: ;
    padding-bottom:15px;
    padding-right:25vw;
    padding-left:25vw;
    text-indent: 0ch;   
    
`

const Careers: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
            <CareersHeading>Careers</CareersHeading>
            <CareersText>
                We are all always seeking highly qualified and disciplined professionals who share identical values 
                in environmental health and safety as Ark Construction Safety and Health does. Please be on the 
                lookout for positions that may open as the demand for our services increases.
            </CareersText>
            <CareersText>
                Should you share those values, we are deeply humbled by your interest and speedily encourage 
                you to apply down below. Best of luck applicants, Ark Construction Safety and Health are rooting 
                for you and hope to have you join our expanding team.
            </CareersText>
        </div>
        </>

    )
}

export default Careers