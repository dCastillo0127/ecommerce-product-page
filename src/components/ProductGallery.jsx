import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const ProductGallery = () => {
	const [product, setProduct] = useState([]);
	const [value, setValue] = useState(0);

	// console.log(product.length)
	const nextImage = () => {
		if (value !== product.length - 1) {
			setValue(value + 1);
		} else if (value === product.length - 1) {
			setValue(0);
		}
	};

	const previousImage = () => {
		if (value === 0) {
			setValue(product.length - 1);
		} else if (value !== 0) {
			setValue(value - 1);
		}
	};
	useEffect(() => {
		axios.get("http://localhost:3006/products").then((response) => {
			setProduct(response.data);
		});
	}, []);

	const mainImage = { ...product[value] };
	// console.log(mainImage)
	return (
		<>
			<section className="w-[full] lg:w-[27rem] mx-auto ">
				<section className="">
					<img src={mainImage?.productImg} className="md:rounded-3xl " />
					<div className="inline-block md:hidden ">
						<button
							onClick={previousImage}
							className=" absolute left-5 top-1/2 bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300 "
						>
							<HiOutlineChevronLeft />
						</button>
						<button
							onClick={nextImage}
							className=" absolute right-5 top-1/2 bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300"
						>
							<HiOutlineChevronRight />
						</button>
					</div>
				</section>

				<div className="hidden md:flex my-6 space-x-8">
					{product.map((image, index) => (
						<ul key={index} className="">
							<img
								src={image.thumbnail}
								className={
									index === value
										? "opacity-70 rounded-xl border-[3px] overflow-hidden  border-orange-500"
										: "rounded-xl cursor-pointer hover:opacity-60 transition ease-in-out duration-300"
								}
								onClick={() => {
									setValue(image.id - 1);
								}}
							/>
						</ul>
					))}
				</div>
			</section>
		</>
	);
};

export default ProductGallery;
