import { BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex py-[19px] px-[52px] bg-white items-center justify-between">
      <Link to="/" className="md:leading-[30px] text-3xl font-bold md:text-xl">
        Logo
      </Link>
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex gap-10 items-center">
          {["Home", "Shop", "Product", "Page"].map((item) => (
            <li key={item}>
              <p className="text-sm leading-6 font-medium">{item}</p>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:flex gap-5 items-center hidden">
        <button aria-label="Search" className="hover:opacity-80">
          <BiSearch size={24} />
        </button>
        <button aria-label="User account" className="hover:opacity-80">
          <BiUser size={24} />
        </button>
        <button
          aria-label="Shopping cart"
          className="flex gap-[2px] items-center hover:opacity-80"
        >
          <BsBag size={24} />
          <span className="size-5 bg-black rounded-full flex items-center justify-center text-white font-semibold">
            2
          </span>
        </button>
      </div>
      <div className="block md:hidden">
        <button aria-label="Menu" className="hover:opacity-80">
          <BiMenu size={24} />
        </button>
      </div>
    </header>
  );
}
