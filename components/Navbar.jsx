import Link from "next/link"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { useAuthContext } from "../ctx/authContext"
import { useCartContext } from "../ctx/cartContext"
import Cart from "./Cart"

const Navbar = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartContext()
  const { user } = useAuthContext()

  return (
    <div className="bg-orange-500 text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center z-10">
      <div className="h-full w-10/12 my-auto flex justify-between items-center">
        {/* left */}
        <h2 className="text-3xl">
          <Link href={"/"}>DinWebDev</Link>
        </h2>
        {/* center */}
        <div className="hidden sm:block">
          <ul className="flex justify-center items-center gap-6 text-[#efefef] text-[18px] ">
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
              Hero
            </li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
              Categories
            </li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
              Products
            </li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">
              Contacts
            </li>
          </ul>
        </div>
        {/* right */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block">
            <div className="flex items-center gap-4 bg-white px-2 py-1 rounded-lg">
              <input
                className="text-[#222] outline-none"
                type="text"
                placeholder="Search..."
              />
              <AiOutlineSearch color="black" />
            </div>
          </div>
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart size={25} onClick={toggleCart} />
            <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
              {cartItems?.length}
            </span>
            <div className="absolute top-4 -right-16 z-10">
              {isCartOpen && <Cart />}
            </div>
          </div>
          <span>{user?.username}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar