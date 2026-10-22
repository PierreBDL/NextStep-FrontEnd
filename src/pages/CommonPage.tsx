import { Link, Outlet } from 'react-router-dom'
import searchImg from '../assets/Search.png'
import homeImg from '../assets/home.png'
import candidatureImg from '../assets/candidature.png'

export default function CommonPage() {
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <div className="w-[28vw] h-full md:w-[16vw] flex flex-col bg-slate-200 p-2">
                <aside className="w-[25vw] px-2 flex flex-row gap-1 justify-start items-center">
                    <img className="w-15 h-15" src="/Logo.png" alt="" />
                    <div className="flex flex-row gap-0 font-bold text-2xl">
                        <p className="text-[#004aad]">Next</p>
                        <p className="text-[#ff5757]">Step</p>
                    </div>
                </aside>

                <nav className="w-[28vw] h-full md:w-[16vw] px-1 flex flex-col gap-5 py-8">
                    <Link className="flex flex-row gap-2 items-center max-w-[24vw] md:max-w-[13vw] rounded-xl hover:text-[#004aad] hover:bg-[#9ec1ee84] px-2.5 py-2" to="/"><img className="h-6 w-6" src={homeImg} alt="Home" />Tableau de bord</Link>
                    <Link className="flex flex-row gap-2 items-center max-w-[24vw] md:max-w-[13vw] rounded-xl hover:text-[#004aad] hover:bg-[#9ec1ee84] px-2.5 py-2" to="/"><img className="h-6 w-6" src={candidatureImg} alt="Home" />Candidatures</Link>
                </nav>

                {
                    /*
                        <div className="absolute left-[27vw] lg:left-[17vw] top-0 bottom-0 bg-[#004aad] h-full w-px"></div>
                    */
                }
            </div>

            <header className="ml-[28vw] md:ml-[18vw] w-[75vw] md:w-[83vw] absolute top-0 mt-2">
                <div className="max-h-10 w-full p-2 flex flex-row gap-2 items-center">
                    <img className="w-auto h-8" src={searchImg} alt="" />
                    <form action="" className="w-full">
                        <input className="focus:border w-full max-w-75 py-0.5 rounded-2xl placeholder:px-3" type="search" placeholder="Recherchez une entreprise" />
                    </form>
                </div>
            </header>

            <main className="absolute left-0 top-0 ml-[30vw] md:ml-[18vw] w-[75vw] md:w-[83vw] mt-20">
                <Outlet />
            </main>
        </div>
    )
}