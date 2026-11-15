// ÚPRAVY OBSAHU: texty a položky stránky sú sústredené v tomto súbore.
// Po úprave stačí commitnúť zmenu a pushnúť ju na GitHub.
const siteContent = {
  proof: [['150+', 'realizovaných projektov'], ['24 h', 'reakcia na dopyt'], ['1 partner', 'pre IT a automatizáciu']],
  solutions: [
    {icon:'🛡️', title:'Secure Office', text:'Praktický audit IT pre firmu bez interného bezpečnostného tímu.', items:['účty, MFA a vzdialené prístupy','sieť, Wi-Fi, firewall a aktualizácie','riziká zoradené podľa priority','plán opráv na 30 dní'], price:'od 299 €', note:'jednorazovo', cta:'Chcem audit', featured:true},
    {icon:'💾', title:'Backup & Recovery', text:'Zálohy, ktoré nie sú iba nastavené, ale aj otestované.', items:['3-2-1 stratégia záloh','ochrana pred zmazaním a ransomware','test obnovy a mesačný report','jasné RPO/RTO pre vedenie'], price:'od 499 €', note:'implementácia', cta:'Chcem chrániť dáta'},
    {icon:'⚡', title:'Smart Energy', text:'Prehľad a automatizácia FV, wallboxu a spotreby budovy.', items:['energetický dashboard','monitoring a upozornenia','riadenie prebytkov','vzdialená podpora partnera'], price:'na mieru', note:'podľa technológie', cta:'Chcem ukážku'}
  ],
  benefits: [['🔐 Menej rizika','MFA, aktualizácie, bezpečné prístupy a dokumentácia.'],['🔁 Rýchla obnova','Nie iba záloha, ale pravidelne overený návrat do prevádzky.'],['⏱️ Menej ručnej práce','Automatizácie, reporty a upozornenia namiesto chaosu.'],['🤝 Jeden partner','Jasná komunikácia bez zbytočného technického žargónu.']],
  energy: [['☀️','Výroba','prehľad výkonu a prebytkov'],['🏢','Spotreba','čo budova reálne využíva'],['🚗','Wallbox','nabíjanie podľa dostupnej energie']],
  steps: [['01','Krátky rozhovor','Pochopíme, čo vás stojí čas alebo čo vás môže zastaviť.'],['02','Audit a návrh','Spíšeme riziká, priority, cenu a očakávaný výsledok.'],['03','Implementácia','Nastavíme riešenie, otestujeme ho a odovzdáme zrozumiteľne.'],['04','Dlhodobá starostlivosť','Monitoring, aktualizácie, report a pomoc po nasadení.']],
  faq: [['Ako rýchlo začneme?','Prvý rozhovor trvá približne 20 minút. Po ňom dostanete odporúčanie na konkrétny ďalší krok.'],['Musím mať nové zariadenia?','Nie. Najprv skontrolujeme existujúce vybavenie a nové odporučíme iba vtedy, keď je to potrebné.'],['Robíte aj vzdialenú podporu?','Áno. Bežnú správu a monitoring riešime vzdialene; väčšie inštalácie vieme realizovať aj on-site.'],['Je audit záväzný?','Nie. Audit vám dá fakty, priority a cenu. Rozhodnutie o implementácii je na vás.']]
};
