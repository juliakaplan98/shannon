import styled from 'styled-components'

const Heading = styled.header`
    background: #F1F4F6;
    height: 95px;
    display: flex;
    position: relative;
    top: 65px;
    width:100%;
    z-index: 11;
    font-size: 30px;
    font-family: Georgia, serif;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  
`

const Header = () => {
    return (
        <Heading>Ark Construction Safety and Health, Inc</Heading>
    )
}
export default Header