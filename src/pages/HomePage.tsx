import { useNavigate } from "react-router-dom"
import loupeImg from '../assets/home/loupe.png'
import kanbanImg from '../assets/home/kanban.png'
import iaImg from '../assets/home/ia.png'

export default function HomePage () {
    const navigate = useNavigate()

    return (
        <div className="bg-[#F5F4EF] w-full h-screen">
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
                        onClick={() => navigate("/login")}>
                        Créer un compte
                    </button>
                </div>
            </header>

            <main className="max-w-7xl md:w-full mx-auto w-full px-6 py-8 flex flex-col items-center">
                <h1>Simplifiez votre recherche.</h1>
                <h1>Cenralisez vos candidatures</h1>
                <p>NextStep centralise toutes vos candidatures afin de vous aider à trouver votre travail.</p>

                <div className="flex flex-row justify-around h-64 w-full md:flex-col md:items-center md:gap-6">
                    <div className="border border-gray-300 bg-white rounded-xl p-3 px-6 flex flex-col justify-center gap-2.5 w-[20vw] md:w-[50vw] md:py-6">
                        <img src={loupeImg} className="w-16 h-16 mb-5 flex self-start" alt="" />
                        <h2 className="font-bold text-xl">
                            Centralise tes offres
                        </h2>
                        <p>
                            Toutes les offres Hello Work, Mon Alternance et France Travail sur un seul site.
                        </p>
                    </div>

                    <div className="border border-gray-300 bg-white rounded-xl p-3 px-6 flex flex-col justify-center gap-2.5 w-[20vw] md:w-[50vw] md:py-6">
                        <img src={kanbanImg} className="w-16 h-16 mb-5 flex self-start" alt="" />
                        <h2 className="font-bold text-xl">
                            Suivi Kanban
                        </h2>
                        <p>
                            Visualisez vos candidatures par étape (A postuler, Envoyée, Relance, Entretien).
                        </p>
                    </div>

                    <div className="border border-gray-300 bg-white rounded-xl p-3 px-6 flex flex-col justify-center gap-2.5 w-[20vw] md:w-[50vw] md:py-6">
                        <img src={iaImg} className="w-16 h-16 mb-5 flex self-start" alt="" />
                        <h2 className="font-bold text-xl">
                            IA
                        </h2>
                        <p>
                            Recevez les offres recommendées pour votre profil toutes les semaines.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}