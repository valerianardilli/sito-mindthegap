# Sito Mind the Gap — guida rapida

## Come si guarda
Doppio clic su `index.html` → si apre nel browser.

## Le pagine

| File | Indirizzo online | Cosa contiene |
|---|---|---|
| `index.html` | `/` | Home |
| `about.html` | `/about` | Chi siamo e team |
| `services.html` | `/services` | Tutti i servizi |
| `commercial.html` | `/commercial` | Portfolio, 9 progetti |
| `dove-operiamo.html` | `/dove-operiamo` | Le nove piazze |
| `hostess-roma.html` | `/hostess-roma` | Roma |
| `hostess-milano.html` | `/hostess-milano` | Milano |
| `hostess-firenze.html` | `/hostess-firenze` | Firenze |
| `hostess-venezia.html` | `/hostess-venezia` | Venezia |
| `hostess-bologna.html` | `/hostess-bologna` | Bologna |
| `hostess-napoli.html` | `/hostess-napoli` | Napoli |
| `hostess-bari.html` | `/hostess-bari` | Bari e Puglia |
| `hostess-sardegna.html` | `/hostess-sardegna` | Sardegna |
| `hostess-sicilia.html` | `/hostess-sicilia` | Sicilia |
| `contact.html` | `/contact` | Contatti e modulo |
| `404.html` | — | Pagina di errore |

**Gli indirizzi coincidono con quelli di Squarespace** dove già esistevano
(`/about`, `/services`, `/commercial`, `/contact`, `/hostess-roma`): al momento
del cambio non si perde posizionamento.

## I file di servizio

- `assets/style.css` — **tutto l'aspetto del sito**. Cambi un colore qui, cambia ovunque.
- `assets/site.js` — menu mobile, animazioni, striscia loghi
- `sitemap.xml` — elenco pagine per Google (da inviare a Search Console)
- `robots.txt` — istruzioni per i motori di ricerca
- `_redirects` — regole per Netlify (dominio senza www → con www)

## Da personalizzare prima di pubblicare

1. **Telefono**: cerca `INSERISCI-TELEFONO` e sostituisci (se vuoi mostrarlo)
2. **Immagini**: vedi `LEGGIMI-immagini.md`
3. **Testimonianze**: non ne ho inventate — vanno raccolte dai clienti veri e aggiunte
4. **Case study**: le foto del portfolio hanno solo didascalia; due righe per evento
   le renderebbero contenuto unico che nessun concorrente può copiare

## Il modulo contatti

Funziona automaticamente una volta pubblicato su Netlify (Netlify Forms).
Le richieste arrivano nel pannello Netlify e via email. In locale, aprendo il file
col doppio clic, il modulo non invia nulla: è normale.

## Note SEO già implementate

- Un solo H1 per pagina, gerarchia titoli corretta
- Titoli e descrizioni SEO unici su ogni pagina
- Dati strutturati (LocalBusiness + FAQ) su tutte le pagine principali
- Testo alternativo su ogni immagine
- Collegamenti hreflang pronti per la versione inglese
- Testi delle nove città **completamente diversi fra loro**: verificato che non ci sia
  nemmeno una frase lunga in comune (footer escluso), per non essere letti come duplicati
