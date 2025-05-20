
// 1. partial type

// type User = {
//     name: string;
//     email: string
// }

// type User2 = Partial<User>;

// 2. Required type

// type User = {
//     name?: string;
//     email: string
// }

// type User2 = Required<User>;

// const user: Required<User> = {
//     name: "surajkr",
//     email: "surajme@gmail.com"
// }

// console.log(user)

// 3. Readonly

type Person1 = {
    name: string;
    email: string;
}

const user1: Readonly<Person> = {
    name : "suraj-bhardwaj",
    emailId: "surajkumar@gmail.com",
    password : 12443
}

user1.name = "surajkr"; // not assign because this is only readonly 