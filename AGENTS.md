# Istruzioni per gli agenti del progetto

## Prima del lavoro
Leggere [costituzione](docs/COSTITUZIONE.md), [brief](docs/CLIENT_BRIEF.md), [specifiche](docs/PROJECT_SPEC.md), [architettura](docs/ARCHITECTURE.md), [design](docs/DESIGN_SYSTEM.md), [politica delle modifiche](docs/CHANGE_POLICY.md), [versionamento](docs/VERSIONING.md), [registro decisioni](docs/DECISION_REGISTER.md) e [attività](docs/TODO.md). Consultare gli ADR pertinenti e le questioni aperte. Per documenti incompleti, distinguere TBD da requisiti adottati.

## Tavolo di lavoro e archivio
La chat è un tavolo di lavoro, il repository è l'archivio ufficiale. Consolidare le decisioni autorizzate nei documenti pertinenti nello stesso cambiamento. Non copiare intere conversazioni, dati personali o credenziali. Nel riepilogo indicare cosa è consolidato e cosa rimane proposto. Istruzioni esplicite del responsabile prevalgono: aggiornare le fonti discordanti, senza richiedere due volte la stessa autorizzazione.

## Modifiche
- Non inventare funzionalità o ampliare il perimetro senza richiesta.
- Classificare il cambiamento e mantenerlo limitato al compito.
- Risolvere autonomamente i dettagli reversibili già delegati.
- Registrare e far accettare le decisioni strutturali prima di implementarle; una proposta non è un'approvazione.
- Usare ADR per scelte durevoli, senza imporli a refusi e correzioni ordinarie.
- Aggiornare specifiche, architettura, registro e CHANGELOG quando coinvolti.
- Evitare dipendenze inutili e preservare le modifiche altrui.

## Verifica e consegna
Eseguire npm run check: documentazione, lint, tipi, test e build. Aggiungere verifiche significative per comportamenti e contratti modificati; non considerare il test aritmetico del template una prova del prodotto. Per cambiamenti visivi fare una revisione pertinente. Dichiarare controlli non eseguiti e limiti. Non dichiarare un rilascio senza versione, note e tag verificato. Non effettuare merge senza revisione e controlli superati; pubblicare quando autorizzato.
