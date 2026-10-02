# Architecture Decision Records

Gli ADR registrano decisioni durevoli di architettura, prodotto e governo del progetto. Usarli per dati, privacy, integrazioni, contratti, dipendenze strategiche e principi. Una correzione ordinaria non richiede un ADR.

## Creazione
1. Copiare [TEMPLATE](TEMPLATE.md) in NNNN-titolo-breve.md con il successivo numero libero; non riutilizzare numeri.
2. Compilare contesto, alternative, decisione proposta, conseguenze e verifica. Stato iniziale: proposto.
3. Collegare il record nel [registro](../DECISION_REGISTER.md), con lo stesso stato e data.
4. Prima dell'implementazione strutturale, il responsabile accetta o respinge la proposta; registrare chi ha deciso e il riferimento all'autorizzazione.
5. Aggiornare specifiche e architettura alla scelta accettata.

## Stati
- proposto: scelta in discussione, non ancora adottata.
- accettato: scelta autorizzata dal responsabile.
- respinto: proposta non adottata, conservata con la motivazione.
- superato: scelta sostituita da un nuovo ADR accettato.

Per superare un ADR: creare un nuovo record, indicare «Supera» con link al precedente, e nel precedente «Superato da» con link al successivo; aggiornare entrambi gli stati e il registro. Non eliminare motivazioni o alternative di un record accettato. Correzioni editoriali e aggiornamenti di stato restano tracciati in Git.

L'accettazione è una decisione umana verificata in revisione: la CI controlla metadati e collegamenti, non autentica l'autorità di chi decide. Un esempio compilato è in [examples](../examples/ADR-EXAMPLE.md) e non costituisce una decisione del template.
