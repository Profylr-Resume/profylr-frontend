
export interface TemplateType{
    _id?:string,
    name:string,
    description:string,
    html:string,
    sections:ResumeSection[]
}
// [ResumeSection] this will only allow one lement in that array
export interface ResumeSection {
    section:string
    html:string
}