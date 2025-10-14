const main = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  const UsersInfo = data.users.map((user) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    university: user.university,
    image: user.image,
  }));

  const usersContainer = document.getElementById("users");
  UsersInfo.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <p>${user.firstName}</p>
      <p>${user.lastName}</p>
    <p>${user.email}</p>
        <p>${user.university}</p>
      <img src="${user.image}" width="100" />
    `;
    usersContainer.appendChild(userDiv);
  });
};

main();

//   console.log(UsersInfo);
//   const usersContainer = document.getElementById("users");
//   const userContainer = document.getElementById("div");
//   userContainer.innerHTML = `
//   <p> ${data.users[0].firstName} </p>
//   <p> ${data.users[0].lastName} </p>
//   <p> ${data.users[0].image} </p>`;
//   usersContainer.appendChild(userContainer);
// };
// UsersInfo.forEach(main);
// main();

// main();
// const data = {
//   users: [{ id: 1, username: "John", email: "johndoe@.com" }],
// };
