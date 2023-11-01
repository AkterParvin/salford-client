import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CarCards from "../BodyPages/CarSection/CarCards";
import Team from "../BodyPages/BrandsPage/Team/Team";
import Content from "../BodyPages/BrandsPage/Team/Content/Content";
// import BrandsPage from "../BodyPages/BrandsPage/BrandsPage";


const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className="bg-gradient-to-t from-red-100 via-neutral-100 to-neutral-400">
            <Banner></Banner>
           
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-10 mx-3 md:mx-auto">
                {
                    data.map(brands => <CarCards
                        key={data._id}
                        brands={brands}
                    ></CarCards>)
                }

            </div>
            <div>

            </div>
            <div className="my-8 mx-4">
                <Team></Team>
            </div>
            <div className=" h-screen w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex items-center justify-center " style={{ backgroundImage: 'url(https://i.imgur.com/Utde2za.jpg)' }}>

                <h2 className="text-white font-bold z-50 text-5xl ">Drive with no hasitation</h2>
                <div className="bg-gray-700/40 z-10 overflow-hidden  h-screen w-full absolute"></div>

            </div>
            <div className="pb-10 ">
                <Content></Content>
            </div>
        </div>
    );
};

export default Home;