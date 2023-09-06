import { html } from "lit";
import { TailwindElement } from "./TailwindElement";

export class TopNav extends TailwindElement {
  render() {
    return html`
      <header>
        <nav class="flex items-center gap-4 justify-end py-4">
          <a class="text-lg font-semibold" href="/">Home</a>
          <a class="text-lg font-semibold" href="/bookshelf/">Bookshelf</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("top-nav", TopNav);
