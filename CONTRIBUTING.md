# Contribuire

Leggere [costituzione](docs/COSTITUZIONE.md) e [politica delle modifiche](docs/CHANGE_POLICY.md). Ogni modifica deve avere motivo, ambito, criteri e verifiche tracciabili.

## Branch e commit
Per gli agenti usare codex/nome-breve; per altri contributi feature/nome, fix/nome o docs/nome. Un branch riguarda un risultato coerente. Commit descrittivi: feat, fix, docs, refactor, test, chore. Non includere segreti o dati privati.

## Procedura
1. Classificare la modifica e individuare requisiti e fonti coinvolte.
2. Consolidare la richiesta; risolvere decisioni strutturali con ADR accettato.
3. Implementare su branch, aggiornare documenti e CHANGELOG quando pertinente.
4. Eseguire npm run check e revisione funzionale/visiva appropriata.
5. Aprire PR con impatti, verifica e strategia di ripristino.
6. Integrare dopo revisione e controlli superati. Il responsabile del progetto deve configurare separatamente le eventuali protezioni del branch GitHub.
7. Seguire [VERSIONING](docs/VERSIONING.md) per un rilascio: merge e deploy sono passaggi distinti.

## Definizione di completamento
Criteri soddisfatti, verifiche riportate, documenti coerenti e questioni residue esplicite. Una modifica alla sola documentazione non richiede un nuovo ADR salvo cambi di principi o decisioni durevoli. Le autorizzazioni già date in chat non vanno richieste una seconda volta: il loro esito va consolidato.
