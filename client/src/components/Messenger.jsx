import { useContext } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import logo from '../constants/wp-logo.png'

import { AccountContext } from "../context/AccountProvider";

//component
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";


const Window = styled(Box)`
background-color : #00a884;
`;

const Header = styled(AppBar)`
height : 125px;
background-color : #00a884;
box-shadow : none;
`;

const LoginHeader = styled(AppBar)`
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

    const { account } = useContext(AccountContext);

    return (

        <Window>
            {
                account ?
                    <>

                        <Header>

                        </Header>
                        <ChatDialog />
                    </>


                    :
                    <>

                        <LoginHeader>
                            <Nav>
                                <LogoImg src={logo} alt="wp-logo" />
                                WHATSAPP WEB
                            </Nav>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }

        </Window>

    )
}

export default Messenger;