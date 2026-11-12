import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchImg from '../assets/Search.png'
import avatarImg from '../assets/avatar.png'
import burgerImg from '../assets/burger.png'

export default function CommonPage() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    const links = [
        {
            name: "Tableau de bord",
            path: "/",
            icon: "icones-menu/dashboard.svg"
        },
        {
            name: "Candidatures",
            path: "/candidatures",
            icon: "icones-menu/candidatures.svg"
        },
        {
            name: "Offres",
            path: "/offres",
            icon: "icones-menu/offres.svg"
        },
        {
            name: "CV & lettres",
            path: "/cv",
            icon: "icones-menu/cv.svg"
        },
        {
            name: "Entretiens",
            path: "/entretiens",
            icon: "icones-menu/entretiens.svg"
        },
        {
            name: "Statisiques",
            path: "/stats",
            icon: "icones-menu/statistiques.svg"
        },
        {
            name: "Compte",
            path: "/compte",
            icon: "icones-menu/compte.svg"
        },
    ]

    // Nom de la page en cours
    const location = useLocation();

    return (
        <div className="flex min-h-dvh bg-[#F5F4EF]">
            {
                // Overlay mobile
                isMenuOpen && (
                    <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
                )
            }

            <aside className={`fixed justify-between items-center inset-y-0 left-0 z-50 flex w-64 max-w-[85vw] flex-col overflow-y-auto bg-[#12131C] p-4 transition-transform duration-300 md:sticky md:top-0 md:h-dvh md:shrink-0 md:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <div className="mb-10 flex justify-center items-center gap-2">
                            <img className="w-12 h-12 shrink-0 object-contain" src="/Logo.png" alt="NextStep" />
                        </div>
                        <div className="flex mb-10 flex-row gap-0 justify-center items-center font-bold text-2xl md:hidden lg:flex">
                            <p className="text-[#004aad]">Next</p>
                            <p className="text-[#ff5757]">Step</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-3">
                        {
                            links.map(link => (
                                <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`flex flex-row gap-2 items-center max-w-full text-gray-400 rounded-xl hover:bg-[#262838] px-4 py-2 ${location.pathname === link.path ? "bg-[#262838]" : null}`}>
                                    <img src={"/public/" + link.icon} alt="" className="w-7 h-7 brightness-0 invert" />
                                    <span>{link.name}</span>
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>

                <button className={`flex items-center gap-4 text-white p-2 px-5 bg-[#262838] rounded-2xl hover:bg-[#333548] hover:cursor-pointer`} onClick={() => alert("Mon compte")}>
                    <img className="w-8 h-8" src={avatarImg} alt="Mon compte" />
                    <div className="flex flex-col items-start justify-center">
                        <p className='text-lg'> Utilisateur </p>
                        <p className='text-gray-400'> Recherche active </p>
                    </div>
                </button>
            </aside>

            <div className="min-w-0 flex-1">
                <header className="flex items-center gap-3 p-4">
                    <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={burgerImg} alt="" />
                    </button>

                    <div className="max-h-10 w-full p-2 flex flex-row gap-2 items-center">
                        <img className="w-auto h-8" src={searchImg} alt="" />
                        <form action="" className="w-full">
                            <input className="focus:border w-full max-w-75 md:max-w-90 py-0.5 rounded-2xl border px-2 placeholder:text-sm" type="search" placeholder="Recherchez une entreprise" />
                        </form>
                    </div>
                </header>

                <main className="p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}