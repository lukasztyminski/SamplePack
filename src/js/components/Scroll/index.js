class Scroll {
  constructor(header, body, nameShort) {
    this.didScroll = true;
    this.header = document.querySelector(`.${header}`);
    this.body = document.querySelector(`${body}`);
    this.nameShort = nameShort;
  }

  makeScroll() {
    window.addEventListener('scroll', () => {
      this.didScroll = true;
    });
  }

  isOnViewPoint() {
    if (this.body.scrollTop >= 100) {
      this.header.classList.add(this.nameShort);
    } else {
      this.header.classList.remove(this.nameShort);
    }
  }

  setRender() {
    setInterval(() => {
      if (this.didScroll) {
        this.didScroll = false;
        this.isOnViewPoint();
      }
    });
  }

  render() {
    this.makeScroll();
    this.setRender();
  }
}

export default Scroll;
