import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate(-1);
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen relative">
                <section className="z-10 w-[70%] h-[60vh] border-2 border-green-400 rounded-xl shadow-xl shadow-slate-600 p-16 flex justify-center items-center flex-col bg-white/50">
                    <h2 className="text-2xl text-center md:text-4xl my-6 font-bold text-rose-600">Opppsss!!! Looks like something is wrong</h2>
                    <button onClick={handleClick} className="btn btn-success text-white font-bold">Go back</button>
                </section>
                <div className="absolute  -z-50 inset-0 overflow-hidden w-full h-screen top-0">
                    <img src="https://i.imgur.com/DvfCyTC.jpg" alt="" className="w-full h-screen"/>
                </div>
                <div className="absolute bg-zinc-500/30   -z-10 inset-0 overflow-hidden w-full h-screen top-0"></div>

            </div>

        </div>
    );
};

export default ErrorPage;