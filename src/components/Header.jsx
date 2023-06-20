import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { Avatar } from "@mui/material";

const Header = () => {
	const menu = ["Collections", "Men", "Women", "About", "Contact"];
	return (
		<>
			<div className="flex justify-between items-center border-b mx-6 lg:max-w-5xl lg:mx-auto">
				<div className="flex items-center mx-2 lg:mx-4 py-7  ">
					<img src={logo} />
					<nav className="hidden md:inline-block items-center">
						<ul className="flex mx-6">
							{menu.map((list, index) => (
								<li
									key={index}
									className="mx-2 lg:mx-4    text-gray-500 hover:text-gray-800 transition ease-in-out duration-200 hover:border-b-4 border-orange-500 "
								>
									{list}
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex items-center space-x-8">
					<img src={cart} alt="cart" />
					<Avatar alt="user" src={avatar} sx={{ width: 40, height: 40 }} />
				</div>
			</div>
		</>
	);
};

export default Header;
