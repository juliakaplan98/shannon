import React from 'react'
import styled from 'styled-components'
import '../App.css';

const ClassesHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 40px;
    padding-top:120px;
    padding-bottom:60px;
`
const ClassesText = styled.div`
    align-items: end;
    justify-content: center;
    font-size: 22px;
    padding-top:0px;
    padding-bottom:35px; 
    padding-right:10vw;
    padding-left:10vw;
`
const ClassesList = styled.div`
    line-height: 2;
    justify-content: center;
    font-size: 20px;
    text-align: justify;
    padding-top: 45px;
    padding-bottom:45px;
    padding-right:25vw;
    padding-left:50px;
    list-style-type:square;
`


const Classes: React.FunctionComponent = () => {
    return (
        <>
        <div className="voutlet">
        <ClassesHeading>CLASSES</ClassesHeading>
        <div className='content-light'>
            <ClassesText>
                <br/>Please call or email for schedules and prices as website may update from time to time.
                
                    <ClassesList>
                        <li>OSHA 10 and 30 Construction Industry</li>
                        <li>OSHA 10 and 30 General Industry</li>
                        <li>D.O.B. SST (NYC residents)</li>
                        <li>Aerial, Scissor Lift</li>
                        <li>32hr Rigger Supervisor</li>
                        <li>16hr Rigger User</li>

                        <li>32 hour Supported Scaffold Assembly/Dismantler Supervisor</li>
                        <li>32 hour Suspended Scaffold Assembly/ Dismantler Supervisor</li>
                        <li>16 hour Suspended Scaffold User</li>
                        <li>4hr Supported Scaffold User</li>
                        <li>4hr Excavation Safety</li>
                        <li>4hr Confined Space</li>
                        <li>Intro to Industrial Hygiene and Ventilation</li>
                        <li>3hr Flagger Safety</li>
                        <li>2hr Silica Awareness</li>
                        <li>2hr Lead Awareness</li>
                        <li>2hr Asbestos Awareness</li>
                    </ClassesList>
                
                <br/>Please feel free to inquire about courses not listed on the menu
            </ClassesText>
        </div>
        </div>
        </>

    )
}

export default Classes