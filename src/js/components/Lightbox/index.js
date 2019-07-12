class Lightbox {
  constructor(box = '', modal = '', { hidden, large, close, body } = classes || {}) {
    this.box = box;
    this.modal = modal;
    this.hidden = hidden;
    this.large = large;
    this.close = close;
    this.body = body;
  }

  closeModal() {
    const close = document.querySelector(`.${this.close}`);
    const modal = document.querySelector(`.${this.modal}`);
    const body = document.querySelector(this.body);
    close.addEventListener('click', () => {
      modal.classList.add(this.hidden);
      body.classList.remove(this.hidden);
    });
  }

  prepareImages() {
    const boxes = document.querySelectorAll(`.${this.box}`);
    const modal = document.querySelector(`.${this.modal}`);
    const body = document.querySelector(this.body);
    const largeImg = document.querySelector(`.${this.large}`);
    boxes.forEach((box, index) => {
      box.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.remove(this.hidden);
        body.classList.add(this.hidden);
        const urls = box.firstElementChild.src.split('.');
        const ext = 'big.jpg';
        largeImg.src = `${urls[0]}${ext}`;
      });
    });
  }

  render() {
    this.prepareImages();
    this.closeModal();
  }
}

export default Lightbox;
