# Mail e Gioco dei dadi

## Traccia

**Mail**

- Chiedi all’utente la sua email,
  controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato sull’esito del controllo.

**Gioco dei dadi**

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  Stabilire il vincitore, in base a chi fa il punteggio più alto.

### Consigli

**Prima di partire a scrivere codice poniamoci qualche domanda:**

Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

**Consigli del giorno:**

1. per primo consegnamo sempre il file in markdown con la logica che vogliamo seguire
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

## Istruzioni

**MAIL**

- Chiedo all'utente di scrivere la sua email

  - Creo un valore **_email Utente_**

- Creo una lista delle email accettate

  - creo una lista con varie mail per esempio **_email accettate_** :
  - admin@gmail.com
  - user@gmail.com
  - guest@gmail.com

- **SE** **_email Utente_** = a un valore nella lista **_email accettate_**
  - stampiamo un messaggio: **"Email accettata correttamente"**
- **Altrimenti**
  - stampiamo un messaggio: **"Email non accettata, inserire una email corretta"**

**GIOCO DEI DADI**

- Creo un valore giocatore:

  - giocatore **_player Utent_**

- Creo un valore giocatore:

  - giocatore **_player PC_**

- Genero automaticamente due numeri casuali dal 1 al 6

  - Creo un valore per un numero casuale: **_number Utent_**
  - Creo un valore per un numero casuale: **_number PC_**

- **SE** **_number Utent_** > **_number PC_**

  - stampo messaggio: **"Vincitore _player Utent_"**

- **ALTRIMENTI SE** **_number Utent_** = **_number PC_**

  - stampo messaggio: **"Pareggio"**

- **ALTRIMENTI**
  - stampo messaggio: **"Vincitore _player PC_"**
