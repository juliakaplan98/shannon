import styled from 'styled-components'

const Foot = styled.footer`
    display: flex;
    width:100%;
    flex-direction:column;
    flex-grow:2;
    background: #3b3b3b;
    height: 200px;
    
    position:absolute;
`
const FooterText = styled.footer`
    font-size: 20px;
    color: #FFFFFF;
    text-align: justify;
    padding-left: 50px;
    padding-top:25px;
`
const Footer = () => {
    return (
        <>
        <Foot>
            <FooterText> 
                Connect with Us 
                <br/>
                <br/>Facebook
                {/* <br/><a href='https://www.linkedin.com/in/shannon-kaplan-509158235/'>LinkedIn</a> */}
                <br/>LinkedIn
            </FooterText>
        </Foot>
    
        </>
    )
}
export default Footer