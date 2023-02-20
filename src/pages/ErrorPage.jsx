import { Link } from "react-router-dom"
export const ErrorPage = ()=>{
    return(
        <main className="text-white grid place-items-center  h-screen">
            <h1 className=" text-2xl">Sorry, this page does not exist</h1>
            <h1>
                <Link to='/' className=" lg:hover:text-[#facd66] text-lg underline">
                    Back to homepage
                </Link>
            </h1>
        </main>
    )
}