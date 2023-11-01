import { useLoaderData} from "react-router-dom";
import BrandCards from "./BrandCards";
// import Marquee from "react-fast-marquee";


const BrandsPage = () => {
    const data = useLoaderData();
    console.log(data);
    // console.log(data)
    
   
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6PxVtck/slider3.jpg" className="w-full h-screen object-fill object-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.imgur.com/pF8ig0B.jpg" className="w-full h-screen object-fill object-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.imgur.com/Utde2za.jpg" className="w-full h-screen object-fill object-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.imgur.com/GetjZ77.jpg" className="w-full h-screen object-fill object-center" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col md:flex-row">
                <div className="">
                    <img src="https://i.imgur.com/GetjZ77.jpg" alt="" className="h-screen w-screen"/>
                </div>
                <div className="w-[60%] lg:w-[45%] absolute top-[9%] left-[0%] ">
                    <Marquee>
                        <img src="https://i.ibb.co/6PxVtck/slider3.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
                        <img src="https://i.imgur.com/hTnNVu2.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
                        <img src="https://i.imgur.com/Utde2za.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
                        <img src="https://i.imgur.com/pF8ig0B.jpg" alt="" className=" mx-auto h-[50vh] ml-2  shadow-xl shadow-slate-700" />
                    </Marquee>
                    <h1 className="text-sm lg:text-2xl rounded-b-xl text-white bg-red-700/60 px-3 py-3">Your one-stop destination for hassle-free, expert guidance and a vast selection of vehicles to choose from!</h1>
                </div>
            </div>
             */}

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto my-20">
                {data.length == 0 ? <>
                    <div className="w-full  h-[50vh] bg-slate-100 flex justify-center flex-col items-center mx-auto shadow-xl">
                        <p className="uppercase text-2xl font-bold text-red-600">Sorry !</p>
                        <h2 className="text-lg font-semibold ">No product Available in this category</h2>
                    </div>
                </> : data.map(card => <BrandCards key={card._id}
                    card={card}
                ></BrandCards>)}
                
            </div>
        </div>
        
    );
};

export default BrandsPage;