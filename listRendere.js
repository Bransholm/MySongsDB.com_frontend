
export class ListRenderer {
  constructor() {
    this.table = document.querySelector("#display-content");
  }

  // clear() {
  //   this.table.innerHTML = "";
  // }

  render(data, rendereToCall) {
    this.table.innerHTML = "";

    for (const element of data) {
      const newRender = new rendereToCall();
      const htmlElement = newRender.render(element);

      console.log(htmlElement);

      this.table.insertAdjacentHTML("beforeend", htmlElement);
    }
  }
}
