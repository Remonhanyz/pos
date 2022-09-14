import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import Layout from "../components/Layout";
import { store } from "../redux-state/store";
import "../styles/globals.css";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [isLogedin, setIsLogedin] = useState(false)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      
        {isLogedin ? <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>: <Login setIsLogedin={setIsLogedin} />}
    </>
  );
}

export default MyApp;
