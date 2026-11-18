import { type FormFieldTemplate } from '../interfaces/FormInt'

interface FormTemplateProps {
    title: string
    fields: FormFieldTemplate[]
}

export default function FormTemplate({ title, fields }: FormTemplateProps) {
    return (
        <div className='min-h-screen px-4 py-10 bg-[#F5F4EF] flex w-full items-center justify-center'>
            <div className='w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl border border-gray-200'>
                <h1 className='text-2xl sm:text-3xl font-bold text-center'>{title[0].toUpperCase() + title.slice(1).toLowerCase()}</h1>

                <form action="" className="flex flex-col gap-4 my-6 min-w-full">
                    {
                        fields.map(field => (
                            <div key={field.id} className='flex flex-col gap-2'>
                                <label className='text-[16px] font-semibold text-black' htmlFor={field.id}>{field.label}</label>
                                <input className={`min-w-full border ${field.inputType === 'file' ? "hover:cursor-pointer hover:ring-1 hover:ring-[#4F46E5]" : null} border-gray-300 bg-white rounded-xl text-sm py-3 px-4`}
                                    type={field.inputType}
                                    id={field.id}
                                    {...(field.inputType !== 'file' && { value: field.value })}
                                    onChange={(e) => {
                                        if (field.inputType === 'file') {
                                            const files = (e.target as HTMLInputElement).files;
                                            field.setter(files && files.length > 0 ? files[0] : null);
                                        } else {
                                            field.setter(e.target.value);
                                        }
                                    }}
                                    placeholder={field.placeholder ? field.placeholder : ""}
                                    required={field.isRequire} />
                            </div>
                        ))
                    }

                    <button className='bg-[#4F46E5] mt-2 hover:bg-[#6660e4] hover:cursor-pointer p-2.5 px-3 text-white rounded-lg'>
                        {title.toLowerCase() === "inscription" ? "S'inscrire" : "Se connecter"}
                    </button>

                    <div className='flex flex-row items-center gap-4'>
                        <div className='w-full bg-gray-300 h-0.25'></div>
                        <p>ou</p>
                        <div className='w-full bg-gray-300 h-0.25'></div>
                    </div>

                    <button className='bg-white hover:bg-slate-100 hover:cursor-pointer border border-gray-300 p-2.5 px-3 text-black rounded-lg'>
                        {title.toLowerCase() === "inscription" ? "Se connecter" : "S'inscrire"}
                    </button>
                </form>
            </div>
        </div>
    )
}