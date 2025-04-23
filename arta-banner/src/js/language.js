import de from "../assets/languages/de.json";
import en from "../assets/languages/en.json";
import es from "../assets/languages/es.json";
import fr from "../assets/languages/fr.json";
import ja from "../assets/languages/ja.json";
import pt from "../assets/languages/pt.json";
import { adjustFontSize } from "./utills.js";

const translations = {
  de,
  en,
  es,
  fr,
  ja,
  pt,
};

const supportedLanguages = ["de", "en", "es", "fr", "ja", "pt"];
const defaultLanguage = "en";

function adjustFontSizeForLongLanguages(lang) {
  switch (lang) {
    case "de":
    case "fr":
      const selector = "[data-i18n]";
      adjustFontSize(selector);
      break;
    default:
      break;
  }
}

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawLang = urlParams.get("lang");
  const langParam = typeof rawLang === "string" ? rawLang.toLowerCase() : null;

  const isValid = (code) =>
    typeof code === "string" &&
    /^[a-z]{2}$/.test(code) &&
    supportedLanguages.includes(code);

  if (isValid(langParam)) {
    return langParam;
  }

  const navRaw = navigator.language || navigator.userLanguage || "";
  const navLang = navRaw.split("-")[0].toLowerCase();
  if (isValid(navLang)) {
    return navLang;
  }

  return defaultLanguage;
}

function applyTranslations(lang) {
  const translation = translations[lang];
  if (!translation) return;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translated = translation[key];

    if (!translated) return;

    const vars = element.dataset.i18nVars
      ? JSON.parse(element.dataset.i18nVars)
      : {};

    const finalText = Object.keys(vars).reduce((text, varKey) => {
      return text.replace(
        new RegExp(`{{\\s*${varKey}\\s*}}`, "g"),
        vars[varKey]
      );
    }, translated);

    element.innerHTML = finalText;
  });

  document.documentElement.lang = lang;
  adjustFontSizeForLongLanguages(lang);
}

export function initLanguage() {
  const lang = getLanguage();
  applyTranslations(lang);
}
