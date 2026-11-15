# PROTECHTB Lab 2

Predajná landing page pre PROTECHTB Bratislava: IT odolnosť, zálohovanie, bezpečnostný audit a Smart Energy.

## Úpravy obsahu

Najčastejšie zmeny rob v `content.js`: čísla v `proof`, balíky v `solutions`, benefity, Smart Energy kroky, proces a FAQ. Pri balíkoch zachovaj aj `intent` (`audit`, `backup` alebo `energy`), aby chatbot vytvoril správny predmet e-mailu. Vizuál a responzívne správanie je v `styles.css` a `chatbot.css`. Interakcie, menu, chatbot a animácie sú v `script.js`. Štruktúru sekcií upravuj v `index.html`.

## Chatbot a dopyty

Chatbot návštevníka prevedie výberom služby, zachytí jeho potrebu a kontakty a pripraví e-mail na `protechtbsupport@gmail.com`. Predmet sa automaticky nastaví podľa služby a telo e-mailu obsahuje celý prepis konverzácie. Keďže ide o statický web na GitHub Pages, návštevník musí v otvorenom e-mailovom klientovi ešte kliknúť na **Odoslať**. Automatické odosielanie bez mailového klienta vyžaduje backend alebo externú formulárovú službu.

## Lokálne spustenie

```bash
python3 -m http.server 8000
```

Potom otvor http://localhost:8000.

## Publikovanie

```bash
git add .
git commit -m "Update landing page"
git push
```

Live web: https://tomec7.github.io/protechtb-lab2/
