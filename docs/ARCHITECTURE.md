# Architecture

Stato: modello da compilare
Responsabile: proprietario del progetto
Ultima revisione: 2026-10-05

## Principles
Prefer the simplest, cheapest and most maintainable architecture that satisfies the specification.

## Frontend
TBD

## Backend
TBD

## Database
TBD

## Authentication
TBD

## Hosting
Deploy provider is optional and selected per project.

## Storage
TBD

## Email
TBD

## Analytics
TBD

## Payments
TBD

## External APIs
TBD

## Testing
TBD

## Decisions
Documentare le scelte durevoli negli [ADR](ADR/README.md) e nel [registro](DECISION_REGISTER.md). Questa pagina descrive la soluzione corrente; le alternative e motivazioni restano nei record. Una proposta non è una scelta adottata.

## Struttura e contratti
Separare codice, test, script, documenti e configurazione CI come indicato nel [README](../README.md). Documentare flusso dati, responsabilità dei componenti, dipendenze, errori e contratti versionati quando esistono. Non introdurre backend o servizi assenti dalle specifiche.

## Processo AI di sviluppo
La scelta del modello segue [LLM_SELECTION](LLM_SELECTION.md) e [ADR-0002](ADR/0002-scelta-llm.md). Il controllo documentale richiede la guida. La selezione avviene negli strumenti disponibili all'operatore; il progetto non contiene un router LLM, un SDK OpenAI o chiamate API. Questa scelta riguarda il processo di sviluppo e lascia da definire l'architettura del prodotto.
