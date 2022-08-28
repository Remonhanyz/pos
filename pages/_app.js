import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
import Layout from "../components/Layout";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import {store} from "../redux-state/store";

function MyApp({Component, pageProps}) {
	const [isLogedIn, setIsLogedIn] = useState(true);
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

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
