export interface FormFieldTemplate<T = string> {
    label: string,
    id: string,
    inputType: string
    placeholder?: string
    value: T,
    setter: (v: T) => void 
}