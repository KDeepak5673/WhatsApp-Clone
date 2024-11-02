

import { Dialog, Box, Typography, styled, Button, List, ListItem } from "@mui/material";
import logo from '../../constants/qrcode.jpg';
import image1 from '../../constants/Image1.png';

// import { GoogleLogin } from '@react-oauth/google';



const Component = styled(Box)`
    display: flex;
    margin: 58px 82px 10px;
    border: 1px solid #eae6df;
    border-radius: 5px;
    justify-content: center; /* Centers horizontally */
    align-items: center;
`;

const Component2 = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10px 52px 20px;
    
`;

const Component3 = styled(Box)`
    display: flex;
    margin: 10px 52px 20px;
    display: flex;
    justify-content: space-around;

`

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const Container2 = styled(Box)`
    padding: 24px 40px 20px 20px;

`
const Container3 = styled(Box)`
    padding: 24px 20px 20px 40px;
    
`

const Container4 = styled(Box)`

`
const Container5 = styled(Box)`
justify-content: right;
    align-items: right;

`
const QRCOde = styled('img')({
    margin: '0 0 0 50px',
    height: 264,
    width: 264,

});

const WaDesktop = styled('img')({
    viewBox: "0 0 76 68",
    height: 55,
    reserveAspectRatio: "xMidYMid meet",
    class: "",
    fill: "none"


});

const Container = styled(Box)`
    padding: 24px 40px 20px 20px;
`

const Getapp = styled(Button)`
background-color : #008069;
font-size: 14px;
padding : 10px 24px;
display: flex;
flexWrap: "wrap"
`

const Link = styled(Button)`
    color: #00a884;
`

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'auto',


}

const LoginDialog = () => {



    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            <Component>
                <Container>
                    <WaDesktop src={image1} alt="wa-whats-app" />
                </Container>
                <Container2>
                    <Typography variant="subtitle1">Download WhatsApp for Windows</Typography>
                    <Typography variant="subtitle2">Get calling, screen sharing and a faster experience with the new Windows app.</Typography>
                </Container2>
                <Container3>
                    <Getapp variant="contained">Get the app</Getapp>
                </Container3>

            </Component>
            <Component2>
                <Container4>
                    <Title variant="h5">Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu on Android, or Setting on iPhone</ListItem>
                        <ListItem>3. Tap Linked devices and then Link a device</ListItem>
                        <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>

                    </StyledList>
                </Container4>
                <Container5>
                    <QRCOde src={logo} alt="QR CODE" />
                </Container5>
            </Component2>
            <hr style={{ border: '1px solid #eae6df', width: '80%' }} />
            <Component3>

                <Link variant="text">Link with phone number</Link>

            </Component3>
        </Dialog>
    )
}

export default LoginDialog;