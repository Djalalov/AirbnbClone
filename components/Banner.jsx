import { Button } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import { useRouter } from "next/router";
import Image from "next/image";

const Banner = () => {
	const navigate = useRouter();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="banner">
			<div className="banner__search">
				{showSearch && <Search />}
				<Button
					onClick={() => setShowSearch(!showSearch)}
					className="banner__searchButton"
					variant="outlined"
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className="banner__info">
				<h1>Let your curiosity do the booking</h1>
				<h5>Plan a different kind of gateways to uncover the gems near your</h5>

				<Button onClick={() => navigate("/search")} variant="outlined">
					Explore Nearby
				</Button>
			</div>
		</div>
	);
};

export default Banner;
