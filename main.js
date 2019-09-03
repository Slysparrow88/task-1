var names = ['vasa', 'pitya', 'anya', 'vera', 'alex'];

function renderList(list, block_id) {

  var block = document.querySelector(block_id);

  var html = '';

  for (var item of list) {
    html += `<li>${item}</li>`;
  }

  block.innerHTML = html;

  var form = document.querySelector('li');

  form.onclick = function () {

    alert('вы нажали на имя:' + ' ' + event.target.textContent);
  }

}
renderList(names, '#block-users');









