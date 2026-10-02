# Esempio sintetico — decisione proposta

Stato: esempio, non adottato
Responsabile: fittizio
Ultima revisione: 2026-10-02

## Scenario
Una piccola applicazione dimostrativa deve conservare preferenze sullo stesso browser. REQ-EX-01 richiede persistenza dopo ricarica; la sincronizzazione tra dispositivi è fuori ambito.

## ADR-EX — Persistenza delle preferenze
Stato della proposta: proposto. Alternative: memoria di sessione, storage locale, backend condiviso. Proposta: storage locale versionato, perché soddisfa il perimetro senza backend. Conseguenze: nessuna sincronizzazione e possibile perdita cancellando i dati del browser. Nessuna approvazione o implementazione è implicita in questo esempio.

## Scheda della modifica
Livello: strutturale. Motivo: soddisfare REQ-EX-01. Impatti: nuovo contratto schemaVersion: 1, dati limitati a preferenze non sensibili. Documenti: specifiche, architettura, ADR e CHANGELOG. Criteri: persistenza dopo ricarica, gestione del dato malformato e di versioni sconosciute. Verifica: test su tali casi. Ripristino: rimozione della funzione senza toccare altri dati.

## Consolidamento e versione
Dopo autorizzazione, il progetto reale accetta un ADR numerato, aggiorna il registro e implementa. Registra la funzione in Unreleased; al rilascio sceglie il numero secondo VERSIONING e collega tag e commit. Non aggiungere questo scenario alle specifiche del template.
