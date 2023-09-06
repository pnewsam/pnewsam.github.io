import { LitElement, unsafeCSS } from "lit";
import style from "../styles/tailwind.css?inline";

const tailwindElement = unsafeCSS(style);

export class TailwindElement extends LitElement {
  static styles = [tailwindElement, unsafeCSS(style)];
}
