class MyTinder extends HTMLElement {
  static get observedAttributes() {
    return ["imgprof", "name", "age", "caption"];
  }

  constructor() {
    super(); 
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/Tinder/style.css">
   
    <section class="cotainer">
      <section class="content">
        <img src="${this.imgprof}" alt="Profile">
        <section class="user">
            <section class="name">
              <h2>${this.name}</h2>
              <section>
                <p>, ${this.age}</p>
              </section>
            </section>
            <p class="caption">${this.caption}</p>
        </section>
        <section class="button">
          <my-counter countimg="./images/like.png"></my-counter>
          <my-counter countimg="./images/wrong.png"></my-counter>
        </section>
      </section>   
    </section>
        `;
  }
}

customElements.define("my-tinder", MyTinder);
export default MyTinder;
