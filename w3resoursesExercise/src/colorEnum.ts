enum Color{
    RED='',GREEN ="green",WHITE='white',BLUE = "blue"
}
const selectedColor:Color = Color.RED

type contact = {
    name:string,
    gendar:string,
    age:number,
    getAll:()=>string
}
class C1{}
abstract class C2 extends C1{
    // constructor(){
    //     super()
    // }
    getit():string{
        return"Here I am"
    }
}
abstract class ABC1{}
class Myclass extends C2 implements C2, contact{
    name= "string"
    gendar= "string"
    age= 3
    getAll(){return ""}
}
