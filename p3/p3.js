const template = `<li class="person">Leanne Graham / Romaguera-Crona / Sincere@april.biz <button>刪除</button></li>`;

function addItem(name, email, company) {
  const li = document.createElement('li');
  li.classList.add('person');
  li.innerHTML = `{{name}} / {{company}} / {{email}} <button class="btn-delete">刪除</button>`
    .replace(/{{name}}/, name)
    .replace(/{{company}}/, company)
    .replace(/{{email}}/, email);

  document.querySelector('.list').appendChild(li);
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(people) {
    for (person of people) {
      addItem(person.name, person.email, person.company.name);
    }
  })
  .catch(e => console.error(e));

document.querySelector('.list').addEventListener('click', e => {
  if (e.target.classList.contains('btn-delete')) {
    e.target.parentElement.remove();
  }
});
