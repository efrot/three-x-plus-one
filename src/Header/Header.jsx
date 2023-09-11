import { Button } from "@mui/material";
import './Header.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../images/3x+1.png';

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
            <img src={logo} className="logo"/>
            <ThemeProvider theme={theme}>
            <Button variant="outlined" size="large" color="prime">Home</Button>
            <Button variant="outlined" size="large" color="prime">About</Button>
            </ThemeProvider>
        </div>
    )

}

export default Header;