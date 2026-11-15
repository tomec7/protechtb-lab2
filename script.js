const $ = (selector) => document.querySelector(selector);
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));

$('#proof-row').innerHTML = siteContent.proof.map(([value,label]) => `<div><b>${esc(value)}</b><span>${esc(label)}</span></div>`).join('');
$('#solutions').innerHTML = siteContent.solutions.map((item) => `<article class="solution-card ${item.featured ? 'featured' : ''}">${item.featured ? '<span class="tag">Najlepší vstup</span>' : ''}<div class="solution-icon">${item.icon}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><ul>${item.items.map((line) => `<li>${esc(line)}</li>`).join('')}</ul><div class="price">${esc(item.price)} <small>${esc(item.note)}</small></div><a class="button ${item.featured ? 'primary' : 'soft'}" href="#kontakt">${esc(item.cta)}</a></article>`).join('');
$('#benefits').innerHTML = siteContent.benefits.map(([title,text]) => `<div class="check"><b>${esc(title)}</b><span>${esc(text)}</span></div>`).join('');
$('#energy-flow').innerHTML = siteContent.energy.map(([icon,title,text]) => `<div class="flow"><span>${icon}</span><div><b>${esc(title)}</b><small>${esc(text)}</small></div></div>`).join('');
$('#steps').innerHTML = siteContent.steps.map(([number,title,text]) => `<div class="step"><b>${number}</b><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`).join('');
$('#faq-list').innerHTML = siteContent.faq.map(([question,answer]) => `<details><summary>${esc(question)}<span>+</span></summary><p>${esc(answer)}</p></details>`).join('');
const toggle = $('.menu-toggle'); toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); $('.nav').classList.toggle('open', !expanded); });
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded','false'); $('.nav').classList.remove('open'); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.1});
document.querySelectorAll('.solution-card,.case,.step,.check').forEach((element) => { element.classList.add('reveal'); observer.observe(element); });
$('#lead-form').addEventListener('submit', (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const subject = encodeURIComponent(`Dopyt z webu PROTECHTB – ${form.get('name')}`); const body = encodeURIComponent(`Meno a firma: ${form.get('name')}\nE-mail: ${form.get('email')}\n\nSpráva:\n${form.get('message')}`); window.location.href = `mailto:protechtbsupport@gmail.com?subject=${subject}&body=${body}`; $('#form-note').hidden = false; });
