import { ToastContainer } from "react-toastify";
import AppRouter from "./components/router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./app/store";

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
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
