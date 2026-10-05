# ADR-0002 — Scelta del modello per tipo di attività

Stato: accettato
Data: 2026-10-05
Responsabile: proprietario del progetto
Autorizzazione: richiesta esplicita del responsabile in chat del 2026-10-05 di inserire nella pipeline la scelta del modello OpenAI in funzione dell'utilizzo
Supera: nessuno
Superato da: nessuno

## Contesto
La pipeline non forniva criteri per scegliere il modello in base al lavoro. Occorre rendere tracciabile la scelta senza confondere disponibilità, raccomandazione e impostazione effettiva della chat.

## Alternative
- Un solo modello per ogni attività: semplice ma non considera il costo e la difficoltà del compito.
- Routing API automatico: richiede integrazione, credenziali, valutazioni e gestione dei costi assenti dalle specifiche.
- Guida operativa versionata con criteri, fonti ufficiali e verifica sul compito: applicabile al processo attuale.

## Decisione
Adottare la guida [LLM_SELECTION](../LLM_SELECTION.md) e richiederne la consultazione agli agenti. Le raccomandazioni sono rivedibili: nessun modello è dichiarato universalmente ottimale. La richiesta autorizza l'introduzione di questa procedura; non configura un'integrazione API o cambia automaticamente il modello corrente.

## Conseguenze
La scelta diventa motivata e verificabile. Non cambiano contratti, dati, dipendenze o hosting. Non sono introdotti servizi o spese automatiche. Rimangono necessari controllo delle fonti e confronto su casi rappresentativi.

## Verifica
Verificare i collegamenti, il registro ADR e la presenza della guida con il controllo documentale. Eseguire il quality gate previsto e dichiararne gli eventuali limiti. La qualità delle raccomandazioni richiede valutazioni reali, non è provata dal test segnaposto del template.

## Riferimenti
- [Guida operativa](../LLM_SELECTION.md)
- [Revisione](../REVIEW.md)
- [Selezione ufficiale OpenAI](https://developers.openai.com/api/docs/guides/model-selection)
