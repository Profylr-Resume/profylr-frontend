
export const truncateString = (str:string,charLimit:number):string=>{

    if(str.length>charLimit){
        return str.slice(0,charLimit)+"...";
    }
    return str;
};