"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}
