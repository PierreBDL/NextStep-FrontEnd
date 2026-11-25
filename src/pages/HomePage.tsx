import { useNavigate } from "react-router-dom"
import loupeImg from '../assets/home/loupe.png'
import kanbanImg from '../assets/home/kanban.png'
import iaImg from '../assets/home/ia.png'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#F5F4EF] w-full min-h-screen flex flex-col">
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

            <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 gap-4 flex flex-col items-center md:mt-30">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-3xl text-center font-bold">Simplifiez votre recherche.</h1>
                    <h1 className="text-3xl text-center font-bold">Trouvez votre métier.</h1>
                    <p className="text-slate-600 text-center font-bold">NextStep centralise toutes vos candidatures afin de vous aider à trouver votre travail.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                    <div className="border border-gray-300 bg-white rounded-xl p-6 flex flex-col justify-start gap-2.5">
                        <img src={loupeImg} className="w-16 h-16 mb-5 flex self-start sm:self-center sm:mb-2" alt="" />
                        <h2 className="font-bold text-xl sm:text-lg sm:font-semibold">
                            Centralise tes offres
                        </h2>
                        <p>
                            Toutes les offres Hello Work, Mon Alternance et France Travail sur un seul site.
                        </p>
                    </div>

                    <div className="border border-gray-300 bg-white rounded-xl p-6 flex flex-col justify-start gap-2.5">
                        <img src={kanbanImg} className="w-16 h-16 mb-5 flex self-start sm:self-center sm:mb-2" alt="" />
                        <h2 className="font-bold text-xl sm:text-lg sm:font-semibold">
                            Suivi Kanban
                        </h2>
                        <p>
                            Visualisez vos candidatures par étape (A postuler, Envoyée, Relance, Entretien).
                        </p>
                    </div>

                    <div className="border border-gray-300 bg-white rounded-xl p-6 flex flex-col justify-start gap-2.5">
                        <img src={iaImg} className="w-16 h-16 mb-5 flex self-start sm:self-center sm:mb-2" alt="" />
                        <h2 className="font-bold text-xl sm:text-lg sm:font-semibold">
                            IA
                        </h2>
                        <p>
                            Recevez les offres recommendées pour votre profil toutes les semaines.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-3 w-full h-full mt-8">
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
            </main>
        </div>
    )
}