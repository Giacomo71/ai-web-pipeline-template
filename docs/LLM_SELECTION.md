# Scelta del modello OpenAI per attività

Stato: adottato come guida operativa; raccomandazioni da validare sul compito
Responsabile: proprietario del progetto
Ultima revisione: 2026-10-05

## Scopo
Scegliere modello e ragionamento prima di un incremento della [pipeline](../README.md). La scelta ottimale dipende da qualità richiesta, tempo, frequenza e costo del risultato accettato; non esiste un vincitore universale. La matrice è un adattamento operativo del progetto, non un benchmark OpenAI né una garanzia di prestazioni. L'adozione della procedura è registrata in [ADR-0002](ADR/0002-scelta-llm.md).

## Modelli di riferimento
Alla data di revisione: **GPT-6 Luna** (`gpt-6-luna`) per attività definite e ripetitive; **GPT-6.1 Sol** (`gpt-6.1-sol`) per codice e lavoro complesso con equilibrio tra capacità e costo; **GPT-6 Astra** (`gpt-6-astra`) per i compiti più impegnativi. Fonti: [catalogo API](https://developers.openai.com/api/docs/models) e [modelli in Codex e Work](https://learn.chatgpt.com/docs/models).

## Matrice per la pipeline
Le impostazioni sono punti di partenza del progetto. `low`, `medium`, `high`, `xhigh` indicano il ragionamento, non modelli diversi.

| Utilizzo | Modello iniziale | Ragionamento iniziale | Quando rivalutare |
| --- | --- | --- | --- |
| Refusi, piccole modifiche, estrazione e classificazione con schema chiaro | Luna | low | Ambiguità o più file con dipendenze reciproche: Sol |
| Riassunti strutturati e automazioni frequenti con criteri già definiti | Luna | medium | Informazioni discordanti o perdita di fatti: Sol |
| Brief, requisiti e piano di lavoro da fonti note | Sol | medium | Vincoli incompleti o decisioni difficili da conciliare: Astra |
| Implementazione di funzionalità, test e refactoring tra componenti | Sol | medium | Errori ripetuti o maggiore complessità: high; problemi irrisolti: Astra |
| Revisione approfondita, diagnosi tra sistemi e confronto di alternative | Sol | high | Causa incerta, contratti incompatibili o compromessi strutturali: Astra |
| Architettura complessa, indagini difficili e decisioni con molte fonti | Astra | medium | Analisi ancora insufficiente: high o xhigh |
| Consegna complessa con requisiti rigorosi e molte verifiche | Astra | high | Aumentare a xhigh solo se migliora i criteri misurati |

La distinzione generale e l'invito a confrontare modelli sullo stesso compito derivano dalla [guida ufficiale alla selezione](https://developers.openai.com/api/docs/guides/model-selection). Le associazioni alle fasi della pipeline e i livelli iniziali della tabella sono raccomandazioni del progetto. Un compito breve può essere difficile: valutare ambiguità e dipendenze, non solo lunghezza.

## Procedura prima del lavoro
1. Identificare risultato, fonti, criteri di accettazione e tipo di input/output. Per voce, generazione di immagini o embeddings consultare le sezioni specialistiche del catalogo: questa matrice riguarda testo, codice e analisi.
2. Registrare tipo di attività, modello raccomandato, ragionamento e motivo nella scheda di lavoro o PR. Separare la raccomandazione dal modello effettivamente usato.
3. Verificare che modello, strumenti e impostazioni siano disponibili nel prodotto e nell'account. In Codex il selettore o `/model` consentono la scelta; questa guida e AGENTS.md non cambiano da soli il modello della chat. Gli identificativi API non garantiscono accesso nel selettore. Se non è possibile cambiare modello, dichiarare il limite e procedere con quello disponibile entro il compito autorizzato.
4. Eseguire il compito e le verifiche pertinenti. Una risposta plausibile non equivale a test superati. I gate in [REVIEW](REVIEW.md) valgono per ogni modello.
5. Se i criteri falliscono, correggere prima contesto, fonti e istruzioni; poi confrontare maggiore ragionamento o un modello più capace. Nessuna escalation automatica a servizi a pagamento o nuova integrazione API è configurata.

## Come validare e aggiornare
Usare un piccolo insieme di compiti rappresentativi, gli stessi input e criteri per ogni candidato. Annotare esito, difetti, tempo e costo effettivo o consumo osservabile; se un dato non è disponibile indicarlo come tale. Scegliere l'opzione meno onerosa che soddisfa i criteri, senza sacrificare la qualità richiesta. Non attribuire a questa tabella un'ottimalità dimostrata prima del confronto.

Prima di scegliere in un nuovo lavoro verificare le pagine ufficiali se sono cambiate disponibilità, versioni o capacità; aggiornare data e raccomandazioni quando necessario. I prezzi API e i crediti Codex/Work sono distinti: consultare [prezzi API](https://developers.openai.com/api/docs/pricing) e le condizioni del proprio piano, senza trasferire automaticamente un costo per token a una chat. L'aggiornamento dei documenti non configura abbonamenti, routing o modelli delle automazioni esistenti.

## Scheda da usare in issue o PR
```text
Attività e risultato atteso:
Criteri di accettazione:
Modello raccomandato / ragionamento / motivo:
Modello effettivo e fonte del dato (oppure non verificabile):
Disponibilità e limiti:
Esito delle verifiche:
Tempo / costo o consumo osservato (oppure non disponibile):
Confronto o escalation necessari e motivazione:
```
