import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[60px] flex bg-accent text-secondery">
            <img src="/logo.png" className="h-full" alt="logo" />
            <div className="w-full h-full flex text-primary justify-center items-center gap-[30px] text-xl">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact Us</Link> 
            </div>
        </header>
    )
}