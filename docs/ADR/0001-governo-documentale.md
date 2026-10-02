# ADR-0001 — Governo documentale e repository come archivio ufficiale

Stato: accettato
Data: 2026-10-02
Responsabile: proprietario del template
Autorizzazione: richiesta esplicita del proprietario di aggiungere costituzione, ADR, politica delle modifiche e versioni
Supera: nessuno
Superato da: nessuno

## Contesto
Il template disponeva di documenti iniziali e controlli CI, ma non di una gerarchia delle fonti, ciclo di vita degli ADR o politica dei rilasci. Le decisioni discusse in chat rischiavano di non comparire nelle fonti versionate.

## Alternative
- Lasciare le decisioni nelle conversazioni: avvio rapido, scarsa tracciabilità futura.
- Usare un registro unico senza ADR: semplice, ma difficile conservare alternative e sostituzioni.
- Separare costituzione, specifiche, ADR e rilasci nel repository: più cura documentale, responsabilità e storia verificabili.

## Decisione
Adottare la terza opzione. La chat è il tavolo di lavoro; le fonti ufficiali sono i documenti versionati del repository. Mantenere CLIENT_BRIEF come nome del brief esistente; non duplicarlo con PROJECT_BRIEF. Il vecchio DECISIONS diventa un rimando al registro ADR.

## Conseguenze
Ogni decisione pertinente deve essere consolidata; le modifiche strutturali richiedono un ADR accettato. I controlli automatici verificano forma e coerenza, non sostituiscono la revisione. Gli esempi restano separati dalle decisioni attive. Non sono introdotti servizi esterni o pubblicazioni automatiche.

## Verifica
Eseguire il controllo documentale e i suoi test. In revisione verificare ruoli delle fonti, tracciabilità e assenza di nuove approvazioni per lavoro già autorizzato.

## Riferimenti
- [Costituzione](../COSTITUZIONE.md)
- [Politica delle modifiche](../CHANGE_POLICY.md)
- [Versionamento](../VERSIONING.md)
