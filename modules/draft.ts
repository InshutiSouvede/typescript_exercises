const myArry = []
const voider = (callback:()=>void)=>{
   console.log("there you go",callback);   
   throw new Error("error")
}
// function voider(callback:()=>void){
//     console.log("there you go",callback);   
//     throw new Error("error")
// }
voider(()=>myArry.push(5))