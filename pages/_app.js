import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./login";
import Layout from "../components/Layout";
import {useState} from "react";
import {Provider} from "react-redux";
import {store} from "../redux-state/store";

function MyApp({Component, pageProps}) {
	const [isLogedIn, setIsLogedIn] = useState(true);

	return (
		<>
			{isLogedIn ? (
				<>
					<Layout>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
					</Layout>
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default MyApp;
