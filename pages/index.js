import Banner from "../components/Banner";
import Header from "../components/Header";
import clientPromise from "../lib/mongodb";

import Head from "next/head";
export default function Home({ places }) {
	return (
		<div className="">
			<Head>
				<title>Airbnb2</title>
			</Head>
			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					{places.map((place, index) => {
						return (
							<div key={index}>
								<h2>{place.name}</h2>
								<p>{place.summary}</p>
								<p>{place.property_type}</p>
							</div>
						);
					})}

					{/* Pull data from server */}
				</section>
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export async function getStaticProps(context) {
	const client = await clientPromise;
	const db = client.db("Cluster0");

	let places = await db.collection("sample_airbnb").find({}).toArray();
	places = JSON.parse(JSON.stringify(places));

	return {
		props: { places },
	};
}
