# Consigli finali e migliorie da proporre al cliente

Stato: modello operativo da compilare per ogni progetto
Responsabile: responsabile del progetto con implementatore e revisore
Ultima revisione: 2026-10-14

## Scopo e momento della valutazione

Dopo la prova di un prototipo o la verifica di un incremento, e prima di pianificare il successivo, valutare se esistono consigli utili da presentare al cliente. Riesaminare anche quando arriva un problema d'uso concreto. Non produrre nuove funzioni per riempire una lista: «nessuna miglioria giustificata dalle evidenze disponibili» è un esito valido.

Questa è una fase del processo di sviluppo, non un modulo AI da inserire nel prodotto. Si applica a siti, app e altri progetti derivati senza prescrivere funzioni, settore, piattaforma o fornitori. Non sostituisce la correzione di difetti, i criteri già approvati o le priorità del cliente.

## 1. Leggere le evidenze

- Rileggere brief, specifiche, questioni aperte e riscontri delle prove; identificare utente, attività e difficoltà concreta.
- Separare fatti verificati, segnalazioni del cliente, ipotesi da verificare e proposte dell'implementatore.
- Classificare ogni voce: difetto rispetto a un requisito adottato; dettaglio reversibile già delegato; requisito adottato ma non implementato; nuova miglioria da approvare. Non trattare tutto come nuovo scope.
- Evitare di chiedere nuovamente scelte già confermate. Una richiesta di chiarimento deve indicare il dato realmente mancante o il contrasto, non cancellare la risposta precedente.

## 2. Valutare benefici, priorità e conseguenze

Per ogni consiglio registrare: problema e fonte, destinatario, beneficio atteso (non garantito), criterio di successo osservabile, sforzo/dipendenze e rischi. Considerare usabilità/accessibilità, affidabilità, sicurezza dei dati e gestione operativa soltanto quando pertinenti. Se costi o fattibilità non sono noti, indicare «da stimare», senza inventare importi o prestazioni.

Usare priorità motivate «prima / dopo / da valutare», senza punteggi fittizi. Considerare gravità e frequenza della difficoltà, obiettivi del cliente, dipendenze e impegno richiesto. L'ordine del consiglio non è automaticamente l'ordine tecnico di implementazione.

## 3. Formulare il consiglio finale

Concludere con al massimo tre priorità motivate e con ciò che conviene rinviare. Esplicitare:

1. Quale risultato quotidiano migliora e per chi.
2. Che cosa è già presente, simulato o ancora da realizzare.
3. Quali decisioni o verifiche servono prima di sviluppare.
4. Che cosa non viene cambiato delle priorità e dei vincoli già approvati.

Non promettere risparmio, vendite, conformità o compatibilità non verificati. Usare esempi soltanto se etichettati come esempi; non trasferire dati o raccomandazioni specifiche da un cliente a un altro.

## 4. Scheda riutilizzabile per il cliente

Copiare la scheda per ciascuna proposta mantenendo un ID stabile, per esempio MIG-001. Nessuna scheda è già compilata per il nuovo progetto.

```text
ID / titolo:
Categoria (difetto / dettaglio delegato / requisito adottato / nuova proposta):
Problema o esigenza e fonte/data:
Fatti verificati / ipotesi da verificare:
Utente interessato e beneficio atteso:
Soluzione proposta e alternativa più semplice (anche non intervenire):
Priorità consigliata e motivazione:
Criterio di successo verificabile:
Sforzo, dipendenze e fattibilità (oppure da stimare):
Impatti su dati, accessi, privacy, costi e compatibilità:
Decisioni ancora necessarie:
Consiglio finale e fuori ambito:

Risposta del cliente:
A — Utile, vorrei approfondire.
B — Utile, ma più avanti.
C — Non necessaria.
D — Preferisco una soluzione diversa (descrivere).
E — Mi servono chiarimenti / non so ancora decidere.
Osservazioni libere:
Eventuali priorità scelte dal cliente (fino a tre):
```

