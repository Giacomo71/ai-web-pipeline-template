# Versionamento e rilasci

Stato: adottato per il template
Responsabile: proprietario del progetto
Ultima revisione: 2026-10-02

## Versione del prodotto
La fonte della versione corrente è package.json. Usare MAJOR.MINOR.PATCH:
- MAJOR: cambiamenti incompatibili nel comportamento o nei contratti dichiarati.
- MINOR: nuove funzioni compatibili.
- PATCH: correzioni compatibili e manutenzione senza nuove funzioni.
Prima di 1.0 il prodotto è in sviluppo: gli incompatibili incrementano MINOR, le correzioni PATCH. Documentare comunque ogni incompatibilità. Prerelease consentite, per esempio 0.2.0-rc.1. Il template ha attualmente versione 0.1.0; questo non attesta che sia stato pubblicato un rilascio.

## Contratti e documenti
Versionare separatamente formati persistenti, API, import ed export quando hanno consumatori: per esempio schemaVersion: 1. Dichiarare compatibilità, migrazione, gestione delle versioni sconosciute e ripristino prima di cambiare un contratto. Non imporre un numero di schema a ogni oggetto interno.
I documenti sono versionati da Git: nei documenti di governo usare stato, responsabile e ultima revisione. Evitare copie come «finale2» e numeri indipendenti per ogni Markdown. Gli ADR mantengono identificativo e storia; aggiornarne lo stato con un collegamento alla decisione successiva.

## Procedura di rilascio
1. Selezionare le modifiche verificate in Unreleased e decidere la versione.
2. Aggiornare package.json e il lockfile con lo stesso numero; trasformare le voci selezionate in una sezione CHANGELOG con data reale, lasciando Unreleased per il lavoro successivo.
3. Eseguire npm run check, revisione e verifica delle eventuali migrazioni. Registrare limitazioni e requisiti di installazione.
4. Dopo merge e autorizzazione al rilascio, creare il tag vMAJOR.MINOR.PATCH sul commit verificato e pubblicare le note. Non spostare tag di release già pubblicati.
5. Distribuire se previsto dal progetto. Conservare identificativo del commit, ambiente, esito e modalità di ripristino. Un rollback non annulla automaticamente migrazioni dei dati.

## Tracciabilità
Ogni rilascio collega versione, commit/tag, CHANGELOG e ADR pertinenti. Non inventare release pregresse. Per modifiche non pubblicate usare Unreleased. La CI verifica coerenza formale; non prova da sola l'accettazione del responsabile o il completamento di una pubblicazione.
