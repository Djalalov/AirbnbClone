import { Home, Footer, Header } from "../src/components";
import Head from "next/head";
export default function App() {
	return (
		<div className="">
			<Head>
				<title>Airbnb2</title>
			</Head>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}
