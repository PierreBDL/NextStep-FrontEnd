import { useNavigate } from "react-router-dom"  

export default function HeaderHome() {
    const navigate = useNavigate()

    return (
        <header className="flex flex-row justify-between p-4 px-5">
            <div className="flex flex-row items-center justify-start gap-1">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-12 h-12 shrink-0 object-contain" src="/Logo.png" alt="NextStep" />
                </div>
                <div className="flex flex-row gap-0 text-[#4F46E5] justify-center items-center font-bold text-2xl">
                    NextStep
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center">
                <button
                    className="bg-white h-10 hover:bg-slate-100 hover:cursor-pointer border border-gray-300 p-1 px-3 flex justify-center items-center rounded-lg text-black font-semibold"
                    onClick={() => navigate("/login")}>
                    Se Connecter
                </button>

                <button
                    className="bg-[#4F46E5] h-10 hover:bg-[#6660e4] hover:cursor-pointer border border-gray-300 p-1 px-3 flex justify-center items-center rounded-lg text-white font-semibold"
                    onClick={() => navigate("/registration")}>
                    Créer un compte
                </button>
            </div>
        </header>
    )
}