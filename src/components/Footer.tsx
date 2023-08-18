import styled from 'styled-components'

const Foot = styled.footer`
    display: flex;
    width:100%;
    flex-direction:column;
    flex-grow:2;
    background: #F1F4F6;
    height: 200px;
    
    position:absolute;
`
const FooterText = styled.footer`
    font-size: 20px;
    text-align: justify;
    padding-left: 50px;
    padding-top:25px;
`
const Footer = () => {
    return (
        <>
        <Foot>
            <FooterText> Connect with Us <br/><br/>Facebook : <br/>LinkedIn :</FooterText>
        </Foot>
        
        </>
    )
}
export default Footer