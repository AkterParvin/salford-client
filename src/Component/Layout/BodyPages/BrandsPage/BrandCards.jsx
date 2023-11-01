/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCards = ({ card }) => {

    const { name, type, price, detail, brand_name, title, rating, image, thumbnail_img, _id } = card;
    // console.log(_id);
    return (
        <div>
    
            <div className="flex flex-col items-center justify-center w-full  rounded-lg  mx-auto transition duration-300 transform lg:hover:-translate-y-2 ">
                <div className="w-full  bg-gray-300  bg- rounded-lg shadow-md" >
                    <img src={thumbnail_img} alt="" className='h-72 w-screen object-cover object-center rounded-lg' />
                </div>

                <div className="w-[80%] -mt-10 overflow-hidden bg-gray-800/90 rounded-lg shadow-lg dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-red-600 uppercase dark:text-white">{type}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{brand_name }</span>

                        <Link to={`/detail/${_id}`}>
                            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Show Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //     <div className="grid gap-10 lg:grid-cols-2">
        //         <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        //             <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">

        //             </div>
        //             <div className="max-w-xl mb-6">
        //                 <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        //                     {name}
        //                     <br className="hidden md:block" />
        //                    { type} <br />
        //                     <span className="inline-block text-deep-purple-accent-400">
        //                        $ {price}
        //                     </span>
        //                 </h2>
        //                 <p>{title}</p>
        //                 <p className="text-base text-gray-700 md:text-lg">
        //                     {detail}
        //                 </p>
        //             </div>
        //             <div>
        //                 <a
        //                     href="/"
        //                     aria-label=""
        //                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        //                 >
        //                     {brand}

        //                 </a>
        //             </div>
        //         </div>
        //         <div className="flex items-center justify-center -mx-4 lg:pl-8">
        //             <div className="flex flex-col items-end px-3">
        //                 <img
        //                     className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
        //                     src={image}
        //                     alt=""
        //                 />
        //                 <img
        //                     className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
        //                     src={thumbnail_img}
        //                     alt=""
        //                 />
        //             </div>
        //             <div className="px-3">
        //                 <img
        //                     className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
        //                     src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
        //                     alt=""
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        //     <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style="background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"></div>

        //     <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        //         <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

        //         <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
        //             <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
        //             <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
        //         </div>
        //     </div>
        // </div>
    );
};
BrandCards.propTypes = {
    card: PropTypes.object
}
export default BrandCards;