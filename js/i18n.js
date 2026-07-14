/* ============================================================
   i18n — Übersetzungen für DE / EN / RU / ZH
   Standardsprache: Deutsch. Auswahl wird in localStorage gespeichert.
   Verwendung im HTML:  <element data-i18n="key">…</element>
   Für HTML-Inhalt:     <element data-i18n-html="key">…</element>
   ============================================================ */

const LANGS = {
  de: { cc: "de", name: "Deutsch" },
  en: { cc: "gb", name: "English" },
  ru: { cc: "ru", name: "Русский" },
  zh: { cc: "cn", name: "中文" },
};

/* Ländernamen für das Bevölkerungsdiagramm */
const COUNTRY_NAMES = {
  DE: { de: "Deutschland", en: "Germany",     ru: "Германия",    zh: "德国" },
  FR: { de: "Frankreich",  en: "France",      ru: "Франция",     zh: "法国" },
  IT: { de: "Italien",     en: "Italy",       ru: "Италия",      zh: "意大利" },
  ES: { de: "Spanien",     en: "Spain",       ru: "Испания",     zh: "西班牙" },
  PL: { de: "Polen",       en: "Poland",      ru: "Польша",      zh: "波兰" },
  RO: { de: "Rumänien",    en: "Romania",     ru: "Румыния",     zh: "罗马尼亚" },
  NL: { de: "Niederlande", en: "Netherlands", ru: "Нидерланды",  zh: "荷兰" },
  BE: { de: "Belgien",     en: "Belgium",     ru: "Бельгия",     zh: "比利时" },
  CZ: { de: "Tschechien",  en: "Czechia",     ru: "Чехия",       zh: "捷克" },
  SE: { de: "Schweden",    en: "Sweden",      ru: "Швеция",      zh: "瑞典" },
  PT: { de: "Portugal",    en: "Portugal",    ru: "Португалия",  zh: "葡萄牙" },
  GR: { de: "Griechenland",en: "Greece",      ru: "Греция",      zh: "希腊" },
  HU: { de: "Ungarn",      en: "Hungary",     ru: "Венгрия",     zh: "匈牙利" },
  AT: { de: "Österreich",  en: "Austria",     ru: "Австрия",     zh: "奥地利" },
  BG: { de: "Bulgarien",   en: "Bulgaria",    ru: "Болгария",    zh: "保加利亚" },
  DK: { de: "Dänemark",    en: "Denmark",     ru: "Дания",       zh: "丹麦" },
  FI: { de: "Finnland",    en: "Finland",     ru: "Финляндия",   zh: "芬兰" },
  SK: { de: "Slowakei",    en: "Slovakia",    ru: "Словакия",    zh: "斯洛伐克" },
  IE: { de: "Irland",      en: "Ireland",     ru: "Ирландия",    zh: "爱尔兰" },
  HR: { de: "Kroatien",    en: "Croatia",     ru: "Хорватия",    zh: "克罗地亚" },
  LT: { de: "Litauen",     en: "Lithuania",   ru: "Литва",       zh: "立陶宛" },
  SI: { de: "Slowenien",   en: "Slovenia",    ru: "Словения",    zh: "斯洛文尼亚" },
  LV: { de: "Lettland",    en: "Latvia",      ru: "Латвия",      zh: "拉脱维亚" },
  EE: { de: "Estland",     en: "Estonia",     ru: "Эстония",     zh: "爱沙尼亚" },
  CY: { de: "Zypern",      en: "Cyprus",      ru: "Кипр",        zh: "塞浦路斯" },
  LU: { de: "Luxemburg",   en: "Luxembourg",  ru: "Люксембург",  zh: "卢森堡" },
  MT: { de: "Malta",       en: "Malta",       ru: "Мальта",      zh: "马耳他" },
};

