let toggleBtn = document.getElementById('drop_down');
let menu = document.getElementById('menu');
toggleBtn.onclick = () => {
  menu.classList.toggle('open_drop_down');
};

let form = document.getElementById('form');
// let submit = document.getElementById('submit');
function validationOfForm() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
  } else {
    let users = JSON.parse(localStorage.getItem('users'));

    users.push({
      name: name,
      email: email,
      message: message
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Thanks For You ');
  }
}

form.onsubmit = () => {
  validationOfForm();
};
