
import { Box, styled, Typography } from "@mui/material";




import TextsmsIcon from '@mui/icons-material/Textsms';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Header = styled(Box)`
    padding: 0 12px 0 16px;
    height: 64px;
    
`
const Complement = styled(Box)`
display : flex;
    height: 40px;
    align-items: centre;
    
    justify-content: space-between;
    padding: 12px 0 ;
    
`
const Title = styled(Box)`
    padding : 4px 0 ;
`
const Icon = styled(Box)`
    
    padding: 8px;
    
    display: flex;
    align-item: center;
    justify-content: center;
    
`

const SearchIcons = styled(Box)`
    
    padding: 5.5px;
    
    display: flex;
    align-item: center;
    justify-content: center;
    
`
const Icons = styled(Box)`
    display: flex;
    justify-content: center;
`

const Body = styled(Box)`

`

const Search = styled(Box)`

    position: 'relative';
    height: 44px;
    padding: 0 12px;
    
    
`

const Searchwrapper = styled(Box)`
    
    border-radius: 10px;
    display: flex;
    padding: 4.5px 0 ;
    
    
    `
const Inputbox = styled(Box)`

background-color: #f0f2f5;
display: flex;
width:100%;
    
    

`
const StyledInputBase = styled(InputBase)`
    padding: 6px 0 ;
    width: 100%;
    padding : 0 32px 0 25px;
`


const Chats = () => {

    return (
        <>

            <Header>
                <Complement>
                    <Title>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Chats
                        </Typography>
                    </Title>
                    <Icons >
                        <Icon>
                            <TextsmsIcon />
                        </Icon>

                        <Icon>
                            <MoreVertIcon />
                        </Icon>

                    </Icons>

                </Complement>
            </Header>
            <Body>
                <Search>

                    <Searchwrapper>


                        <Inputbox>
                        <SearchIcons>
                            <SearchIcon />
                        </SearchIcons>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Inputbox>

                    </Searchwrapper>
                </Search>
                <Box>

                </Box>
            </Body>


        </>
    )
}

export default Chats;