
export interface TemplateType{
    name:string,
    description:string,
    html:string,
    sections:[ResumeSection]
}

export interface ResumeSection {
    section:{
        _id:string
    }
    html:string
}