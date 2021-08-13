import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";

import store from "../app/store";
import AppLayout from "layouts";
import theme from "settings/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
