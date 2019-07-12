class Menu {
  constructor(handleMount = '', arrayNames = [], classNames = {}) {
    this.handleMount = handleMount;
    this.arrayNames = arrayNames;
    this.classNames = classNames;
  }

  get(prop) {
    return this.classNames[prop];
  }

  set(prop, value) {
    this.classNames[prop] = value;
  }

  prepareQuery() {
    return document.querySelector(this.handleMount);
  }

  createElements(subLiClass, subAClass) {
    const dFragment = document.createDocumentFragment();
    const { liClass, aClass, ulSubClass } = this.classNames;
    this.arrayNames.map(({ name, items }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.className = liClass;
      a.className = aClass;
      a.innerText = name;
      a.title = name;
      li.appendChild(a);
      dFragment.appendChild(li);
      if (items) {
        const dFragment = document.createDocumentFragment();
        const ulSub = document.createElement('ul');
        ulSub.className = ulSubClass;
        items.map(subItem => {
          const liSub = document.createElement('li');
          const aSub = document.createElement('a');
          liSub.classList.add(subLiClass);
          aSub.classList.add(subAClass);
          aSub.innerText = subItem;
          aSub.title = subItem;
          liSub.appendChild(aSub);
          ulSub.appendChild(liSub);
          dFragment.appendChild(ulSub);
        });
        return li.appendChild(dFragment);
      }
    });
    return dFragment;
  }

  render(subLiClass, subAClass) {
    const renderMenu = this.createElements(subLiClass, subAClass);
    const mountHandleMenu = this.prepareQuery();
    mountHandleMenu.appendChild(renderMenu);
  }
}

export default Menu;
