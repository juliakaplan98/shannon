import React from 'react'
import styled from 'styled-components'
import '../App.css';

const MissionHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 35px;
    padding-top:100px;
    padding-bottom:50px;
`
const MissionText = styled.div`
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

const Mission: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
            <MissionHeading>Mission Statement</MissionHeading>
            <MissionText>
            Here at Ark Construction Safety and Health, it is our 
            mission to keep everyone safe and sound.  Ark’s Consultants 
            are self-motivated, well-disciplined, and highly educated 
            in their respective domains.  We understand the constant 
            grind/cost it takes to effectively run a business; due to 
            some of our own consultants coming from owning their own 
            companies or were once employed at high levels of management.  
            We will guide you in developing and maintaining a healthy 
            HASP along with accountability skills to run it effectively.
            </MissionText>
            <MissionText>
            According to OSHA regulations, the employer is required by 
            law to provide a safe working environment for their employees.  
            Cutting the cost on safety increases the chances of paying a 
            price far greater than monetary value.  It is more trivial to 
            regain trust and reputation from your workforce than recording 
            profits.  When your employees are safe, the company saves a 
            lot more money in the long run by reducing workers’ compensation, 
            medical, lost time, turnovers, and recruitment costs to replace 
            the injured or deceased. 
            </MissionText>
            <MissionText>
            Is it worth the cost of not treating safety as an investment?  We are 
            here to help make businesses end up more profitable in all dimensions 
            that money can’t always afford.
            </MissionText>
        </div>
        </>

    )
}

export default Mission