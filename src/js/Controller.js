export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.saveProduct = this.saveProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.action = this.action.bind(this);
    this.id = 1;
  }

  start() {
    this.view.getMark(this.model.products);
    this.view.addListener(this.view.showForm, this.action);
    this.view.saveProduct = this.saveProduct;
    this.view.updateProduct = this.updateProduct;
  }

  checkValidity(name, cost) {
    const nameValue = name.value.trim();
    const costValue = Number(cost.value.trim());
    if (!nameValue) {
      this.view.showError(name, 'Text name in field');
      return false;
    } if (!costValue || costValue <= 0) {
      this.view.showError(cost, 'Text right cost in field');
      return false;
    }
    return true;
  }

  saveProduct(event) {
    event.preventDefault();
    const { name, cost } = event.target;
    const isValid = this.checkValidity(name, cost);
    if (isValid) {
      this.model.save({
        name: name.value,
        cost: cost.value,
        id: this.id,
      });
      this.id += 1;
      this.start();
    }
  }

  action(event) {
    if (event.target.classList.contains('action-delete')) {
      const { id } = event.target.closest('tr');
      this.model.delete(id);
      this.start();
    } else if (event.target.classList.contains('action-update')) {
      const { id } = event.target.closest('tr');
      const elem = this.model.find(id);
      this.view.showForm(elem);
    }
  }

  updateProduct(event) {
    event.preventDefault();
    const { name, cost, dataset } = event.target;
    const isValid = this.checkValidity(name, cost);
    if (isValid) {
      this.model.update({
        name: name.value,
        cost: cost.value,
        id: Number(dataset.id),
      });
      this.start();
    }
  }
}
