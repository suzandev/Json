const sectionContainer = document.getElementById("section_container");

function btn1Clicked() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function btn2Clicked() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => getSomeJson(users));
}

function getSomeJson(posts) {
  for (const user of posts) {
    // console.log(user.name);

    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <ul>
            <li>user id: ${user.id}</li>
            <li>user name: ${user.name}</li>
        </ul>
    `;
    sectionContainer.appendChild(div);
  }
}
