import { useState } from "react"
import {type FormFieldTemplate} from '../interfaces/FormInt'
import FormTemplate from '../components/FormTemplate'

export default function RegistrationPage () {
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const fields: FormFieldTemplate[] = [
        {
            label: "Prénom",
            id: "name",
            placeholder: "Votre prénom...",
            inputType: "text",
            value: name,
            setter: setName
        },
        {
            label: "Nom",
            id: "surname",
            placeholder: "Votre nom...",
            inputType: "text",
            value: surname,
            setter: setSurname
        },
        {
            label: "Courriel",
            id: "email",
            placeholder: "exemple@exemple.com",
            inputType: "email",
            value: email,
            setter: setEmail
        },
        {
            label: "Mot de passe",
            id: "password",
            placeholder: "*******",
            inputType: "password",
            value: password,
            setter: setPassword
        },
        {
            label: "Confirmez le mot de passe",
            id: "confirmPassword",
            placeholder: "*******",
            inputType: "password",
            value: confirmPassword,
            setter: setConfirmPassword
        }
    ]

    return (
        <div>
            <FormTemplate title="inscription" fields={fields}></FormTemplate>
        </div>
    )
}