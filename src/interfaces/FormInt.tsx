export interface FormFieldTemplate {
    label: string,
    id: string,
    inputType: string
    placeholder?: string
    value: any,
    setter: (v: any) => void 
    isRequire: boolean
}