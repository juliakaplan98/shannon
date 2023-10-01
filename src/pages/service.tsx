import React from 'react'
import styled from 'styled-components'
import '../App.css';

const ServicesHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 40px;
    padding-top:120px;
    padding-bottom:60px;
    
`
const SubHeading = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    padding-top:20px;
    padding-bottom:15px;
    padding-right:20vw;
    padding-left:20vw;
    text-indent: 0ch;   
`
const ServicesText = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    font-size: 20px;
    text-align: justify;
    padding-top: ;
    padding-bottom:15px;
    padding-right:100px;
    padding-left:100px;
    text-indent: 0ch;   
    
`

const Service: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
            <ServicesHeading>OUR SERVICES</ServicesHeading>
            
            <div className='content-light'>
                <SubHeading>Inspections and Audits per OSHA (NYC DOB, FDNY, EPA)</SubHeading>
                    <ServicesText>
                        <br/>o Learn how to respond to violations and citations.
                        <br/>o Learn how to prepare for upcoming audits.
                    </ServicesText>    
            </div>    
            
            <div className='content'>
                <SubHeading>On-Site Support</SubHeading>
                    <ServicesText>
                        Comprehensive worksite audit includes multi-point hazard analysis, 
                        assessing employee environment, activities and work patterns which may 
                        lead to certain exposure points not conducive to your employee(s) health.  
                        Following up on the comprehensive audit; Ark will provide controlled 
                        measures to be acted upon those concerned items.
                    </ServicesText>
            
                <SubHeading>Some environmental factor examples:</SubHeading>
            
                    <ServicesText>
                        <br/>• NOISE (Indoor and Outdoor, Vehicles, Machines, etc).
                        <br/>• IAQ’s (Indoor Air Quality and Ventilation).
                        <br/>• Sample Testing (Methods of Industrial Hygiene best practices).
                    </ServicesText>
            </div>

            <div className='content-light'>
                <SubHeading>Development and/or improvement of Health and Safe Plans- (Construction/General Industry)</SubHeading>
                <ServicesText>Some considerations which can affect your employee(s) at work:</ServicesText>
                <ServicesText>
                    <br/>o Ergonomics
                    <br/>o Environmental and Climate
                    <br/>o Respiratory Protection Program
                    <br/>o Substance Abuse
                    <br/>o DOT Trucking safety
                    <br/>o Safety Data Sheets
                    <br/>o Job Hazard Analysis
                    <br/>o Globally Harmonized System
                    <br/>o Urban and Community Planning
                    <br/>o Infectious Diseases and Biological Hazards
                    <br/>o Worksite Disaster
                    <br/>o Employee Assistance Program- Mental Health of employees and mgmt
                    <br/>o Active Shooter
                    <br/>o Workplace Violence
                    <br/>o Sexual Harassment
                    <br/>o Risk Management
                    <br/>o Trade Hazards and Exposures
                    <br/>o Material Handling- Forklift Safety
                </ServicesText>
            </div>

            <div className='content'>
                <SubHeading>Record Keeping</SubHeading>
                    <ServicesText>
                        <br/>• Find out what OSHA requires in record keeping from employers.
                        <br/>• Depending on the number of employees an employer has OSHA provides different record keeping mandates.
                    </ServicesText>
            </div>
            <div className='content-light'>
                <SubHeading>Reporting</SubHeading>
                <ServicesText>
                    <br/>o Understanding the requirements of what a recordable/reportable injury and the difference between both.
                    <br/>o Using proper documents to record injuries.
                    <br/>o Understanding DART/ TCIR methods.
                    <br/>o Workers Compensation.
                    <br/>o OSHA VPP and STAR programs
                </ServicesText>
            </div>
        </div>
        </>

    )
}

export default Service