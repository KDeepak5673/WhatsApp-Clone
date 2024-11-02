
import { AppBar, Toolbar, styled, Box } from "@mui/material";

import logo from '../constants/wp-logo.png'

//component
import LoginDialog from "./account/LoginDialog";


const Window = styled(Box)`
background-color : #00a884;
`;

const Header = styled(AppBar)`
height : 222px;
background-color : #00a884;
box-shadow : none;
`;

const Nav = styled(Toolbar)`
    margin: 0px 0px 0px 13.5%;
    marginTop: 2px;
`

const LogoImg = styled('img')`
    height : 40px;
`

const Messenger = () => {

    return (

        <Window>


            <Header>
                <Nav>
                    <LogoImg src={logo} alt="wp-logo" />
                    WHATSAPP WEB
                </Nav>
            </Header>
            <LoginDialog />

        </Window>

    )
}

export default Messenger;