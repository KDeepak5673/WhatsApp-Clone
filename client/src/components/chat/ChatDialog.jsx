
import { Dialog, Box, styled } from "@mui/material";


//Components
import MenuBar from "./menu/MenuBar";
import Chats from "./menu/chats/Chats";
import EmptyChat from "./chat/EmptyChat";


const dialogStyle = {
    margin: '19px',
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
}
const Component = styled(Box)`
    display: flex;

    
`;
const Component1 = styled(Box)`
    min-width : 63px;
    display: flex;
    
    
`;
const Component2 = styled(Box)`
    
    min-width: 450px;
`;
const Component3 = styled(Box)`
    width: 984px;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0 ,0 ,0 ,0.14);
`;


const ChatDialog = () => {

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}  maxWidth={"md"}>

            <Component>

                <Component1>
                    <MenuBar />
                </Component1>

                <Component2>
                    <Chats />
                </Component2>
                <Component3>
                    <EmptyChat />

                </Component3>
            </Component>


        </Dialog>
    )
}


export default ChatDialog;