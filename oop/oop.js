// let obj={
//     name:"ELnare",
//     show:function(){
//         return this.name;
//     }
// };
// console.log(obj.show());
// // properti
// // method
// class Book{

// }
// function createObject(_ad,_soyad){
//     return{
//         name:_ad,
//         surname:_soyad,
//         show:function(){
//             return `${this.name} salam`
//         }
//     }
// }
// let obj=createObject("Elnare","Ismayilova");
// console.log(obj);

// class Telebe{
//     constructor(_name,_surname,_email){
//         this.name=_name
//         this.surname=_surname
//         this.email=_email
//     }
//     show(){
//         return `${this.name}`
//     }
// }
// class Muellim{
//     constructor(_name,_surname,_email,_phone,_pro){
//         this.name=_name
//         this.surname=_surname
//         this.email=_email
//         this.phone=_phone
//         this.pro=_pro
//     }
//     show(){
//         return `${this.name}`
//     }
// }
// class Mentor{
//     constructor(_name,_surname,_email,_group,_pro){
//         this.name=_name
//         this.surname=_surname
//         this.email=_email
//         this.group=_group
//         this.pro=_pro
//     }
//     show(){
//         return `${this.name}`
//     }
// }

class User{
    constructor(_name,_surname,_email){
        this.name=_name
        this.surname=_surname
        this.email=_email
    }
    show(){
        return `${this.name}`
    }
}
class Students extends User{
    constructor(_name,_surname,_email,_phone){
        super(_name,_surname,_email)
        this.phone=_phone
    }
    showDetails(){
        return `${this.phone}`
    }
}
let user=new User("Adam","test","test");
let student=new Students("Adam","test","test",);