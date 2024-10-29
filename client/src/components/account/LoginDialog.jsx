import { Dialog, Box, Typography, styled, Button, List, ListItem } from "@mui/material";
import logo from '../../constants/qrcode.jpg';


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
    overflow: 'hidden',


}

const LoginDialog = () => {

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
            <Component>
                <Container>
                    <svg viewBox="0 0 76 68" height="55" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>wa-desktop</title><rect x="9" y="14" width="58" height="38" fill="#00A884"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15H66V50.8837H10V15ZM7 50.8837V15C7 13.3431 8.34315 12 10 12H66C67.6569 12 69 13.3431 69 15V50.8837H76V52C76 54.2091 74.2091 56 72 56H66H10H4C1.79086 56 0 54.2091 0 52V50.8837H7Z" fill="#54656F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15H66V50.8837H10V15ZM7 50.8837V15C7 13.3431 8.34315 12 10 12H66C67.6569 12 69 13.3431 69 15V50.8837H76V52C76 54.2091 74.2091 56 72 56H66H10H4C1.79086 56 0 54.2091 0 52V50.8837H7Z" fill="black" fill-opacity="0.6"></path><rect x="21" y="30" width="34" height="34" rx="2" fill="#25D366" class=""></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4479 52.1996L29.6118 55.3882L32.8004 54.5521L33.4624 54.9318C34.7977 55.6976 36.3448 56.1361 38 56.1361C43.0457 56.1361 47.1361 52.0457 47.1361 47C47.1361 41.9543 43.0457 37.8639 38 37.8639C32.9543 37.8639 28.8639 41.9543 28.8639 47C28.8639 48.6552 29.3024 50.2023 30.0682 51.5376L30.4479 52.1996ZM27 58L28.4514 52.4649C27.528 50.8549 27 48.9891 27 47C27 40.9249 31.9249 36 38 36C44.0751 36 49 40.9249 49 47C49 53.0751 44.0751 58 38 58C36.0109 58 34.1451 57.472 32.5351 56.5486L27 58Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.0401 49.2354C42.7664 49.0991 41.4208 48.4409 41.1697 48.3501C40.9187 48.2592 40.7365 48.2138 40.5542 48.4864C40.3719 48.7591 39.8472 49.3723 39.6875 49.5535C39.5279 49.7353 39.3682 49.7578 39.0945 49.6214C38.8209 49.4851 37.939 49.1978 36.8933 48.2706C36.0797 47.5488 35.5303 46.6577 35.3707 46.385C35.211 46.1124 35.3538 45.9651 35.4904 45.8298C35.6133 45.7076 35.764 45.5117 35.9011 45.3529C36.0382 45.1941 36.0834 45.0803 36.1748 44.899C36.2662 44.7172 36.2205 44.5585 36.1522 44.4221C36.0839 44.2858 35.5366 42.946 35.3081 42.4012C35.0859 41.8705 34.8601 41.9426 34.6926 41.9337C34.5329 41.9259 34.3506 41.9243 34.1679 41.9243C33.9851 41.9243 33.6888 41.9922 33.4378 42.2649C33.1867 42.5375 32.4797 43.1962 32.4797 44.5354C32.4797 45.8747 33.4604 47.1696 33.5975 47.3514C33.7345 47.5332 35.5276 50.2822 38.2731 51.4616C38.926 51.7421 39.4359 51.9098 39.8335 52.0351C40.4891 52.2425 41.0857 52.2133 41.5574 52.1432C42.0832 52.0649 43.1767 51.4846 43.4046 50.8489C43.6326 50.2132 43.6326 49.6679 43.5643 49.5545C43.496 49.4412 43.3133 49.3728 43.0396 49.2364L43.0401 49.2354Z" fill="white"></path></svg>
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