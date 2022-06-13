import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			<div className="relative flex items-center h-14 w-44 cursor-pointer  my-auto">
				<Link href="/">
					<Image
						src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
						alt="logo"
						layout="fill"
						objectFit="cover"
					/>
				</Link>
			</div>

			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
					type="text"
					placeholder="Search Airbnb "
				/>
				<SearchIcon className="hidden md:inline-flex h-8 w-8 bg-red-500 text-white rounded-full p-1 cursor-pointer md:mx-2" />
			</div>

			<div className="flex space-x-4 items-center justify-end text-gray-500">
				<p className="hidden md:inline cursor-pointer">Become a host</p>
				<LanguageIcon className="h-6 cursor-pointer" />
				<div className="flex items-center space-x-2 border-2 rounded-full">
					<ExpandMoreIcon className="h-6 w-6 cursor-pointer" />
					<Avatar className="h-6 w-6 cursor-pointer" />
				</div>
			</div>
		</header>
	);
};

export default Header;
