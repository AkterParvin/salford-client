import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const CarCards = ({ brands }) => {
    const { image, brand_name, title } = brands;
    
    return (
        <Link to={`/cars/${brand_name}`}>

            <div className=" ">

                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <div>
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={image}
                            alt="img"
                        />
                        <p className="bg-gray-700 text-white font-bold w-full font-serif text-center py-2">{brand_name}</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 px-4 text-lg font-bold text-gray-100">
                            {title}
                        </p>

                        {/* <div className="flex items-center justify-center space-x-3">
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >

                            </a>
                            <a
                                href="/"
                                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >

                            </a>
                        </div> */}
                    </div>
                </div>

            </div>

        </Link>
    );
};
CarCards.propTypes = {
    brands: PropTypes.object
}

export default CarCards;
