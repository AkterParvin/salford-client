import Swal from "sweetalert2";


const AddProduct = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const detail = form.detail.value;
        const brand_name = form.brand.value;
        const title = form.title.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const thumbnail_img = form.thumbnail_img.value;
        const myData={name,type,price,detail,brand_name,title,rating,image,thumbnail_img}
        console.log(myData);

        // send data to the server 
        fetch('https://brand-shop-server-nu.vercel.app/cars', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added  successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

    }
    return (
        <div>
            <div className="text-center md:my-10 w-10/12 mx-auto">
                <h1 className="text-4xl font-bold ">Add New Product !</h1>
                <p className="text-lg text-gray-500 text-center my-4">A Car Dealer with illum nesciunt sit amet consectetur, <br /> adipisicing elit. Expedita facere corporis quam, illum nesciunt blanditiis?</p>
            </div>

            <div className="my-6 ">
                <section className="w-10/12 md:max-w-3xl p-8 md:px-32 mx-auto bg-gradient-to-t from-stone-900 via-red-800 to-neutral-400 rounded-md shadow-md dark:bg-gray-800">

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2  ">
                            <div>
                                <label className="text-white font-semibold text-lg" >Car Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Car Name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white font-semibold  dark:text-gray-200  text-lg " >Car Type</label>
                                <input required
                                    type="text"
                                    name="type"
                                    placeholder="Car Type"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white  dark:text-gray-200 font-semibold text-lg" >Price</label>
                                <input id="password"
                                    required
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200 font-semibold text-lg" >Title</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-white dark:text-gray-200 font-semibold text-lg" >Detail</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Short Description"
                                    name="detail"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200 font-semibold text-lg" >Brand Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Brand Name"
                                    name="brand_name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white  dark:text-gray-200 font-semibold text-lg" >Rating</label>
                                <input
                                    type="text"
                                    placeholder="Rating"
                                    name="rating"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-end mt-6 space-y-4">
                            <div>
                                <label className="text-white dark:text-gray-200 text-left font-semibold text-lg" >Image URL</label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    name="image"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-white dark:text-gray-200 text-left font-semibold text-lg" >Thumbnail URL</label>
                                <input
                                    type="text"
                                    placeholder="Thumbnail URL"
                                    name="thumbnail_img"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <input
                                type="submit"
                                value="Add Product"
                                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-b from-gray-700 via-slate-600 to-red-500 rounded-md text-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            />

                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddProduct;