
const serverApi = "https://8jrkn4-8080.csb.app";

// const getData = async() => {
//     const response = await fetch(`${serverApi}/users`);
//     console.log(response);
//     console.log("hello");
// }

// fetch(`${serverApi}/users`).then((response) => {
//     console.log(response);
//     //response.json() -> return data -> parse Json become object, arr
//     //response.text() -> return text
//     return response.json();
// })
// .then((users) => {
//     console.log(users);
// })

// const getUser = async (id) => {
//   const response = await fetch(`${serverApi}/users/${id}`);
//   const user = await response.json();
//   console.log(user);
// };

// getUser(2);

// const postUser = async (data) => {
//     const response = await fetch(`${serverApi}/users`, {
//         method: 'POST',
//         //headers là thông tin đi kèm của req và res
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
// }

// postUser({
//     name: 'User 3',
//     email: "user3@gmail.com"
// })

/*Update */

// const updateUser = async (data, id) => {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     console.log(response);
// }

// updateUser(
//     {
//         name: "User 11",
//         email: "user11@gmail.com",
//     },
//     8,
// )

/* Delete*/

// const deleteUser = async (id) => {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//         method: "DELETE",
//     });
//     console.log(response);
// }
// deleteUser(8);


// const deleteUser = async(id) => {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//         method: "DELETE",
//     });
//     console.log(response);
// }

// deleteUser(5);
