import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  color: {
    primary: '#E64A19',
    secondary: '#00BCD4',
    error: '#E64A19',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    textColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
});
export default theme;
