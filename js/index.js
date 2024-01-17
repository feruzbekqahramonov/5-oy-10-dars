// CRUD => create, read, updete, delete

let students = [
    {id: 1, name: 'Vali', status: 'Ticher'},
    {id: 2, neme: 'Karim', satatus: 'Dev'},
    {id: 3, name: 'Sardor', status: 'Driver'},
    {id: 4, name: 'Ali', status: 'Programming'},
    {id: 5, name: 'Alisher', status: 'Developer'},
    {id: 6, name: 'Kamron', satatus: 'Mexanic'}
];

// create


// function createUser(nameValue, statusValue) {
//     return [
//         ...students,
//         {
//             id: students.length + 1,
//             name: nameValue,
//             status: statusValue,
//         },
//     ]
// }
// console.log(createUser('Shohjahon', 'Doctor'));


//read
// function readUser(input, key) {
//     return students.filter((value)=>value[key].toLowerCase.includes(input.toLowerCase()))
// }
// console.log(readUser('value', name));

//update
// function updateUser(idi, nemeValue, statusValue) {
//     return students.map((value)=> value.id === idi ? {...value, nemeValue, statusValue} : value);
// }

// console.log(updateUser(1, 'Eshmat', 'Driver'));

// delete  
function deleteUser(idi) {
    return students.filter((value) => value.id !== idi);
}
console.log(deleteUser(2));