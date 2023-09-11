import { Button } from "@mui/material";
import './Header.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../images/3x+1.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const theme = createTheme({
  palette: {
    prime: {
      main: '#edf6f9',
      light: '#edf6f9',
      dark: '#edf6f9',
      contrastText: '#edf6f9',
    },
  },
});

const Header = () => {

    return(
        <div className="header-container">
          <div className="logoname">
            <h2>Three X Plus One</h2>
            <img src={logo} className="logo"/>
          </div>
          <ThemeProvider theme={theme}>
          <div className="button-container">
            <Button variant="outlined" size="large" color="prime" startIcon={<HomeIcon />}>Home</Button>
          </div>
          <div className="button-container">
            <Button variant="outlined" size="large" color="prime" endIcon={<InfoIcon />}>About</Button>
          </div>
          </ThemeProvider>
        </div>
    )

}

export default Header;