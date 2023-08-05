// const Classes = () => {
//     return (
//         <>
//         <h3> Please call or email for schedules and prices as website may update from time to time.</h3>
//         <p className="text-box">
//             <p>• OSHA 10 and 30 Construction Industry</p>
//             <p>• OSHA 10 and 30 General Industry</p>
//             <p>• D.O.B. SST (NYC residents)</p>
//             <p>• Aerial, Scissor Lift</p>
//             <p>• 32hr Rigger Supervisor</p>
//             <p>• 16hr Rigger User</p>   
//         </p>
        
//         <p className="text-box">
//             <p>• 32 hour Supported Scaffold Assembly/Dismantler Supervisor</p>
//             <p>• 32 hour Suspended Scaffold Assembly/ Dismantler Supervisor</p>
//             <p>• 16 hour Suspended Scaffold User</p>
//             <p>• 4hr Supported Scaffold User</p>
//             <p>• 4hr Excavation Safety</p>
//             <p>• 4hr Confined Space</p>
//             <p>• Intro to Industrial Hygiene and Ventilation</p>
//             <p>• 3hr Flagger Safety</p>
//             <p>• 2hr Silica Awareness</p>
//             <p>• 2hr Lead Awareness</p>
//             <p>• 2hr Asbestos Awareness</p>
//         </p>

//         <h3> Please feel free to inquire about courses not listed on the menu.</h3>



//         </>
        

//     );
// }

// export default Classes;

import React from 'react'
import styled from 'styled-components'

const ClassesHeading = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 50px;
    padding-top:100px;
    padding-bottom:100px;
`
const ClassesText = styled.div`
    
    align-items: end;
    justify-content: center;
    font-size: 22px;
    padding-top:10px;
    padding-bottom:35px; 
    padding-right:10vw;
    padding-left:10vw;
`
const ClassesList = styled.div`
    
    
    
    line-height: 2;
    
    align-items: ;
    font-size: 20px;
    text-align: justify;
    padding-top: ;
    padding-bottom:15px;
    padding-right:25vw;
    padding-left:25vw;

    list-style-type:square;
`


const Classes: React.FunctionComponent = () => {
    return (
        <>
        <ClassesHeading>Classes</ClassesHeading>
        <ClassesText>
            Please call or email for schedules and prices as website may update from time to time.
        </ClassesText>
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
        <ClassesText>
            Please feel free to inquire about courses not listed on the menu
        </ClassesText>
        </>

    )
}

export default Classes