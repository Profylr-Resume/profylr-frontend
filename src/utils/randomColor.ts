import { brightTailwindColors } from "@/css/colors";


export const getRandomColor = ():{color:string,five:string,one:string}=>{
    const length = brightTailwindColors.length;
    const randomIndex = Math.floor(Math.random()*length);
    return brightTailwindColors[randomIndex];
};