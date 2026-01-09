import { Routes , Route} from "react-router-dom";
import Header from "../components/header";

export default function homePage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header/>
      <div className="flex-1 overflow-y-auto bg-primary text-3xl text-secondery">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/products" element={<h1>Products</h1>}/>
          <Route path="/about" element={<h1>About us</h1>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
          <Route path="/*" element={<h1>Page not Found</h1>}/>
        </Routes>
      </div>
    </div>
  )
}