const I18N_DICT = {
  /* ---------- Navigation & allgemein ---------- */
  "nav.home":     { de: "Startseite",   en: "Home",        ru: "Главная",     zh: "首页" },
  "nav.chrono":   { de: "Chronologie",  en: "Timeline",    ru: "Хронология",  zh: "大事记" },
  "nav.influence":{ de: "EU & Welt",    en: "EU & World",  ru: "ЕС и мир",    zh: "欧盟与世界" },
  "nav.contact":  { de: "Kontakt",      en: "Contact",     ru: "Контакт",     zh: "联系" },

  "cta.explore":  { de: "Geschichte entdecken", en: "Explore history", ru: "Изучить историю", zh: "探索历史" },
  "cta.contact":  { de: "Frage stellen",        en: "Ask a question",  ru: "Задать вопрос",   zh: "提问" },

  "search.ph":    { de: "Schlüsselwort", en: "Keyword", ru: "Ключевое слово", zh: "关键词" },
  "search.none":  { de: "Keine Treffer", en: "No results", ru: "Ничего не найдено", zh: "无结果" },

  /* ---------- Footer ---------- */
  "footer.tagline": {
    de: "Ein Schulprojekt über die Europäische Union — ihre Geschichte, ihre Länder und ihr Einfluss auf die Welt.",
    en: "A school project about the European Union — its history, its countries and its influence on the world.",
    ru: "Школьный проект о Европейском союзе — его история, страны и влияние на мир.",
    zh: "关于欧洲联盟的学校项目——它的历史、成员国及其对世界的影响。",
  },
  "footer.sources":  { de: "Offizielle Quellen", en: "Official sources", ru: "Официальные источники", zh: "官方来源" },
  "footer.legal":    { de: "Rechtliches",        en: "Legal",            ru: "Правовое",              zh: "法律信息" },
  "footer.agb":      { de: "AGB",                 en: "Terms",            ru: "Условия (AGB)",         zh: "条款" },
  "footer.privacy":  { de: "Datenschutz",        en: "Privacy Policy",   ru: "Конфиденциальность",    zh: "隐私政策" },
  "footer.imprint":  { de: "Impressum",          en: "Imprint",          ru: "Импрессум",             zh: "版本说明" },
  "footer.rights":   { de: "Schulprojekt · Keine offizielle Website der EU.",
                       en: "School project · Not an official EU website.",
                       ru: "Школьный проект · Не является официальным сайтом ЕС.",
                       zh: "学校项目 · 非欧盟官方网站。" },
  "src.eu.d":   { de: "Offizielles Portal der EU", en: "Official EU portal", ru: "Официальный портал ЕС", zh: "欧盟官方门户" },
  "src.ep.d":   { de: "Europäisches Parlament",    en: "European Parliament", ru: "Европейский парламент", zh: "欧洲议会" },
  "src.es.d":   { de: "Eurostat — Statistikamt",   en: "Eurostat — statistics", ru: "Евростат — статистика", zh: "欧盟统计局" },

  /* ============================================================
     STARTSEITE
     ============================================================ */
  "home.badge":    { de: "27 Länder · 1 Union", en: "27 countries · 1 Union", ru: "27 стран · 1 союз", zh: "27个国家 · 1个联盟" },
  "home.title1":   { de: "Die",        en: "The",        ru: "",            zh: "" },
  "home.titleGrad":{ de: "Europäische Union", en: "European Union", ru: "Европейский союз", zh: "欧洲联盟" },
  "home.subtitle": {
    de: "Ein einzigartiger Zusammenschluss europäischer Staaten — für Frieden, Freiheit und Wohlstand. Entdecke ihre Geschichte, ihre Mitglieder und ihren weltweiten Einfluss.",
    en: "A unique union of European states — for peace, freedom and prosperity. Discover its history, its members and its global influence.",
    ru: "Уникальное объединение европейских государств — ради мира, свободы и благополучия. Узнай его историю, страны-участницы и влияние на весь мир.",
    zh: "欧洲国家的独特联盟——为了和平、自由与繁荣。探索它的历史、成员国及其在全球的影响力。",
  },
  "home.flagCaption": { de: "Die Flagge der Europäischen Union — zwölf goldene Sterne auf blauem Grund.", en: "The flag of the European Union — twelve golden stars on a blue field.", ru: "Флаг Европейского союза — двенадцать золотых звёзд на синем фоне.", zh: "欧洲联盟旗帜——蓝底上的十二颗金色星星。" },
  "home.factsEyebrow": { de: "Die EU in Zahlen", en: "The EU in numbers", ru: "ЕС в цифрах", zh: "数字中的欧盟" },
  "home.factsTitle":   { de: "Auf einen Blick", en: "At a glance", ru: "Коротко о главном", zh: "一目了然" },

  "fact.founded.n":  { de: "1993", en: "1993", ru: "1993", zh: "1993" },
  "fact.founded.l":  { de: "Gegründet", en: "Founded", ru: "Основан", zh: "成立" },
  "fact.founded.d":  { de: "Vertrag von Maastricht", en: "Treaty of Maastricht", ru: "Маастрихтский договор", zh: "《马斯特里赫特条约》" },
  "fact.members.n":  { de: "27", en: "27", ru: "27", zh: "27" },
  "fact.members.l":  { de: "Mitgliedsländer", en: "Member states", ru: "Стран-участниц", zh: "成员国" },
  "fact.members.d":  { de: "nach dem Brexit 2020", en: "after Brexit in 2020", ru: "после Brexit в 2020", zh: "2020年英国脱欧后" },
  "fact.pop.n":      { de: "449 Mio.", en: "449 M", ru: "449 млн", zh: "4.49亿" },
  "fact.pop.l":      { de: "Einwohner", en: "Inhabitants", ru: "Жителей", zh: "居民" },
  "fact.pop.d":      { de: "gemeinsamer Binnenmarkt", en: "single market", ru: "единый рынок", zh: "统一大市场" },
  "fact.lang.n":     { de: "24", en: "24", ru: "24", zh: "24" },
  "fact.lang.l":     { de: "Amtssprachen", en: "Official languages", ru: "Офиц. языков", zh: "官方语言" },
  "fact.lang.d":     { de: "20 Länder nutzen den Euro", en: "20 countries use the Euro", ru: "20 стран используют евро", zh: "20国使用欧元" },

  "home.foundNote": {
    de: "Die EU in ihrer heutigen Form entstand 1993 durch den Vertrag von Maastricht. Ihre Wurzeln reichen aber weiter zurück: 1951 zur Montanunion (EGKS) und 1957 zu den Römischen Verträgen (EWG).",
    en: "The EU in its present form was created in 1993 by the Treaty of Maastricht. Its roots go back further: to the Coal and Steel Community in 1951 and the Treaties of Rome in 1957.",
    ru: "ЕС в его нынешнем виде возник в 1993 году благодаря Маастрихтскому договору. Но его корни глубже: Европейское объединение угля и стали (1951) и Римские договоры (1957).",
    zh: "现今形式的欧盟于1993年由《马斯特里赫特条约》创立。但其根源更早：1951年的欧洲煤钢共同体和1957年的《罗马条约》。",
  },

  "chart.eyebrow": { de: "Vergleich der Mitgliedsländer", en: "Comparing member states", ru: "Сравнение стран-участниц", zh: "成员国比较" },
  "chart.title":   { de: "Bevölkerung der EU-Länder", en: "Population of EU countries", ru: "Население стран ЕС", zh: "欧盟各国人口" },
  "chart.sub":     { de: "Einwohnerzahl in Millionen (gerundet).", en: "Number of inhabitants in millions (rounded).", ru: "Число жителей в миллионах (округлено).", zh: "居民数量（百万，四舍五入）。" },
  "chart.legendL": { de: "Bewege die Maus über eine Zeile", en: "Hover over a row", ru: "Наведи курсор на строку", zh: "将鼠标悬停在某一行上" },
  "chart.legendR": { de: "Angaben in Millionen", en: "Figures in millions", ru: "Данные в миллионах", zh: "单位：百万" },

  /* ============================================================
     CHRONOLOGIE
     ============================================================ */
  "chrono.title":  { de: "EU Chronologie", en: "EU Timeline", ru: "Хронология ЕС", zh: "欧盟大事记" },
  "chrono.title1": { de: "EU", en: "EU", ru: "ЕС", zh: "欧盟" },
  "chrono.titleGrad": { de: "Chronologie", en: "Timeline", ru: "Хронология", zh: "大事记" },
  "chrono.lead": {
    de: "Von der Nachkriegszeit bis heute — die wichtigsten Meilensteine auf dem Weg zur Europäischen Union.",
    en: "From the post-war era to today — the key milestones on the road to the European Union.",
    ru: "От послевоенного времени до наших дней — ключевые вехи на пути к Европейскому союзу.",
    zh: "从战后时期到今天——通往欧洲联盟道路上的重要里程碑。",
  },
  "chrono.scrollHint": { de: "← Zeitstrahl horizontal scrollen →", en: "← Scroll the timeline horizontally →", ru: "← Прокрути ленту времени по горизонтали →", zh: "← 横向滚动时间轴 →" },
  "chrono.detailsTitle": { de: "Die Ereignisse im Detail", en: "The events in detail", ru: "События подробнее", zh: "事件详解" },
  "chrono.more": { de: "Mehr erfahren", en: "Read more", ru: "Подробнее", zh: "了解更多" },

  /* Timeline-Knoten (kurz) */
  "ev.1951.t": { de: "Montanunion", en: "Coal & Steel Community", ru: "Объединение угля и стали", zh: "煤钢共同体" },
  "ev.1951.s": { de: "6 Staaten bündeln Kohle & Stahl.", en: "6 states pool coal & steel.", ru: "6 государств объединяют уголь и сталь.", zh: "6国联合煤炭与钢铁。" },
  "ev.1957.t": { de: "Römische Verträge", en: "Treaties of Rome", ru: "Римские договоры", zh: "罗马条约" },
  "ev.1957.s": { de: "Gründung der EWG.", en: "The EEC is founded.", ru: "Создание ЕЭС.", zh: "欧洲经济共同体成立。" },
  "ev.1979.t": { de: "1. Europawahl", en: "1st European election", ru: "Первые выборы в ЕП", zh: "首次欧洲议会选举" },
  "ev.1979.s": { de: "Direktwahl des Parlaments.", en: "Direct election of Parliament.", ru: "Прямые выборы парламента.", zh: "议会直接选举。" },
  "ev.1985.t": { de: "Schengen", en: "Schengen", ru: "Шенген", zh: "申根" },
  "ev.1985.s": { de: "Offene Grenzen in Europa.", en: "Open borders in Europe.", ru: "Открытые границы в Европе.", zh: "欧洲开放边界。" },
  "ev.1993.t": { de: "Vertrag v. Maastricht", en: "Treaty of Maastricht", ru: "Маастрихтский договор", zh: "马斯特里赫特条约" },
  "ev.1993.s": { de: "Die EU wird gegründet.", en: "The EU is founded.", ru: "Основание ЕС.", zh: "欧盟成立。" },
  "ev.2002.t": { de: "Euro-Bargeld", en: "Euro cash", ru: "Наличные евро", zh: "欧元现金" },
  "ev.2002.s": { de: "Scheine & Münzen kommen.", en: "Notes & coins introduced.", ru: "Появляются купюры и монеты.", zh: "纸币与硬币流通。" },
  "ev.2004.t": { de: "Große Erweiterung", en: "Big enlargement", ru: "Большое расширение", zh: "大扩盟" },
  "ev.2004.s": { de: "10 neue Länder treten bei.", en: "10 new countries join.", ru: "Присоединяются 10 стран.", zh: "10个新国家加入。" },
  "ev.2012.t": { de: "Friedensnobelpreis", en: "Nobel Peace Prize", ru: "Нобелевская премия мира", zh: "诺贝尔和平奖" },
  "ev.2012.s": { de: "Für 60 Jahre Frieden.", en: "For 60 years of peace.", ru: "За 60 лет мира.", zh: "表彰60年和平。" },
  "ev.2020.t": { de: "Brexit", en: "Brexit", ru: "Brexit", zh: "英国脱欧" },
  "ev.2020.s": { de: "Großbritannien verlässt die EU.", en: "The UK leaves the EU.", ru: "Великобритания покидает ЕС.", zh: "英国退出欧盟。" },

  /* Detailtexte */
  "hd.1951.t": { de: "Die Montanunion (EGKS)", en: "The Coal and Steel Community (ECSC)", ru: "Объединение угля и стали (ЕОУС)", zh: "欧洲煤钢共同体（ECSC）" },
  "hd.1951.p": {
    de: "Nach dem Zweiten Weltkrieg wollte man einen neuen Krieg unmöglich machen. Frankreich, Deutschland, Italien und die Benelux-Staaten stellten ihre Kohle- und Stahlproduktion unter eine gemeinsame Verwaltung. Wer gemeinsam wirtschaftet, führt keinen Krieg gegeneinander — das war die Grundidee.",
    en: "After the Second World War, the goal was to make another war impossible. France, Germany, Italy and the Benelux states placed their coal and steel production under a common authority. Those who share an economy do not wage war on each other — that was the basic idea.",
    ru: "После Второй мировой войны хотели сделать новую войну невозможной. Франция, Германия, Италия и страны Бенилюкса передали производство угля и стали под общее управление. Кто ведёт общее хозяйство — не воюет друг с другом. Такова была основная идея.",
    zh: "第二次世界大战后，人们希望让新的战争无法发生。法国、德国、意大利和比荷卢三国将各自的煤炭和钢铁生产置于共同管理之下。共同经营者不会彼此开战——这就是最初的理念。",
  },
  "hd.1957.t": { de: "Die Römischen Verträge", en: "The Treaties of Rome", ru: "Римские договоры", zh: "罗马条约" },
  "hd.1957.p": {
    de: "1957 gründeten dieselben sechs Länder in Rom die Europäische Wirtschaftsgemeinschaft (EWG). Ziel war ein gemeinsamer Markt mit freiem Verkehr von Waren, Personen, Dienstleistungen und Kapital — die vier Grundfreiheiten, die bis heute das Herz der EU bilden.",
    en: "In 1957 the same six countries founded the European Economic Community (EEC) in Rome. The aim was a common market with free movement of goods, people, services and capital — the four freedoms that remain the heart of the EU today.",
    ru: "В 1957 году те же шесть стран основали в Риме Европейское экономическое сообщество (ЕЭС). Целью был общий рынок со свободным движением товаров, людей, услуг и капитала — четыре свободы, которые и сегодня остаются сердцем ЕС.",
    zh: "1957年，同样的六个国家在罗马创立了欧洲经济共同体（EEC）。目标是建立一个商品、人员、服务和资本自由流动的共同市场——这四大自由至今仍是欧盟的核心。",
  },
  "hd.1979.t": { de: "Die erste Europawahl", en: "The first European election", ru: "Первые выборы в Европарламент", zh: "首次欧洲议会选举" },
  "hd.1979.p": {
    de: "1979 wählten die Bürgerinnen und Bürger zum ersten Mal das Europäische Parlament direkt. Zuvor wurde es von den nationalen Parlamenten beschickt. Seitdem hat das Parlament immer mehr Rechte erhalten und ist heute direkt demokratisch legitimiert.",
    en: "In 1979 citizens directly elected the European Parliament for the first time. Before that, its members were delegated by national parliaments. Since then the Parliament has gained ever more powers and is today directly democratically legitimised.",
    ru: "В 1979 году граждане впервые напрямую избрали Европейский парламент. До этого его формировали национальные парламенты. С тех пор парламент получал всё больше полномочий и сегодня обладает прямой демократической легитимностью.",
    zh: "1979年，公民首次直接选举欧洲议会。此前，议员由各国议会派任。此后议会获得越来越多的权力，如今具有直接的民主合法性。",
  },
  "hd.1985.t": { de: "Das Schengener Abkommen", en: "The Schengen Agreement", ru: "Шенгенское соглашение", zh: "《申根协定》" },
  "hd.1985.p": {
    de: "1985 unterzeichneten fünf Länder im luxemburgischen Dorf Schengen ein Abkommen, das die Grenzkontrollen zwischen ihnen abschaffte. Heute kann man weite Teile Europas ohne Passkontrolle bereisen — der Schengen-Raum ist eine der spürbarsten Errungenschaften der EU im Alltag.",
    en: "In 1985 five countries signed an agreement in the Luxembourg village of Schengen that abolished border controls between them. Today one can travel across much of Europe without passport checks — the Schengen Area is one of the EU's most tangible everyday achievements.",
    ru: "В 1985 году пять стран подписали в люксембургской деревне Шенген соглашение, отменившее пограничный контроль между ними. Сегодня по большей части Европы можно путешествовать без проверки паспортов — Шенгенская зона одно из самых ощутимых достижений ЕС в повседневной жизни.",
    zh: "1985年，五个国家在卢森堡的申根村签署协议，取消彼此之间的边境管制。如今，人们可以在欧洲大部分地区无需护照检查即可通行——申根区是欧盟在日常生活中最切实的成就之一。",
  },
  "hd.1993.t": { de: "Der Vertrag von Maastricht", en: "The Treaty of Maastricht", ru: "Маастрихтский договор", zh: "马斯特里赫特条约" },
  "hd.1993.p": {
    de: "Mit dem Vertrag von Maastricht entstand 1993 offiziell die Europäische Union. Er führte die Unionsbürgerschaft ein, legte den Grundstein für die gemeinsame Währung (Euro) und erweiterte die Zusammenarbeit über die Wirtschaft hinaus auf Außen- und Innenpolitik.",
    en: "The Treaty of Maastricht officially created the European Union in 1993. It introduced EU citizenship, laid the foundation for the common currency (the euro) and extended cooperation beyond the economy to foreign and domestic policy.",
    ru: "Маастрихтский договор официально создал Европейский союз в 1993 году. Он ввёл гражданство ЕС, заложил основу единой валюты (евро) и расширил сотрудничество за пределы экономики — на внешнюю и внутреннюю политику.",
    zh: "1993年，《马斯特里赫特条约》正式创立了欧洲联盟。它引入了欧盟公民身份，为共同货币（欧元）奠定了基础，并将合作从经济扩展到外交和内政领域。",
  },
  "hd.2002.t": { de: "Der Euro als Bargeld", en: "The euro as cash", ru: "Евро как наличные", zh: "欧元现金" },
  "hd.2002.p": {
    de: "Am 1. Januar 2002 kamen Euro-Scheine und -Münzen in Umlauf. Millionen Menschen bezahlten plötzlich mit derselben Währung. Der Euro ist heute nach dem US-Dollar die zweitwichtigste Währung der Welt und wird in 20 EU-Ländern genutzt.",
    en: "On 1 January 2002 euro notes and coins entered circulation. Millions of people suddenly paid with the same currency. Today the euro is the world's second most important currency after the US dollar and is used in 20 EU countries.",
    ru: "1 января 2002 года в обращение поступили банкноты и монеты евро. Миллионы людей внезапно стали расплачиваться одной валютой. Сегодня евро — вторая по значимости валюта мира после доллара США, её используют в 20 странах ЕС.",
    zh: "2002年1月1日，欧元纸币和硬币开始流通。数百万人突然使用同一种货币付款。如今欧元是仅次于美元的世界第二重要货币，在20个欧盟国家使用。",
  },
  "hd.2004.t": { de: "Die große Osterweiterung", en: "The great eastern enlargement", ru: "Большое расширение на восток", zh: "大规模东扩" },
  "hd.2004.p": {
    de: "2004 traten zehn Länder gleichzeitig bei, die meisten davon aus Mittel- und Osteuropa. Es war die größte Erweiterung der EU-Geschichte und markierte das Ende der Teilung Europas durch den Kalten Krieg.",
    en: "In 2004 ten countries joined at once, most of them from Central and Eastern Europe. It was the largest enlargement in EU history and marked the end of Europe's division by the Cold War.",
    ru: "В 2004 году одновременно вступили десять стран, большинство — из Центральной и Восточной Европы. Это было крупнейшее расширение в истории ЕС и ознаменовало конец раскола Европы времён холодной войны.",
    zh: "2004年，十个国家同时加入，其中大多数来自中欧和东欧。这是欧盟历史上最大规模的扩盟，标志着冷战造成的欧洲分裂的终结。",
  },
  "hd.2012.t": { de: "Friedensnobelpreis für die EU", en: "Nobel Peace Prize for the EU", ru: "Нобелевская премия мира для ЕС", zh: "欧盟获诺贝尔和平奖" },
  "hd.2012.p": {
    de: "2012 erhielt die Europäische Union den Friedensnobelpreis. Das Komitee würdigte ihren Beitrag zu über sechs Jahrzehnten Frieden, Versöhnung, Demokratie und Menschenrechten in Europa — auf einem Kontinent, der zuvor von verheerenden Kriegen geprägt war.",
    en: "In 2012 the European Union received the Nobel Peace Prize. The committee honoured its contribution to over six decades of peace, reconciliation, democracy and human rights in Europe — on a continent previously marked by devastating wars.",
    ru: "В 2012 году Европейский союз получил Нобелевскую премию мира. Комитет отметил его вклад в более чем шесть десятилетий мира, примирения, демократии и прав человека в Европе — на континенте, ранее опустошённом войнами.",
    zh: "2012年，欧洲联盟获得诺贝尔和平奖。委员会表彰它为欧洲六十多年的和平、和解、民主与人权作出的贡献——在此之前，这片大陆曾饱受毁灭性战争之苦。",
  },
  "hd.2020.t": { de: "Der Brexit", en: "Brexit", ru: "Brexit (выход Британии)", zh: "英国脱欧" },
  "hd.2020.p": {
    de: "Nach einem Referendum 2016 verließ das Vereinigte Königreich Anfang 2020 als erstes Land überhaupt die EU. Der „Brexit“ zeigte, dass die Mitgliedschaft nicht selbstverständlich ist, führte aber vielen Menschen auch die Vorteile der Union neu vor Augen.",
    en: "Following a referendum in 2016, the United Kingdom left the EU at the start of 2020 — the first country ever to do so. \"Brexit\" showed that membership cannot be taken for granted, but also reminded many people of the Union's benefits.",
    ru: "После референдума 2016 года Великобритания в начале 2020 года первой из стран покинула ЕС. «Brexit» показал, что членство не является чем-то само собой разумеющимся, но и напомнил многим о преимуществах союза.",
    zh: "在2016年公投之后，英国于2020年初退出欧盟，成为有史以来首个退出的国家。“英国脱欧”表明成员资格并非理所当然，但也让许多人重新认识到联盟的益处。",
  },

  "inf.title":  { de: "Der Einfluss der EU auf die Welt", en: "The EU's influence on the world", ru: "Влияние ЕС на мир", zh: "欧盟对世界的影响" },
  "inf.title1": { de: "Der Einfluss der EU", en: "The EU's influence", ru: "Влияние ЕС", zh: "欧盟对世界的" },
  "inf.titleGrad": { de: "auf die Welt", en: "on the world", ru: "на мир", zh: "影响" },
  "inf.lead": {
    de: "Die Europäische Union ist weit mehr als ein Binnenmarkt. Als größter Handelsblock und Wertegemeinschaft prägt sie Politik, Wirtschaft und Standards weltweit.",
    en: "The European Union is far more than a single market. As the world's largest trading bloc and a community of values, it shapes politics, economics and standards worldwide.",
    ru: "Европейский союз — это гораздо больше, чем единый рынок. Будучи крупнейшим торговым блоком и сообществом ценностей, он формирует политику, экономику и стандарты по всему миру.",
    zh: "欧洲联盟远不止是一个统一市场。作为世界最大的贸易集团和价值观共同体，它在全球范围内塑造着政治、经济与标准。",
  },
  "inf.h1": { de: "Eine wirtschaftliche Supermacht", en: "An economic superpower", ru: "Экономическая сверхдержава", zh: "经济超级力量" },
  "inf.p1": {
    de: "Mit rund 449 Millionen Verbrauchern ist der EU-Binnenmarkt einer der größten der Welt. Die EU verhandelt Handelsabkommen als ein Block und hat dadurch enormes Gewicht. Wer Zugang zu diesem Markt will, muss sich an europäische Regeln halten.",
    en: "With around 449 million consumers, the EU single market is one of the largest in the world. The EU negotiates trade agreements as a single bloc, giving it enormous weight. Anyone wanting access to this market must follow European rules.",
    ru: "С примерно 449 миллионами потребителей единый рынок ЕС — один из крупнейших в мире. ЕС ведёт торговые переговоры как единый блок, что придаёт ему огромный вес. Кто хочет доступа к этому рынку, должен соблюдать европейские правила.",
    zh: "欧盟统一市场拥有约4.49亿消费者，是世界上最大的市场之一。欧盟作为一个整体谈判贸易协定，因而拥有巨大的影响力。任何想进入这一市场的人都必须遵守欧洲规则。",
  },
  "inf.h2": { de: "Der „Brüssel-Effekt“", en: "The \"Brussels Effect\"", ru: "«Брюссельский эффект»", zh: "“布鲁塞尔效应”" },
  "inf.p2": {
    de: "Weil der EU-Markt so groß ist, übernehmen Unternehmen weltweit oft freiwillig EU-Standards — etwa beim Datenschutz (DSGVO), bei der Produktsicherheit oder beim Umweltschutz. Dieses Phänomen nennt man den „Brüssel-Effekt“: Europa setzt Regeln, an die sich die ganze Welt anpasst.",
    en: "Because the EU market is so large, companies worldwide often adopt EU standards voluntarily — for example on data protection (GDPR), product safety or environmental protection. This phenomenon is called the \"Brussels Effect\": Europe sets rules that the whole world adapts to.",
    ru: "Поскольку рынок ЕС так велик, компании по всему миру часто добровольно перенимают стандарты ЕС — например, в защите данных (GDPR), безопасности продукции или охране окружающей среды. Это явление называют «Брюссельским эффектом»: Европа задаёт правила, под которые подстраивается весь мир.",
    zh: "由于欧盟市场如此庞大，全球企业往往自愿采用欧盟标准——例如在数据保护（GDPR）、产品安全或环境保护方面。这种现象被称为“布鲁塞尔效应”：欧洲制定规则，全世界随之调整。",
  },
  "inf.h3": { de: "Vorreiter beim Klimaschutz", en: "A leader in climate action", ru: "Лидер в защите климата", zh: "气候行动的先锋" },
  "inf.p3": {
    de: "Mit dem „European Green Deal“ will die EU bis 2050 klimaneutral werden. Sie treibt den Ausbau erneuerbarer Energien voran und beeinflusst damit die globale Klimapolitik. Viele ihrer Umweltstandards gelten als Vorbild für andere Länder.",
    en: "With the \"European Green Deal\", the EU aims to become climate-neutral by 2050. It drives the expansion of renewable energy and thereby influences global climate policy. Many of its environmental standards serve as a model for other countries.",
    ru: "С помощью «Европейского зелёного курса» ЕС стремится стать климатически нейтральным к 2050 году. Он продвигает развитие возобновляемой энергетики и тем самым влияет на мировую климатическую политику. Многие его экологические стандарты служат образцом для других стран.",
    zh: "通过“欧洲绿色协议”，欧盟计划在2050年前实现气候中和。它推动可再生能源的发展，从而影响全球气候政策。其许多环境标准被视为其他国家的典范。",
  },
  "inf.h4": { de: "Frieden und Werte", en: "Peace and values", ru: "Мир и ценности", zh: "和平与价值观" },
  "inf.p4": {
    de: "Die EU versteht sich als Wertegemeinschaft: Demokratie, Rechtsstaatlichkeit und Menschenrechte stehen im Zentrum. Über Entwicklungshilfe, Diplomatie und humanitäre Hilfe fördert sie diese Werte auch außerhalb Europas — und ist einer der größten Geber weltweit.",
    en: "The EU sees itself as a community of values: democracy, the rule of law and human rights are at its core. Through development aid, diplomacy and humanitarian assistance it promotes these values beyond Europe too — and is one of the largest donors in the world.",
    ru: "ЕС видит себя сообществом ценностей: демократия, верховенство права и права человека — в его центре. Через помощь развитию, дипломатию и гуманитарную помощь он продвигает эти ценности и за пределами Европы — и является одним из крупнейших доноров в мире.",
    zh: "欧盟将自身视为价值观共同体：民主、法治与人权居于核心地位。通过发展援助、外交和人道主义援助，它也在欧洲以外推广这些价值观——并且是世界上最大的援助方之一。",
  },
  "inf.callout": {
    de: "<strong>Kurz gesagt:</strong> Die EU beeinflusst die Welt nicht durch militärische Macht, sondern durch die Größe ihres Marktes, die Kraft ihrer Standards und die Anziehung ihrer Werte — man spricht auch von „soft power“.",
    en: "<strong>In short:</strong> the EU influences the world not through military power but through the size of its market, the strength of its standards and the appeal of its values — often called \"soft power\".",
    ru: "<strong>Коротко:</strong> ЕС влияет на мир не военной силой, а размером своего рынка, силой своих стандартов и притягательностью своих ценностей — это называют «мягкой силой».",
    zh: "<strong>简而言之：</strong>欧盟影响世界并非依靠军事力量，而是凭借其市场规模、标准的力量以及价值观的吸引力——这通常被称为“软实力”。",
  },

  /* ============================================================
     KONTAKT
     ============================================================ */
  "contact.title": { de: "Kontakt", en: "Contact", ru: "Контакт", zh: "联系" },
  "contact.titleGrad": { de: "aufnehmen", en: "us", ru: "с нами", zh: "我们" },
  "contact.lead": {
    de: "Du hast eine Frage zur Europäischen Union? Schreib mir — deine Nachricht landet direkt in meinem Postfach.",
    en: "Do you have a question about the European Union? Write to me — your message goes straight to my inbox.",
    ru: "Есть вопрос о Европейском союзе? Напиши мне — твоё сообщение попадёт прямо в мой почтовый ящик.",
    zh: "你对欧洲联盟有疑问吗？给我写信吧——你的留言将直接进入我的邮箱。",
  },
  "contact.emailL": { de: "Deine E-Mail", en: "Your email", ru: "Твой e-mail", zh: "你的邮箱" },
  "contact.emailP": { de: "name@beispiel.de", en: "name@example.com", ru: "name@example.com", zh: "name@example.com" },
  "contact.msgL":   { de: "Deine Frage", en: "Your question", ru: "Твой вопрос", zh: "你的问题" },
  "contact.msgP":   { de: "Schreib hier deine Frage zur EU …", en: "Write your question about the EU here …", ru: "Напиши здесь свой вопрос о ЕС …", zh: "在此写下你关于欧盟的问题……" },
  "contact.send":   { de: "Nachricht senden", en: "Send message", ru: "Отправить сообщение", zh: "发送留言" },
  "contact.note":   { de: "Deine Angaben werden nur zur Beantwortung deiner Frage genutzt.", en: "Your data is only used to answer your question.", ru: "Твои данные используются только для ответа на вопрос.", zh: "你的信息仅用于回答你的问题。" },
  "contact.ok":     { de: "Danke! Deine Nachricht wurde gesendet.", en: "Thank you! Your message has been sent.", ru: "Спасибо! Твоё сообщение отправлено.", zh: "谢谢！你的留言已发送。" },
  "contact.err":    { de: "Etwas ist schiefgelaufen. Bitte versuche es erneut.", en: "Something went wrong. Please try again.", ru: "Что-то пошло не так. Попробуй ещё раз.", zh: "出错了，请重试。" },
  "contact.iEmailT":{ de: "E-Mail", en: "Email", ru: "E-mail", zh: "电子邮件" },
  "contact.iAnsT":  { de: "Antwortzeit", en: "Response time", ru: "Время ответа", zh: "回复时间" },
  "contact.iAnsD":  { de: "In der Regel innerhalb weniger Tage.", en: "Usually within a few days.", ru: "Обычно в течение нескольких дней.", zh: "通常在几天内。" },
  "contact.iTopicT":{ de: "Thema", en: "Topic", ru: "Тема", zh: "主题" },
  "contact.iTopicD":{ de: "Alles rund um die Europäische Union.", en: "Anything about the European Union.", ru: "Всё, что связано с Европейским союзом.", zh: "有关欧洲联盟的一切。" },

  /* ============================================================
     RECHTLICHE SEITEN (Platzhaltertext)
     ============================================================ */
  "legal.demoNote": {
    de: "Hinweis: Dies ist ein Schulprojekt. Die folgenden Texte sind Musterbeispiele und ohne rechtliche Gültigkeit.",
    en: "Note: this is a school project. The following texts are sample examples with no legal validity.",
    ru: "Примечание: это школьный проект. Приведённые тексты — образцы и не имеют юридической силы.",
    zh: "提示：这是一个学校项目。以下文本为示例，不具法律效力。",
  },
  "agb.title": { de: "Allgemeine Geschäftsbedingungen", en: "Terms and Conditions", ru: "Общие условия (AGB)", zh: "一般条款与条件" },
  "agb.h1": { de: "1. Geltungsbereich", en: "1. Scope", ru: "1. Область применения", zh: "1. 适用范围" },
  "agb.p1": { de: "Diese Bedingungen gelten für die Nutzung dieser Informationswebsite im Rahmen eines schulischen Projekts.", en: "These terms apply to the use of this information website within the scope of a school project.", ru: "Настоящие условия распространяются на использование этого информационного сайта в рамках школьного проекта.", zh: "本条款适用于在学校项目范围内使用本信息网站。" },
  "agb.h2": { de: "2. Inhalte", en: "2. Content", ru: "2. Содержание", zh: "2. 内容" },
  "agb.p2": { de: "Die Inhalte dienen ausschließlich Informations- und Bildungszwecken. Eine Gewähr für Vollständigkeit und Aktualität wird nicht übernommen.", en: "The content serves information and educational purposes only. No guarantee is given for completeness or timeliness.", ru: "Содержание служит исключительно информационным и образовательным целям. Гарантия полноты и актуальности не предоставляется.", zh: "内容仅用于信息与教育目的。不保证其完整性和时效性。" },
  "agb.h3": { de: "3. Haftung", en: "3. Liability", ru: "3. Ответственность", zh: "3. 责任" },
  "agb.p3": { de: "Für externe Links wird keine Haftung übernommen. Für deren Inhalte sind ausschließlich deren Betreiber verantwortlich.", en: "No liability is accepted for external links. Their operators are solely responsible for their content.", ru: "За внешние ссылки ответственность не несётся. За их содержание отвечают исключительно их операторы.", zh: "对外部链接不承担责任。其内容由各自运营者全权负责。" },

  "dsg.title": { de: "Datenschutzerklärung", en: "Privacy Policy", ru: "Политика конфиденциальности", zh: "隐私政策" },
  "dsg.h1": { de: "1. Verantwortliche Stelle", en: "1. Data controller", ru: "1. Ответственное лицо", zh: "1. 数据控制者" },
  "dsg.p1": { de: "Verantwortlich für diese Website ist die Erstellerin im Rahmen eines Schulprojekts. Kontakt über die Kontaktseite.", en: "Responsible for this website is its creator within a school project. Contact via the contact page.", ru: "Ответственной за этот сайт является его создательница в рамках школьного проекта. Связь — через страницу контактов.", zh: "本网站由其创建者在学校项目框架内负责。可通过联系页面联系。" },
  "dsg.h2": { de: "2. Erhebung von Daten", en: "2. Data collection", ru: "2. Сбор данных", zh: "2. 数据收集" },
  "dsg.p2": { de: "Personenbezogene Daten werden nur erhoben, wenn du das Kontaktformular nutzt (E-Mail-Adresse und Nachricht). Diese werden ausschließlich zur Beantwortung deiner Anfrage verwendet.", en: "Personal data is only collected if you use the contact form (email address and message). It is used solely to respond to your enquiry.", ru: "Личные данные собираются только при использовании контактной формы (адрес e-mail и сообщение). Они используются исключительно для ответа на твой запрос.", zh: "仅当你使用联系表单时才会收集个人数据（电子邮箱和留言）。这些数据仅用于回复你的咨询。" },
  "dsg.h3": { de: "3. Deine Rechte", en: "3. Your rights", ru: "3. Твои права", zh: "3. 你的权利" },
  "dsg.p3": { de: "Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner gespeicherten Daten. Es werden keine Daten an Dritte verkauft.", en: "You have the right to access, correct and delete your stored data. No data is sold to third parties.", ru: "Ты имеешь право на доступ, исправление и удаление хранимых данных. Данные третьим лицам не продаются.", zh: "你有权访问、更正和删除你存储的数据。不会向第三方出售任何数据。" },

  "imp.title": { de: "Impressum", en: "Imprint", ru: "Импрессум", zh: "版本说明" },
  "imp.h1": { de: "Angaben gemäß § 5 TMG", en: "Information according to § 5 TMG", ru: "Сведения согласно § 5 TMG", zh: "根据《电信媒体法》第5条的信息" },
  "imp.p1": { de: "Diese Website wurde im Rahmen einer Projektwoche an einer Berufsschule (Fachrichtung Anwendungsentwicklung) erstellt. Sie verfolgt keine kommerziellen Zwecke.", en: "This website was created during a project week at a vocational school (specialisation: application development). It has no commercial purpose.", ru: "Этот сайт создан во время проектной недели в профессиональной школе (направление: разработка приложений). Он не преследует коммерческих целей.", zh: "本网站是在一所职业学校（应用开发方向）的项目周期间创建的，无任何商业目的。" },
  "imp.h2": { de: "Kontakt", en: "Contact", ru: "Контакт", zh: "联系方式" },
  "imp.p2": { de: "Anfragen bitte über das Kontaktformular dieser Website.", en: "Please send enquiries via the contact form on this website.", ru: "Запросы — через контактную форму этого сайта.", zh: "请通过本网站的联系表单发送咨询。" },
  "imp.h3": { de: "Haftungsausschluss", en: "Disclaimer", ru: "Отказ от ответственности", zh: "免责声明" },
  "imp.p3": { de: "Trotz sorgfältiger Recherche wird keine Gewähr für die Richtigkeit der Inhalte übernommen. Dies ist keine offizielle Website der Europäischen Union.", en: "Despite careful research, no guarantee is given for the accuracy of the content. This is not an official website of the European Union.", ru: "Несмотря на тщательное исследование, гарантия точности содержания не предоставляется. Это не официальный сайт Европейского союза.", zh: "尽管经过认真研究，仍不保证内容的准确性。本网站并非欧洲联盟的官方网站。" },
};

/* Globale i18n-Engine */
window.EU_I18N = {
  langs: LANGS,
  dict: I18N_DICT,
  countries: COUNTRY_NAMES,
  DEFAULT: "de",
  get() { return localStorage.getItem("eu_lang") || this.DEFAULT; },
  set(l) { localStorage.setItem("eu_lang", l); },
  t(key, lang) {
    const e = this.dict[key];
    if (!e) return key;
    return e[lang] ?? e[this.DEFAULT] ?? key;
  },
};
