// 把程式碼寫在這檔案裡面
const template = `<li class="food">{{foodName}} <button class="btn-delete">刪除</button></li>`;

const randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵'];

function addItem(str) {
  const li = document.createElement('li');
  li.classList.add('food');
  li.innerHTML = `{{foodName}} <button class="btn-delete">刪除</button>`.replace(
    /{{foodName}}/,
    str
  );
  document.querySelector('.food-list').appendChild(li);
}

// clear
document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.food-list').innerHTML = '';
});

// add
document.querySelector('.btn-add').addEventListener('click', e => {
  const foodName = document.querySelector('.food-input').value;
  addItem(foodName);
});

// delete
document.querySelector('.food-list').addEventListener('click', e => {
  if (e.target.classList.contains('btn-delete')) {
    e.target.parentElement.remove();
  }
});

// delete all
document.querySelector('.btn-delete-all').addEventListener('click', e => {
  document.querySelector('.food-list').innerHTML = '';
});

// random
document.querySelector('.btn-random').addEventListener('click', e => {
  const index = Math.ceil(Math.random() * 5 - 1);
  addItem(randomFoods[index]);
});
