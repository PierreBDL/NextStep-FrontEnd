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
            value: name,
            setter: setName
        },
        {
            label: "Nom",
            id: "surname",
            value: surname,
            setter: setSurname
        },
        {
            label: "Courriel",
            id: "email",
            value: email,
            setter: setEmail
        },
        {
            label: "Mot de passe",
            id: "password",
            value: password,
            setter: setPassword
        },
        {
            label: "Confirmez le mot de passe",
            id: "confirmPassword",
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