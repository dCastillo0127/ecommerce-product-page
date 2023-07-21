import React from "react";
import { Menu } from "@mui/material";
import image from "../../public/images/image-product-1-thumbnail.jpg";
import { HiOutlineTrash } from "react-icons/hi";
import useResponsive from "../hooks/UseResponsive";

export default function Cart({ anchor, openAnchor, setAnchor, cartItem, setCartItem, price }) {
	const Mobile = useResponsive("down", "sm");
	return (
		<>
			<Menu
				id="basic-menu"
				anchorEl={anchor}
				open={openAnchor}
				onClose={() => setAnchor(null)}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<h3 className="mx-5 my-4 font-semibold text-slate-800">Cart</h3>
				<hr className={Mobile ? "w-screen" : " w-72"} />

				{cartItem === 0 ? (
					<a className="m-10 text-center text-sm flex justify-center font-semibold text-gray-400">Your cart is empty</a>
				) : (
					<div className="flex m-5 space-x-4 items-center justify-around">
						<img src={image} alt="Fall" className="w-14 rounded-lg " />
						<div>
							<a className="text-gray-500">Fall Limited Edition Sneakers</a>
							<section className="flex items-center space-x-2">
								<h1>
									$ {price}.00 x {cartItem}
								</h1>
								<h1 className="font-semibold">${price * cartItem}.00</h1>
							</section>
						</div>
						<HiOutlineTrash className="h-6 w-6 text-gray-500 hover:text-gray-600" onClick={() => setCartItem(0)} />
					</div>
					// {/* <MenuItem sx={{ backgroundColor: "#f97316", borderRadius: 2, marginX: 2, marginY: 1, color: "white", display: "flex", justifyContent: "center", fontWeight: 600 }}>Checkout</MenuItem> */}
				)}
			</Menu>
		</>
	);
}
