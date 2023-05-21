import Router from "./router/Routes";
import { SnackbarProvider, useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import cssVars from './styles/vars.module.scss';
import './styles/globals.scss';

const SnackbarCloseButton = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();
  return <IconButton sx={{ position: "absolute", right: 4, top: "calc(50% - 20px)" }} onClick={() => closeSnackbar(snackbarKey)}> <CloseIcon fontSize='small' sx={{ color: cssVars.white }} /> </IconButton>
}

const App = () => {

  return (
    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}
    >
      <Router />
    </SnackbarProvider>
  );
}

export default App;