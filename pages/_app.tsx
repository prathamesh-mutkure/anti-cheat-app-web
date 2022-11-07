import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "../store/index";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>
      <Provider store={store}>
        <Head>
          <title>Anti-Cheat Exam App</title>
          <meta name="author" content="Prathamesh Mutkure" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer position="bottom-center" theme="light" />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
