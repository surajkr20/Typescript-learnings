
interface Person{
    name: string,
    emailId: string,
    password: number
}

// const MyObj: Person = {
//     name : "abhinav-bhardwaj",
//     emailId : "abhinav.dev@gmail.com",
//     password : 321432
// }

const user: Person = {
    name : "suraj kumar",
    emailId : "suraj@gmailme.com",
    password : 234234,
}

const getName = (key: string) =>{
    return user["name"];
}

const getEmail = (key: string): string =>{
    return user['emailId'];
}

console.log(getEmail("suraj@gmail.com"))