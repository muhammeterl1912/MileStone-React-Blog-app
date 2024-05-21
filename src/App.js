import { ToastContainer } from "react-toastify";
import AppRouter from "./components/router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976D2",
      },
      secondary: {
        main: "#00897B",
      },
      background: {
        default: "#ECEFF1",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#212121",
        secondary: "#757575",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