A significa interesse, non approvazione di sviluppo, costi o servizi. B non è un impegno con una scadenza; C non elimina requisiti già adottati senza una decisione esplicita. Se il cliente autorizza direttamente un ambito preciso, registrare quella decisione senza richiedere una seconda autorizzazione equivalente. Le domande tecniche ambigue possono avere alternative specifiche oltre alle risposte di interesse: esplicitare effetti e lasciare spazio al testo libero.

Per prove pratiche usare una sezione separata (riuscita / poco chiara / non riuscita / non provata), con azione e risultato atteso. Non interpretare una prova riuscita come consenso a una nuova funzione.

### Testo finale adattabile

```text
In base a [evidenze], consigliamo di approfondire [fino a tre ID],
perché [benefici e dipendenze]. Rinvierei [ID/motivo].
Queste sono proposte, non funzioni già disponibili né costi approvati.
Restano confermati [priorità/vincoli]. Prima di sviluppare servono
[decisioni e criteri]. Puoi indicare la tua preferenza e aggiungere note.
```

Preparare il testo non autorizza a inviarlo. Email, pubblicazioni e messaggi a terzi richiedono una richiesta esplicita con destinatario e scopo, secondo il workflow disponibile. Se è chiesto l'invio, verificare l'esito e registrare un riferimento non sensibile; altrimenti consegnare una bozza. Non inserire in repository pubblici indirizzi personali, credenziali, URL con token o trascrizioni integrali.

## 5. Registro ed esiti

Compilare nel progetto, senza righe dimostrative scambiate per approvazioni:

| ID | Fonte / requisito | Priorità proposta | Stato | Risposta e data | Decisione / autorità | Prossimo passo / riferimento |
| --- | --- | --- | --- | --- | --- | --- |

Stati utili: proposta → presentata → da chiarire / rinviata / non adottata / approvata nel perimetro. Dopo autorizzazione e pianificazione, collegare gli stati implementata, verificata, pubblicata (se applicabile), validata dal cliente, senza confonderli tra loro. Conservare una proposta respinta o rinviata con motivazione; non riutilizzarne l'ID.

Per ciascuna risposta registrare sintesi fedele, data e fonte autorizzata; non dedurre risposte assenti o trasformare il silenzio in consenso. Per casi contrastanti mantenere lo stato «da chiarire» e collegare [OPEN_QUESTIONS](OPEN_QUESTIONS.md).

## 6. Rientro nella pipeline

1. Collegare le evidenze e l'esito della valutazione a questa scheda o a un documento derivato. Anche un esito senza proposte va motivato brevemente.
2. Consolidare le scelte autorizzate in [PROJECT_SPEC](PROJECT_SPEC.md) con ID e criteri, aggiornare [ROADMAP](ROADMAP.md) e [TODO](TODO.md). Le proposte non approvate non diventano requisiti adottati.
3. Classificare con [CHANGE_POLICY](CHANGE_POLICY.md). Per decisioni durevoli usare un ADR accettato prima dell'implementazione; aggiornare architettura e design quando interessati. Non richiedere ADR per ogni piccolo consiglio.
4. Per nuovi costi, dati, integrazioni o accessi acquisire le decisioni necessarie, senza attivazioni automatiche. Verificare autorizzazioni e dipendenze prima delle parti coinvolte.
5. Applicare [LLM_SELECTION](LLM_SELECTION.md), sviluppare il solo incremento autorizzato e passare il quality gate e [REVIEW](REVIEW.md). Poi PR, revisione e merge con controlli riusciti; versione/rilascio e deploy solo quando pertinenti e autorizzati.

La CI controlla esistenza, metadati e link di questa guida; non giudica l'utilità delle proposte e non autentica le approvazioni. La qualità del consiglio e la sua fedeltà al cliente richiedono revisione umana.
