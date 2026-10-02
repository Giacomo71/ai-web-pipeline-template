# Revisione e rilascio

Stato: modello operativo
Responsabile: revisore e responsabile del progetto
Ultima revisione: 2026-10-02

## Modifica
- [ ] Motivo, livello, ambito e fuori ambito chiari.
- [ ] Requisiti e criteri verificabili soddisfatti.
- [ ] Errori e stati vuoti gestiti se coinvolti.
- [ ] Impatti su dati, compatibilità, privacy, costi e dipendenze valutati.
- [ ] ADR accettato per decisioni strutturali, oppure assenza motivata.
- [ ] Fonti ufficiali aggiornate e decisioni della chat consolidate.
- [ ] Nessuna modifica estranea o segreto inserito.

## Verifiche
- [ ] docs:check, lint, typecheck, test e build superati.
- [ ] Test pertinenti al comportamento modificato; nessuna falsa attestazione da segnaposto.
- [ ] Revisione visiva mobile/desktop se coinvolta, oppure non applicabilità motivata.
- [ ] Limiti e verifiche omesse dichiarati.
- [ ] Revisore identificato ed esito esplicito nella PR.

## Solo per rilascio
- [ ] Versione coerente in package.json e lockfile.
- [ ] CHANGELOG datato con cambiamenti e incompatibilità reali.
- [ ] Migrazioni verificate e ripristino documentato se necessari.
- [ ] Commit verificato e tag immutabile identificati.
- [ ] Autorizzazione del responsabile al rilascio e, se previsto, al deploy.
- [ ] Esito della pubblicazione verificato; nessun rilascio dichiarato prima di completarlo.
