# AI Web Pipeline Template

Template operativo per sviluppare siti e web app con fonti ufficiali versionate e flusso AI → GitHub → CI → revisione → rilascio → deploy opzionale.

La chat è il tavolo di lavoro; il repository è l'archivio ufficiale. Iniziare dalla [costituzione](docs/COSTITUZIONE.md) e adattare il template al progetto. I campi TBD e gli esempi non sono requisiti approvati.

## Struttura da adottare
```text
src/                         codice applicativo
tests/                       verifiche automatiche
scripts/check-governance.mjs  controllo documentale
docs/
  COSTITUZIONE.md             principi e gerarchia
  CLIENT_QUESTIONNAIRE.md     raccolta iniziale
  CLIENT_BRIEF.md             obiettivi e perimetro
  PROJECT_SPEC.md             requisiti e accettazione
  ARCHITECTURE.md             soluzione corrente
  DESIGN_SYSTEM.md            regole visive
  CHANGE_POLICY.md            gestione modifiche
  VERSIONING.md               versioni e rilasci
  DECISION_REGISTER.md        indice decisioni
  ADR/                       record e modello
  ROADMAP.md                 risultati e priorità
  TODO.md                    attività operative
  OPEN_QUESTIONS.md           dubbi e ipotesi
  REVIEW.md                  verifica e rilascio
  examples/                  esempi non adottati
AGENTS.md                    istruzioni agli agenti
CHANGELOG.md                 note delle versioni
.github/                     CI e modelli issue/PR
```
CLIENT_BRIEF conserva il nome esistente; DECISIONS rimanda al registro, senza duplicare le decisioni.

## Flusso
1. Adattare costituzione e responsabilità; compilare questionario e brief.
2. Definire specifiche, criteri, architettura e design; risolvere le scelte strutturali con ADR.
3. Pianificare roadmap e attività, classificare la modifica.
4. Sviluppare un incremento su branch dedicato e consolidare le decisioni emerse in chat.
5. Aggiornare documenti e Unreleased; eseguire npm run check e revisione pertinente.
6. Aprire PR, revisionare e integrare dopo controlli superati.
7. Preparare versione, note e tag; distribuire quando autorizzato.

## Comandi
Installare con npm ci usando il lockfile versionato; usare npm install quando si modificano le dipendenze e revisionare il lockfile aggiornato. Usare npm run dev per lo sviluppo e npm run check per il quality gate. npm run docs:check controlla collegamenti locali, documenti richiesti, ADR/registro e coerenza della versione con il lockfile quando presente.
La CI verifica la struttura, non la correttezza delle decisioni né la reale autorità delle approvazioni. I documenti iniziali restano da compilare. Il test aritmetico preesistente è soltanto un segnaposto.

## Riferimenti
- [Contribuire](CONTRIBUTING.md)
- [Politica delle modifiche](docs/CHANGE_POLICY.md)
- [ADR](docs/ADR/README.md)
- [Versionamento](docs/VERSIONING.md)
- [Revisione](docs/REVIEW.md)
- [Esempio completo sintetico](docs/examples/ADR-EXAMPLE.md)

Nessun provider di hosting o deploy è configurato di default. Le regole del template non configurano automaticamente protezioni del branch su GitHub.
