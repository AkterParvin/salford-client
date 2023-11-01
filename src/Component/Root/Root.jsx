import { Outlet } from "react-router-dom";
import Nav from "../Layout/Home/Nav";
import Footer from "../Layout/BodyPages/Footer/Footer";


const Root = () => {
    return (
      <div >
        <Nav></Nav>
        <div className="container mx-auto">
          <Outlet></Outlet>  
        </div>
         <Footer></Footer>
        </div>
    );
};

export default Root;