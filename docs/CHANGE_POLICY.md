# Politica delle modifiche

Stato: adottato per il template
Responsabile: proprietario del progetto
Ultima revisione: 2026-10-02

## Classificazione
| Livello | Esempio | Documenti e autorizzazione |
| --- | --- | --- |
| Ordinaria | Errore di validazione, refuso, dettaglio reversibile | Descrizione e verifica; documenti aggiornati se cambiano comportamento. Nessun ADR obbligatorio. |
| Funzionale | Nuovo filtro, schermata o comportamento | Requisito e criteri in PROJECT_SPEC, attività in TODO; responsabile autorizza ampliamenti di scopo. ADR solo se comporta una scelta durevole. |
| Strutturale | Database, privacy, integrazione, contratto dati, costituzione | Impatti e alternative, ADR accettato prima dell'implementazione; aggiornare architettura, specifiche e migrazioni interessate. |

## Ciclo della modifica
1. Registrare motivo, richiesta di origine, ambito e fuori ambito in issue o descrizione della PR. Una richiesta esplicita in chat può avviare il lavoro: consolidarla, senza chiedere una seconda approvazione equivalente.
2. Identificare requisiti, documenti, dati, compatibilità, costi e rischi coinvolti. Se non esistono impatti, scrivere «non applicabile» con una motivazione.
3. Risolvere le decisioni necessarie. Una scelta ancora proposta va in OPEN_QUESTIONS o in un ADR proposto. L'implementatore decide autonomamente i dettagli delegati dalla costituzione.
4. Implementare su branch dedicato con commit leggibili. Non sovrascrivere modifiche altrui e non aggiungere dipendenze senza necessità.
5. Aggiornare nello stesso cambiamento le fonti ufficiali e la voce Unreleased del CHANGELOG, quando la modifica interessa gli utilizzatori del template o del prodotto.
6. Eseguire il quality gate e la revisione pertinente. Riportare esiti reali, controlli omessi e limiti.
7. Aprire una PR, raccogliere revisione e integrare dopo i controlli. Preparare un rilascio distinto dal merge.

## Scheda minima
- Motivo e risultato atteso.
- Livello: ordinaria / funzionale / strutturale.
- Requisiti e criteri di accettazione coinvolti.
- Impatti su dati, compatibilità, privacy, dipendenze e costi.
- ADR o motivazione della sua assenza.
- Documenti aggiornati.
- Verifiche e risultati.
- Strategia di ripristino; migrazione se necessaria.
- Versione prevista e stato della revisione.

## Urgenze e conflitti
Un'urgenza può ridurre l'ambito, non falsificare verifiche o autorizzazioni. Per una correzione urgente documentare impatti, test minimi, ripristino e attività residue. I conflitti tra chat, documenti e codice vanno resi espliciti. Conservare la storia: non riscrivere un ADR accettato per far sembrare originaria una nuova decisione.
