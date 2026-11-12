export interface FormFieldTemplate<T = string> {
    label: string,
    id: string,
    value: T,
    setter: (v: T) => void 
}