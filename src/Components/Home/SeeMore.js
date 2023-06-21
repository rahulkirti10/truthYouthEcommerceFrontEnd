import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "../../Css files/Sections.css"
import { Link } from 'react-router-dom';


const theme = createTheme({
    palette: {
      primary: {
        main: '#1b4b66',
      },
      secondary :
      {
        main:'#639599'
      }
    },
  });

function SeeMore() {
  return (
    <div className='SeeMore'>
    <div className='SeeMoreImage'>
    <div className='SeeMoreBtn' >
    <ThemeProvider theme={theme}>    
    <Link style={{textDecoration:"none",}} to="/Products">
    <Button endIcon={<ArrowForwardOutlinedIcon fontSize='small'/>}

    sx={{width: 190,
        height : 43,
        fontSize:16,
        borderRadius : 2,
        transition : "0.3s",
        backgroundColor: 'primary',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textTransform:"capitalize",
        '&:hover': {backgroundColor: 'secondary.main', marginLeft:"5px"}}} 

            variant="contained" disableElevation disableRipple>
        See More
      </Button>
      </Link>
      </ThemeProvider>
      </div>
    </div> 
    </div>
  )
}

export default SeeMore