
import { AppBar, Toolbar, styled, Box } from "@mui/material";

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

const Messenger = () => {

    return (

        <Window>


            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <LoginDialog />

        </Window>

    )
}

export default Messenger;