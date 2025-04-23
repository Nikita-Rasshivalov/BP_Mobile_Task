import { initLanguage } from "./language.js";
import { initSubscription } from "./subscription.js";
import "../css/styles.css";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initSubscription();
});
