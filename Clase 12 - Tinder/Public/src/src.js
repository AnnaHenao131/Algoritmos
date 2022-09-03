import * as components from "./components/components.js"
import data from "./components/data.js";

console.log(data);

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        data.forEach(element => {
            this.shadowRoot.innerHTML += `
            <section>
            <my-tinder imgprof="${element.imgprof}" name="${element.name}" age="${element.age}" caption="${element.caption}"></my-tinder>
            `;
        });
    }
}

customElements.define("app-container", AppContainer);