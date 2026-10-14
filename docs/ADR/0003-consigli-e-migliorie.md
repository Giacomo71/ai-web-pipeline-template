# ADR-0003 — Valutazione riutilizzabile di consigli e migliorie

Stato: accettato
Data: 2026-10-14
Responsabile: proprietario del template
Autorizzazione: richiesta esplicita del responsabile in chat del 2026-10-14 di implementare nella repository della pipeline consigli finali e migliorie da proporre anche in altri progetti
Supera: nessuno
Superato da: nessuno

## Contesto
Il template governa requisiti e modifiche, ma non guida esplicitamente il passaggio dalla prova di un incremento a un consiglio finale motivato da presentare al cliente. Una raccomandazione può restare in chat o essere scambiata per una funzione approvata. Serve una procedura generica, senza dati o funzionalità del progetto che ha originato la richiesta.

## Alternative
- Lasciare il consiglio alla conversazione: meno documenti, ma scarsa riusabilità e tracciabilità.
- Prescrivere un elenco fisso di funzioni per ogni progetto: rapido ma estraneo alle esigenze specifiche.
- Integrare una valutazione basata su evidenze con scheda, priorità, risposte e rinvio al processo di modifica esistente: più cura, senza ampliare automaticamente lo scope.

## Decisione
Adottare la terza alternativa attraverso [IMPROVEMENT_REVIEW](../IMPROVEMENT_REVIEW.md). Valutare consigli dopo una prova/verifica prima del successivo incremento; nessuna nuova proposta è obbligatoria se mancano evidenze. Integrare istruzioni agli agenti, pianificazione, review e controllo documentale. L'autorizzazione riguarda questa procedura riutilizzabile, non le singole migliorie che un futuro cliente dovrà valutare.

## Conseguenze
Separazione esplicita tra difetti, requisiti adottati e nuove idee; massimo tre priorità consigliate, risposte strutturate con spazio libero, decisioni consolidate prima di sviluppare. Nessuna dipendenza, servizio email, provider, costo, AI nel prodotto o invio automatico. Documenti e CI non sostituiscono l'autorità del responsabile né la revisione delle proposte. Nessuna modifica ai principi o alle responsabilità della costituzione.

## Verifica
Eseguire npm run check e test del controllo documentale, compresa assenza/metadati della nuova guida. In review verificare collegamenti, istruzioni applicabili a settori diversi, assenza di dati cliente e distinzione fra interesse e autorizzazione. Non dichiarare rilasci o merge prima del completamento del processo pertinente.

## Riferimenti
- [Requisito PIPE-IMPROVE-001](../PROJECT_SPEC.md)
- [Politica delle modifiche](../CHANGE_POLICY.md)
- [Revisione](../REVIEW.md)
