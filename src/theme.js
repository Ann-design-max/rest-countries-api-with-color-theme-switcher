import React, {useState} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";


const theme = createMuiTheme();
const themeLight = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    h6:{
        fontSize: '1.2rem',
        fontWeight:'800',
    },
    body1:{
      fontSize: '0.9rem',
      fontWeight:'600',
  },
    body2:{
        fontSize: '0.9rem',
        fontWeight:'300',
    }
  },
  
  palette: {
    type: "light", 
     background:{
       default:'hsl(0, 0%, 98%)',
       paper:"hsl(0, 0%, 98%)"},
    primary:{
      main:'hsl(0, 0%, 100%)',
    },
    secondary:{
      main:'#F8B630',
    },
  },
});

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    h6:{
        fontSize: '1.2rem',
        fontWeight:'800',
    },
    body1:{
      fontSize: '0.9rem',
      fontWeight:'600',
  },
    body2:{
        fontSize: '0.9rem',
        fontWeight:'300',
    }
  },

  palette: {
    type: "dark",
    background:{
      default:"hsl(207, 26%, 17%)",
      paper:"hsl(207, 26%, 17%)"
    },
    primary:{
      main:'hsl(209, 23%, 22%)',
    },
    secondary:{
      main:'#FFCD67',
    },
  },
});

const Theme = (props) => {
    const { children, DarkMode } = props;
    const defaultTheme = DarkMode ? themeDark : themeLight;
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  };

  export const withTheme = (Component) => {
    return (props) => {
      const [DarkMode, setDarkMode] = useState( "DarkMode", true);
      return (
        <Theme DarkMode={DarkMode}>
          <Component {...props} DarkMode={DarkMode} setDarkMode={setDarkMode} />
        </Theme>
      );
    };
  };
  