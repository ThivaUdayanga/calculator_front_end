import { Routes, Route, Link } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { PiStorefrontBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";

export default function AdminPage(){
    return(
        <div className="w-full h-full max-h-full flex bg-accent">
            <div className="w-[300px] h-full bg-accent">
                <div className="w-full h-[100px] flex justify-center items-center text-primary text-2xl">
                    <img src="/logo.png" className="h-full text-primary" />
                    <h1>Admin</h1>
                </div>
                <div className="w-full h-[400px] flex flex-col text-primary text-2xl">
                    <Link to="/admin" className="w-full h-[60px] items-center gap-[15px] flex"><LuClipboardList />Orders</Link>
                    <Link to="/admin/products" className="w-full h-[60px] items-center gap-[15px] flex"><PiStorefrontBold />Products</Link>
                    <Link to="/admin/users" className="w-full h-[60px] items-center gap-[15px] flex"><LuUsers />Users</Link>
                    <Link to="/admin/reviews" className="w-full h-[60px] items-center gap-[15px] flex"><MdOutlineReviews /> Reviews</Link>
                </div>

            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full border-[10px] border-accent rounded-3xl overflow-y-scroll bg-primary text-4xl">
                <Routes>
                    <Route path="/" element={<h1>Orders</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
        </div>
    )
}