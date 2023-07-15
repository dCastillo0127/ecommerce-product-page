import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "@mui/material";

const ProductGallery = () => {
	const [product, setProduct] = useState([]);
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

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

	// axios api call
	// useEffect(() => {
	// 	axios.get("http://localhost:3006/products").then((response) => {
	// 		setProduct(response.data);
	// 	});
	// }, []);

	useEffect(() => {
		fetch("../../data.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setProduct(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	const mainImage = { ...product[value] };	

	return (
		<>
			<Modal open={open}>
				<section className="mx-5 absolute sm:left-1/2 sm:-translate-x-1/2 sm:w-[550px] transition duration-200">
					<AiOutlineClose
						onClick={() => setOpen(false)}
						className="h-6 w-6 text-white absolute right-2 top-10 md:top-9 cursor-pointer hover:scale-75 duration-300 z-10"
					/>
					<section className="flex items-center justify-center h-screen">
						<img src={mainImage?.productImg} onClick={() => setOpen(true)} className="rounded-2xl" />
						<div className="absolute inset-0 flex items-center justify-between px-3">
							<button
								onClick={previousImage}
								className=" bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300 "
							>
								<HiOutlineChevronLeft className="md:h-6 md:w-6" />
							</button>
							<button onClick={nextImage} className=" bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300">
								<HiOutlineChevronRight className="md:h-6 md:w-6" />
							</button>
						</div>
					</section>
				</section>
			</Modal>

			<section className="w-[full] lg:w-[27rem] mx-auto ">
				<section className="flex items-center justify-center ">
					<img src={mainImage?.productImg} className="md:rounded-3xl " onClick={() => setOpen(true)} />
					<div className="inline-block md:hidden ">
						<button
							onClick={previousImage}
							className=" absolute left-5 top-[18rem] bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300 "
						>
							<HiOutlineChevronLeft />
						</button>
						<button
							onClick={nextImage}
							className=" absolute right-5 top-[18rem] bg-white shadow-md rounded-full p-2 hover:scale-105 transition ease-in-out duration-300"
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
