import { ToastContainer } from "react-toastify";
import AppRouter from "./components/router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ffcc80",
      },
      background: {
        default: "#e3f2fd",
        paper: "#ffffff",
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
