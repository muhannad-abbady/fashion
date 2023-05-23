import Router from "./router/Routes";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import cssVars from './styles/vars.module.scss';
import './styles/globals.scss';

const SnackbarCloseButton = ({ snackbarKey }) => {

  return <IconButton sx={{ position: "absolute", right: 4, top: "calc(50% - 20px)" }} onClick={() => { }}> <CloseIcon fontSize='small' sx={{ color: cssVars.white }} /> </IconButton>
}

const App = () => {

  return (
    <Router />
  );
}

export default App;