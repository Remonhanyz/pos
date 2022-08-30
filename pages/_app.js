import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux-state/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <>
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </>
    </>
  );
}

export default MyApp;
