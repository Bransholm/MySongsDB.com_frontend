
export class ListRenderer {
  constructor() {
    this.table = document.querySelector("#display-content");
  }

  // clear() {
  //   this.table.innerHTML = "";
  // }

  render(dataList, renderer) {
    this.table.innerHTML = "";

    for (const element of dataList) {
      const newRender = new renderer();
      const htmlElement = newRender.render(element);

      console.log(htmlElement);

      this.table.insertAdjacentHTML("beforeend", htmlElement);
    }
  }
}
