import { useNavigate } from "react-router-dom"

export default function HeaderHome() {
    const navigate = useNavigate()

    return (
        <header className="flex flex-row justify-between p-4 px-5">
            <button className="flex flex-row items-center justify-start gap-1 hover:cursor-pointer" onClick={() => navigate("/")}>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-15 h-15 shrink-0 object-contain" src="/Logo.png" alt="NextStep" />
                </div>
                <div className="flex flex-row gap-0 text-[#d5a94a] justify-center items-center font-bold text-2xl">
                    NextStep
                </div>
            </button>

            <div className="flex flex-row gap-2 items-center justify-center">
                <button
                    className="bg-white h-10 hover:bg-slate-100 hover:cursor-pointer border border-gray-300 p-1 px-3 flex justify-center items-center rounded-lg text-black font-semibold"
                    onClick={() => navigate("/login")}>
                    Se Connecter
                </button>

                <button
                    className="bg-[#ffcb57] hover:bg-[#d5a94a] h-10 hover:cursor-pointer border border-gray-300 p-1 px-3 flex justify-center items-center rounded-lg text-black hover:text-white font-semibold"
                    onClick={() => navigate("/registration")}>
                    Créer un compte
                </button>
            </div>
        </header>
    )
}