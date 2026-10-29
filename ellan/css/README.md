# Stili condivisi di Ellan

Questi CSS riprendono l'identità visiva della pagina attuale `/ellan.html` (sfondo scuro, carattere Georgia e dettagli dorati). Sono pensati per le **nuove pagine** del portale e non sono ancora collegati alla pagina pubblica esistente.

Ordine di caricamento nelle pagine in `ellan/<sezione>/pagina.html`:

```html
<link rel="stylesheet" href="../../site-navigation.css">
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/components.css">
<link rel="stylesheet" href="../css/media.css">
<link rel="stylesheet" href="../css/responsive.css">
```

**Attenzione:** da una pagina dentro `ellan/<sezione>/`, il percorso corretto alla cartella `ellan/css/` è `../css/`; quello alla cartella principale del repository è `../../`. Per una pagina `ellan/index.html`, usare invece `css/` e `../site-navigation.css`.

- `base.css`: colori, font, layout e sezioni.
- `components.css`: pulsanti, card, griglie e annunci.
- `media.css`: musica e lettore.
- `responsive.css`: layout mobile e preferenze di movimento.

I fogli generali del sito (`site-navigation.css`, `game-facts.css`, `mobile.css`) restano alla radice; non ne creiamo duplicati.
