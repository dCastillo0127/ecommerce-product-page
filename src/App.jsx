import { useState } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineShoppingCart } from "react-icons/hi";
import Cart from "./components/Cart";

function App() {
	const [item, setItem] = useState(0);
	const [cartItem, setCartItem] = useState(0);
	const price = 125;

	const minusItem = () => {
		if (item !== 0) {
			setItem(item - 1);
		}
	};

	const addToCart = () => {
		setCartItem(item);
	};

	return (
		<>
			<Header cartItem={cartItem} setCartItem={setCartItem} price={price}/>
			<section className="grid grid-cols-1 md:grid-cols-2 place-content-center max-w-5xl mx-auto md:my-16 md:px-10">
				<ProductGallery />
				<article className="my-7 md:my-14 mx-8">
					<h4 className=" uppercase text-orange-500 font-semibold tracking-widest mb-4">Sneaker Company</h4>
					<h1 className=" font-black text-[2rem] lg:text-[3rem] leading-[1] mb-5 md:mb-10"> Fall Limited Edition Sneakers</h1>
					<p className="text-gray-600 font-medium mb-8">
						These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
					<div className="flex space-x-4 items-center">
						<h3 className="font-bold text-[25px]">$125.00</h3>
						<h3 className="px-3 py-1 bg-orange-400/20 rounded-lg">
							<p className="text-orange-400 font-semibold">50%</p>
						</h3>
					</div>

					<section className="sm:grid grid-cols-2 gap-5">
						<div className=" bg-[#f7f8fd] rounded-lg  my-3">
							<ul className="flex justify-around items-center py-2">
								<button onClick={minusItem}>
									<li className=" text-orange-400 ">
										<HiOutlineMinus className="h-4 w-4 stroke-[4px]" />
									</li>
								</button>
								<li>
									<p className="font-bold">{item}</p>
								</li>
								<button onClick={() => setItem(item + 1)}>
									<li className=" text-orange-400  ">
										<HiOutlinePlus className="h-4 w-4 stroke-[4px]" />
									</li>
								</button>
							</ul>
						</div>

						<button
							onClick={addToCart}
							className="flex w-full justify-center items-center space-x-4 my-3 bg-orange-500 shadow-xl shadow-orange-500/30  text-white font-semibold p-2 rounded-lg px-4 hover:scale-[.99] transition  ease-in-out duration-300"
						>
							<HiOutlineShoppingCart className="h-5 w-5" />
							<h1 className="text-[15px] lg:text-[16px]">Add to cart</h1>
						</button>
					</section>
				</article>
			</section>
		</>
	);
}

export default App;
