import { useContext } from "react";


import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';

const Component = styled(Box)`
     background-color: #ededed;
    padding: 0 12px;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
    overflow: none;
    display: flex; /* Enable Flexbox */
    flex-direction: column; /* Stack children vertically */
    height: 95vh; /* Full height of the viewport */
    justify-content: space-between; /* Push Container2 to the bottom */
     
    
    
`

const Container1 = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 12px;
    

`
const Container2 = styled(Box)`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 0 12px;
    height: 100px;
`

const Icons = styled(Box)`
    padding: 8px;
    margin : 4px 0;
    align-item: center;

`

const Image = styled('img')({

    height: '39px',
    width: '39px',
    borderRadius: '50%',
    marginTop: '10px'

});

const MenuBar = () => {

    const { account } = useContext(AccountContext)
    return (
        <>
            <Component>

                <Container1>
                    <Icons>
                        <DensityMediumRoundedIcon/>
                    </Icons>
                    <Icons>
                        <ChatIcon  />
                    </Icons>
                    <Icons>
                        <CallRoundedIcon/>
                    </Icons>
                    <Icons>
                        <DataUsageIcon />
                    </Icons>

                </Container1>
                <Container2>
                    <Image src={account.picture} alt="dp" />
                    <Icons>
                        <SettingsIcon />
                    </Icons>
                </Container2 >

            </Component>
        </>

    )
}

export default MenuBar;