import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "./Helpers/history";
import { Provider } from "react-redux";
import configStore from "./redux/configStore/configStore";
import Routes from "./routes/Routes";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
const Store = configStore();
function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <ThemeProvider theme={theme}>
       
          <Router history={history}>
            <ToastContainer></ToastContainer>
            <GlobalLoading></GlobalLoading>
            <Routes></Routes>
          </Router>
         
        </ThemeProvider>
      </PersistGate>
    </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
