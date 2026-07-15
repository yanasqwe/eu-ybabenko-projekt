/* Regelbasierter EU-Bot für die Kontaktseite. Beantwortet Fragen anhand von
   Schlüsselwörtern und nutzt dabei die vorhandenen Daten aus i18n.js und
   countries.js. Findet der Bot keine Antwort, verweist er auf das Formular. */

(function () {
  const I18N = window.EU_I18N;
  if (!I18N) return;

  const t = (k) => I18N.t(k, I18N.get());

  const GREET  = ["hallo", "hi", "hello", "hey", "servus", "moin", "привет", "здравствуйте", "здравствуй", "прив", "你好", "您好"];
  const THANKS = ["danke", "thanks", "thank", "спасибо", "спс", "благодарю", "谢谢", "多谢", "感谢"];

  /* Themen → ausführlicher Text aus der Chronologie */
  const TOPICS = [
    { key: "hd.1985.p", words: ["schengen", "шенген", "申根"] },
    { key: "hd.1993.p", words: ["maastricht", "маастрихт", "маастрихтский", "马斯特里赫特"] },
    { key: "hd.2002.p", words: ["euro", "währung", "currency", "евро", "валюта", "деньги", "money", "欧元", "货币"] },
    { key: "hd.2020.p", words: ["brexit", "брексит", "脱欧", "großbritannien", "britain", "uk"] },
    { key: "hd.2012.p", words: ["nobelpreis", "nobel", "нобелевская", "нобель", "诺贝尔"] },
    { key: "hd.1957.p", words: ["römische", "rom", "rome", "рим", "римские", "罗马", "ewg", "eec", "еэс"] },
    { key: "hd.1951.p", words: ["montanunion", "montan", "kohle", "stahl", "coal", "steel", "уголь", "сталь", "煤钢", "egks", "ecsc", "еоус"] },
    { key: "hd.1979.p", words: ["europawahl", "wahl", "election", "parliament", "parlament", "выборы", "议会", "选举"] },
    { key: "hd.2004.p", words: ["erweiterung", "osterweiterung", "enlargement", "расширение", "扩盟", "东扩"] },
  ];

  /* Fakten → vorformulierte Bot-Antwort */
  const FACTS = [
    { key: "bot.a.founded", words: ["gegründet", "gründung", "founded", "основан", "основание", "создан", "成立", "建立"] },
    { key: "bot.a.members", words: ["mitglieder", "mitglied", "mitgliedsländer", "länder", "members", "member", "countries", "стран", "страны", "участниц", "成员", "成员国"] },
    { key: "bot.a.pop",     words: ["einwohner", "bevölkerung", "population", "inhabitants", "население", "жителей", "人口"] },
    { key: "bot.a.lang",    words: ["amtssprachen", "sprache", "sprachen", "language", "languages", "язык", "языки", "语言", "官方语言"] },
  ];

  function reply(raw) {
    const lang = I18N.get();
    const q = raw.toLowerCase();
    const tokens = q.split(/[^0-9a-zà-ÿа-яё一-鿿]+/i).filter(Boolean);
    const hasWord = (arr) => arr.some((w) => tokens.includes(w));

    if (hasWord(GREET)) return t("bot.greeting");
    if (hasWord(THANKS)) return t("bot.thanks");

    // Land erkennen (Name in einer der vier Sprachen)
    const info = window.EU_COUNTRY_INFO;
    for (const code in I18N.countries) {
      const c = I18N.countries[code];
      for (const l of ["de", "en", "ru", "zh"]) {
        const n = (c[l] || "").toLowerCase();
        if (n && q.includes(n)) {
          const name = c[lang] ?? c.de;
          const ci = info && info[code];
          let ans = name + ": " + I18N.t("land.since", lang) + " " + (ci ? ci.year : "?") + ".";
          if (ci) {
            const b = ci[lang] ?? ci.de;
            if (b && b.rel) ans += "\n\n" + b.rel;
          }
          return ans;
        }
      }
    }

    for (const f of FACTS) if (hasWord(f.words)) return I18N.t(f.key, lang);
    for (const topic of TOPICS) if (hasWord(topic.words)) return I18N.t(topic.key, lang);

    return t("bot.fallback");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const log = document.getElementById("botLog");
    const form = document.getElementById("botForm");
    const input = document.getElementById("botText");
    if (!log || !form || !input) return;

    const add = (text, who) => {
      const el = document.createElement("div");
      el.className = "bot-msg " + who;
      el.textContent = text;
      log.appendChild(el);
      log.scrollTop = log.scrollHeight;
    };

    add(t("bot.greeting"), "bot");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      add(text, "user");
      input.value = "";
      const answer = reply(text);
      setTimeout(() => add(answer, "bot"), 250);
    });
  });
})();
