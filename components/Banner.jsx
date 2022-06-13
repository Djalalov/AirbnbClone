import Image from "next/image";
import banner1 from "../public/banner1.jpg";

const Banner = () => {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image src={banner1} layout="fill" objectFit="cover" priority />

			<div className="absolute top-1/2 w-full text-center">
				<h1 className="text-sm sm:text-lg lg:text-6xl text-white font-bold">
					Not sure where to go? <span className="text-red-500">Perfect.</span>
				</h1>
				<button className="text-red-500 bg-gray-100/80 px-10 py-4 shadow-lg shadow-gray-900 rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 lg:text-xl">
					I'm flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
