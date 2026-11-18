import { useState } from "react"
import { type FormFieldTemplate } from '../interfaces/FormInt'
import FormTemplate from '../components/FormTemplate'

export default function RegistrationPage() {

    // Input States
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const fields: FormFieldTemplate[] = [
        {
            label: "Courriel",
            id: "email",
            placeholder: "exemple@exemple.com",
            inputType: "email",
            value: email,
            setter: setEmail,
            isRequire: true
        },
        {
            label: "Mot de passe",
            id: "password",
            placeholder: "**********",
            inputType: "password",
            value: password,
            setter: setPassword,
            isRequire: true
        }
    ]




    // Errors
    const [errorLogin, setErrorLogin] = useState<string>("")

    return (
        <div className="flex flex-row max-w-screen w-full">
            <div className="bg-[#12131C] px-15 py-8 lg:w-[50vw] md:hidden lg:flex flex flex-col justify-between">
                <div className="flex flex-row items-center justify-start gap-1">
                    <div className="mb-10 flex justify-center items-center gap-2">
                        <img className="w-12 h-12 bg-white rounded-full shrink-0 object-contain" src="/Logo.png" alt="NextStep" />
                    </div>
                    <div className="flex mb-10 flex-row gap-0 text-white justify-center items-center font-bold text-2xl">
                        NextStep
                    </div>
                </div>

                <div>
                    <div className="text-white text-5xl font-bold flex flex-col gap-1">
                        Toutes tes 
                        <br />
                        candidatures.
                        <br />
                        <div className="text-[#D4F55A] text-4xl">
                            Un longueur d'avance.
                        </div>
                    </div>
                    <div className="text-gray-400 mt-4">
                        Centralise les offres et suis chacune de tes candidatures.
                    </div>

                    <ul className="text-white flex flex-col gap-4 my-7">
                        <li className="flex flex-row">
                            <span className="text-[#D4F55A] cursor-pointer bg-[#474f28] w-6 h-6 p-1 flex justify-center items-center rounded-full font-bold mx-2">✓</span>
                            Hello Work, Mon Alternance et France Travail réunis ensemble
                        </li>
                        <li className="flex flex-row">
                            <span className="text-[#D4F55A] cursor-pointer bg-[#474f28] w-6 h-6 p-1 flex justify-center items-center rounded-full font-bold mx-2">✓</span>
                            Tableau Kanban de suivi de vos candidatures
                        </li>
                        <li className="flex flex-row">
                            <span className="text-[#D4F55A] cursor-pointer bg-[#474f28] w-6 h-6 p-1 flex justify-center items-center rounded-full font-bold mx-2">✓</span>
                            IA et courriels pour vous accompagner.
                        </li>
                    </ul>
                </div>

                <div>

                </div>
            </div>
            <FormTemplate title="connexion" fields={fields} error={errorLogin}></FormTemplate>
        </div>
    )
}