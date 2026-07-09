# 🇪🇺 Europäische Union — Projektwebsite

Ein Schulprojekt (Berufsschule, Fachrichtung Anwendungsentwicklung) über die
Europäische Union: Geschichte, Mitgliedsländer und weltweiter Einfluss.

Gebaut mit **HTML, CSS und etwas JavaScript** — komplett ohne Framework.

## 📂 Struktur

```
eu_ybabenko_projekt/
├── index.html          Startseite (Fakten + Bevölkerungsdiagramm)
├── chronologie.html    EU Chronologie (Zeitstrahl + Details)
├── einfluss.html       EU & Welt (Textseite/CMS)
├── kontakt.html        Kontaktformular
├── agb.html            AGB (Mustertext)
├── datenschutz.html    Datenschutz (Mustertext)
├── impressum.html      Impressum (Mustertext)
├── css/style.css       Gesamtes Design (dunkles Theme)
├── js/i18n.js          Alle Übersetzungen (DE/EN/RU/ZH)
├── js/main.js          Logik: Sprache, Diagramm, Zeitstrahl, Formular …
└── assets/images/      Hier eigene Bilder ablegen (optional)
```

## ▶️ Starten

Einfach `index.html` im Browser öffnen — fertig.
(Am besten über einen kleinen lokalen Server, damit alles sauber lädt:)

```bash
cd eu_ybabenko_projekt
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

## ✉️ Kontaktformular — E-Mails empfangen

Statische Websites können selbst keine E-Mails versenden. Zwei Optionen:

**Option A — Formspree (empfohlen, echte E-Mail-Zustellung):**
1. Auf https://formspree.io kostenlos registrieren (mit
   `babenko.yana2206@gmail.com`).
2. Ein neues Formular anlegen → du bekommst eine ID wie `abcdwxyz`.
3. In `js/main.js` die Zeile anpassen:
   ```js
   const FORMSPREE_ID = "abcdwxyz";   // statt "DEIN_FORMSPREE_ID"
   ```
4. Fertig — abgeschickte Nachrichten landen in deinem Gmail-Postfach.

**Option B — ohne Anmeldung (Fallback):**
Wenn keine Formspree-ID eingetragen ist, öffnet das Formular automatisch
das E-Mail-Programm mit vorausgefüllter Nachricht an
`babenko.yana2206@gmail.com`. Ideal für die Präsentation.

## 🖼️ Bilder

Siehe `assets/images/BILDER-HIER-ABLEGEN.txt`. Ohne Bilder werden schöne
Platzhalter angezeigt — die Seite ist also sofort präsentationsfertig.

## 🌍 Sprachen

Oben rechts umschaltbar: **Deutsch (Standard), English, Русский, 中文**.
Die Auswahl wird im Browser gespeichert.
