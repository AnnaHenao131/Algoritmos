import * as components from "./components/components.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <post-ig profile="./src/img/imgprofile.jpg" name="mangoubicheinno" ubication="Universidad Icesi" postimg="./src/img/imgpost.jpg" views="250" description="Loving the moon"></post-ig>
        `
    }
}

customElements.define("app-container", AppContainer);