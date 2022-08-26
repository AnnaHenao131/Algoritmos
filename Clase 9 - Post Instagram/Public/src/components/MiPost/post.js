class Post extends HTMLElement {
  static get observedAttributes() {
    return ["profile", "name", "ubication", "postimg", "views", "description"];
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
    <link rel="stylesheet" href="./src/components/MiPost/style.css">
      <div class="Borde">
          <section class="header">
            <section class="headprofile">
              <img src="${this.profile}" alt="Photo Profile">
              <div class="Name">
                <h2>${this.name}</h2>
                <h>${this.ubication}</h>
              </div>
            </section>
              <img class="dos" src="./src/Img/show more.svg" alt="show more">
          </section>
        

        <section class="photo">
            <img class="tres" src="${this.postimg}" alt="">
        </section>

        <section class="icons">
          <section>
            <img class="cuatro" src="./src/Img/Corazón.svg" alt="Like">
            <img class="cinco" src="./src/Img/mensaje.svg" alt="Comment"> 
            <img class="seis" src="./src/Img/compartir.svg" alt="Share"> 
          </section>  
            <img class="ocho" src="./src/Img/Guardado.svg" alt="save"> 
        </section>

        <section class="description">
            <p class="views">${this.views} views</p>
            <p class="username"><strong>${this.name}</strong> ${this.description}</p>
        </section>
      </div>`;
  }
}

customElements.define("post-ig", Post);
export default Post;
