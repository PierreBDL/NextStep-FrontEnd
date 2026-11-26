import { useNavigate } from "react-router-dom"
import NotFoundPageImg from '../assets/404.png'
import HeaderHome from "./HeaderHome"

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#F5F4EF] w-full min-h-screen flex flex-col">
            <HeaderHome />

            <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 gap-4 flex flex-col items-center md:mt-30">
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <img className="w-xs" src={NotFoundPageImg} alt="" />
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-3xl font-bold text-red-600">404 - Page introuvable</h1>
                        <button
                            className="text-black hover:text-white h-10 bg-[#ffcb57] hover:bg-[#d5a94a] hover:cursor-pointer border border-gray-300 p-1 px-3 flex justify-center items-center rounded-lg font-semibold"
                            onClick={() => navigate("/")}>
                            Retour à l'accueil
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}