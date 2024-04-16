const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
