import {type FormFieldTemplate} from '../interfaces/FormInt'

interface FormTemplateProps {
    title: string
    fields: FormFieldTemplate[]
}

export default function FormTemplate ({title, fields}: FormTemplateProps) {
    return (
        <div>
            <h1>{title[0].toUpperCase() + title.slice(1)}</h1>

            <form action="">
                {
                    fields.map (field => (
                        <div>
                            <label htmlFor={field.id}>{field.label}</label>
                            <input type="text" id={field.id} value={field.value} onChange={(e) => field.setter(e.target.value)}/>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}