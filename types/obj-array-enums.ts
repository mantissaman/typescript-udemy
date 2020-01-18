// const person0: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Diya',
//     age: 10,
//     hobbies: ["Sports", "Cooking"], // array
//     role: [2, "author"] //tuple
// };

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Diya",
  age: 10,
  hobbies: ["Sports", "Cooking"], // array
  role: [2, "author"], //tuple
  roleType: Role.ADMIN
};
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.roleType === Role.ADMIN) {
  console.log("Is Admin");
}
