import { Link, useLoaderData } from "react-router-dom";
import { BsFillStarFill } from 'react-icons/bs'
import Swal from "sweetalert2";

const CarDetail = () => {
    const data = useLoaderData()
    // console.log(data)
    // const { id } = useParams();
    // console.log(id)
    const { _id, image, name, brand_name, detail, price, rating, title, type } = data;
    console.log(_id)

    const handleClick = _id => {
        console.log(_id);
        const newData = { image, name, brand_name, detail, price, rating, title, type }
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(idData => {
                console.log(idData);
                if (idData.insertedId) {
                    Swal.fire('Product added to the cart!')
                }
            })

    }
    return (
        <div>
            <h2 className="text-4xl text-center lg:my-10">{brand_name} in Detail</h2>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-10 md:py-15 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-fill shadow-xl transition duration-700 ease-in-out hover:scale-90 shadow-stone-800 object-center rounded border border-gray-200"
                            src={image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-lg flex flex-col justify-center items-center font-semibold md:flex-row text-gray-900 tracking-widest bg-slate-200 my-5 shadow-xl md:mb-5">
                                <span className="flex">
                                    Car Type :<p className="font-extrabold ml-1 mr-5">{type} </p></span>
                                <span className="flex">Name :<p className="font-extrabold ml-1">{name}</p></span>
                            </h2>
                            <h1 className="text-red-900 font-serif text-3xl font-bold hover:text-orange-900 mb-1 ">
                                {title}
                            </h1>
                            <div className="flex my-4 ">
                                <span className="flex items-center">
                                    <span className="flex gap-1 text-red-600 ">
                                        <BsFillStarFill></BsFillStarFill>
                                        <BsFillStarFill></BsFillStarFill>
                                        <BsFillStarFill></BsFillStarFill>
                                        <BsFillStarFill></BsFillStarFill>
                                        <BsFillStarFill></BsFillStarFill>
                                    </span>
                                    <span className="text-gray-600 ml-3">{rating}</span>
                                    <span className="text-gray-600 ml-3 border pl-1 border-l-black">4 Reviews</span>
                                </span>

                            </div>
                            <p className="leading-relaxed">
                                {/* Product description */}
                                {detail}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">


                            </div>
                            <div className="flex items-center justify-between">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    Price : ${price}
                                </span>
                                <Link to={`/update/${_id}`}><button className="btn  btn-sm btn-info ml-auto btn-outline font-semibold">update</button></Link>

                                <button onClick={() => handleClick(_id)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-5 focus:outline-none font-semibold hover:bg-red-700 rounded">
                                    Add to Cart
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg
                                        fill="red"
                                        stroke="round"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarDetail;