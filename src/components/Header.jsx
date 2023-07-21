import React, { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import { HiMenu } from "react-icons/hi";
import avatar from "../images/image-avatar.png";
import { Avatar, Menu, MenuItem } from "@mui/material";
import useResponsive from "../hooks/UseResponsive";
import { Modal } from "@mui/material";

const Header = () => {
	const menu = ["Collections", "Men", "Women", "About", "Contact"];
	const [open, setOpen] = useState(false);
	const [anchor, setAnchor] = useState(null);
	const openAnchor = Boolean(anchor);

	const Desktop = useResponsive("up", "md");
	const Mobile = useResponsive("down", "sm");

	const listAdded = () => {};
	return (
		<>
			<div className="flex justify-between items-center border-b mx-6 lg:max-w-5xl lg:mx-auto">
				<div className="flex items-center mx-2 lg:mx-4 py-10 gap-2  ">
					{!Desktop && (
						<section>
							<HiMenu className="w-6 h-6 cursor-pointer" onClick={() => setOpen(true)} />
							<Modal open={open} onClose={() => setOpen(false)}>
								<section className="bg-white h-screen w-[20rem]">
									<ul className=" mx-8 py-10 space-y-5">
										{menu.map((list, index) => (
											<li key={index} className=" font-semibold text-slate-600 hover:text-slate-900">
												{list}
											</li>
										))}
									</ul>
								</section>
							</Modal>
						</section>
					)}
					<img src={logo} className={Mobile ? "pb-1 w-[7rem]" : "pb-1"} />
					{Desktop && (
						<nav className="items-center">
							<ul className="flex mx-6">
								{menu.map((list, index) => (
									<li
										key={index}
										className="mx-2 lg:mx-4 text-gray-500 hover:text-gray-800 transition ease-in-out duration-200 hover:border-b-4 border-orange-500 "
									>
										{list}
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
				<div className="flex items-center space-x-8">
					<section>
						<img src={cart} alt="cart" onClick={(e) => setAnchor(e.currentTarget)} className=" cursor-pointer" />
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
							<hr className={Mobile ? "w-screen": " w-72"}/>
							<a className="m-10 text-center text-sm flex justify-center font-semibold text-gray-400">
								Your cart is empty
							</a>
							{/* <MenuItem sx={{ backgroundColor: "#f97316", borderRadius: 2, marginX: 2, marginY: 1, color: "white", display: "flex", justifyContent: "center", fontWeight: 600 }}>Checkout</MenuItem> */}
						</Menu>
					</section>
					<Avatar alt="user" src={avatar} sx={{ width: 40, height: 40 }} />
				</div>
			</div>
		</>
	);
};

export default Header;
