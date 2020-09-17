export default class View {
  constructor(container) {
    this.container = container;
    this.saveProduct = null;
    this.updateProduct = null;
    this.showForm = this.showForm.bind(this);
    this.deleteError = this.deleteError.bind(this);
  }

  getMark(data) {
    if (document.querySelector('.products')) {
      document.querySelector('.products').remove();
    }
    const products = document.createElement('div');
    products.classList.add('products');
    products.innerHTML = `
      <header class="header">
        <div>Products</div>
        <button type="button" id="new-product">+</button>
       </header>
      <section>
        ${this.table(data).outerHTML} 
      </section>`;

    this.container.appendChild(products);
  }

  showForm(elem = { name: '', cost: '', id: 999 }) {
    const { name, cost, id } = elem;

    const formContainer = document.createElement('div');
    formContainer.classList.add('container-form');
    formContainer.innerHTML = `
   <form id="form" data-id="${id}">
      <div class="name">
        <label for="name">Name</label>
        <input id="name" class="input" type="text" value="${name}" placeholder="Text name"></input>
      </div>
      <div class="cost">
        <label for="cost">Cost</label>
        <input id="cost" class="input" type="text" value="${cost}" placeholder="Text cost"></input>
      </div>
      <div class="buttons-firm">
        <button id="button-save" type="submit">Save</button>
        <button id="button-reset" type="reset">Cancel</button>
      </div>
    </form>`;

    this.container.querySelector('.products').appendChild(formContainer);
    document.getElementById('form').addEventListener('submit', (event) => {
      if (elem.id === 999) {
        this.saveProduct(event);
      } else {
        this.updateProduct(event);
      }
    });
    document.getElementById('form').addEventListener('reset', () => {
      this.container.querySelector('.container-form').remove();
    });

    document.getElementById('name').addEventListener('input', () => {
      this.deleteError();
    });

    document.getElementById('cost').addEventListener('input', () => {
      this.deleteError();
    });
  }
  /* eslint-disable */
  addListener(callbackNewProducts, callbackDeleteProducts) {
    const button = document.getElementById('new-product');
    button.addEventListener('click', () => {
      callbackNewProducts();
    });

    document.querySelector('tbody').addEventListener('click', (event) => {
      callbackDeleteProducts(event);
    });
  }

  getProduct(data) {
    this.tbody = document.createElement('tbody');
    data.forEach((elem) => {
      const tr = document.createElement('tr');
      tr.id = elem.id;
      const thName = document.createElement('th');
      const thCost = document.createElement('th');
      const thActions = document.createElement('th');
      thActions.classList.add('th-actions');

      thName.textContent = elem.name;
      thCost.textContent = elem.cost;
      thActions.innerHTML = `
        <div  class="action-update">✎</div>
        <div  class="action-delete">X</div>
        `;
      tr.append(thName, thCost, thActions);
      this.tbody.appendChild(tr);
    });
    return this.tbody;
  }

  table(products) {
    const table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = `
    <thead>
        <tr>
            <th class="table-head">Name</th>
            <th class="table-head">Cost</th>
            <th class="table-head">Actions</th>
        </tr>
    </thead>
    ${this.getProduct(products).outerHTML}
    `;
    return table;
  }

  showError(target, text) {
    target.focus();
    const error = document.createElement('div');
    error.dataset.id = 'error';
    error.className = 'form-error';
    error.textContent = `${text}`;

    document.body.appendChild(error);
    const { top, left } = target.getBoundingClientRect();
    error.style.top = `${window.scrollY + top - target.offsetHeight / 2 + error.offsetHeight}px`;
    error.style.left = `${window.scrollX + left}px`;
  }

  deleteError() {
    if (document.querySelector('.form-error')) {
      document.querySelector('.form-error').remove();
    }
  }
}
