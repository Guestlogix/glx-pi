import * as i18n from "i18next"
import { reactI18nextModule } from "react-i18next"

// translations
const resources = {
  en: require("./en/translation.json"),
  fr: require("./fr/translation.json"),
}

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
