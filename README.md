# Invito Compleanno - Le Huntrix 🎂✨

Sito statico per invito di compleanno a tema magico "Le Huntrix" con musica di sottofondo.

## 🚀 Caratteristiche

- ✨ Design elegante a tema magico/Harry Potter
- 🎵 Musica di sottofondo da YouTube (controllo on/off)
- 📱 Responsive design per mobile e desktop
- 🌟 Animazioni e effetti interattivi
- 📄 Completamente statico - nessun backend richiesto

## 📦 File del Progetto

```
.
├── index.html      # Pagina principale
├── styles.css      # Stili CSS
├── script.js       # JavaScript per interattività
└── README.md       # Questa documentazione
```

## 🌐 Deploy su GitHub Pages

### Metodo 1: GitHub Pages (Raccomandato)

1. **Crea un repository su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Invito compleanno Le Huntrix"
   git branch -M main
   git remote add origin https://github.com/TUO_USERNAME/nome-repository.git
   git push -u origin main
   ```

2. **Attiva GitHub Pages**
   - Vai sul tuo repository su GitHub
   - Clicca su **Settings**
   - Scorri fino a **Pages** (nella sidebar)
   - In **Source**, seleziona **Deploy from a branch**
   - Scegli **main** come branch e **/ (root)** come folder
   - Clicca **Save**

3. **Accedi al tuo sito**
   - Il sito sarà disponibile su: `https://TUO_USERNAME.github.io/nome-repository/`

### Metodo 2: GitHub CLI

```bash
gh repo create nome-repository --public
git push -u origin main
gh repo view --web
# Poi segui i passi 2-3 del Metodo 1 per attivare GitHub Pages
```

## 🎨 Personalizzazione

### Modificare la Data e i Dettagli

Apri `index.html` e modifica la sezione details:

```html
<div class="detail-item">
    <span class="icon">📅</span>
    <span class="text">Data da confermare</span>
</div>
```

### Cambiare la Musica

In `index.html`, cerca l'iframe YouTube e modifica l'URL:

```html
<iframe 
    id="youtubePlayer"
    src="https://www.youtube.com/embed/-mcXJAHOGzk?autoplay=1&loop=1&playlist=-mcXJAHOGzk&controls=0&mute=1&enablejsapi=1"
    ...
```

Sostituisci `-mcXJAHOGzk` con l'ID del video YouTube che preferisci.

### Modificare i Colori

Apri `styles.css` e modifica le variabili di colore nelle sezioni:
- Background: `.body` e `.container`
- Card: `.invitation-card`
- Testi: `.title`, `.subtitle`, `.message`

## 📝 Note

- La musica parte automaticamente in modalità muta
- Clicca il pulsante "Musica" per attivare/disattivare l'audio
- Il sito funziona completamente offline dopo il primo caricamento
- Compatibile con tutti i browser moderni

## 🔧 Tecnologie Utilizzate

- HTML5
- CSS3 (con animazioni)
- JavaScript (Vanilla JS)
- YouTube IFrame API

## 📄 Licenza

Questo progetto è libero per uso personale.

---

✨ Buon Compleanno! ✨