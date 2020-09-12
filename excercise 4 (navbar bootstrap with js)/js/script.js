class Nav {

  constructor(root) {
    this.navItems=root.querySelectorAll(".nav-item");
    this.setEventListeners();
  }

  clickHandler(event) {
    this.deactivateItems();
    event.currentTarget.classList.add("active");
  }

  deactivateItems() {
    for (const item of this.navItems) {
      item.classList.remove("active");
    }
  }

  setEventListeners() {
    for (const item of this.navItems) {
      item.addEventListener("click", this.clickHandler.bind(this));
    }
  }
}

const navBar=new Nav(document.querySelector("header div nav"));
const navTabsBar=new Nav(document.querySelector("main div div"));
