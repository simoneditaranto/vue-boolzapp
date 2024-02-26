const {createApp} = Vue;
const {DateTime} = luxon;

createApp({
    data() {
        
        return {

            // definisco il mio array dei contatti
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showInfo: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            showInfo: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            showInfo: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showInfo: false,
                        }
                    ],
                }
            ],

            // memorizzo in una variabile il contatto attuale
            currentIndexElement: 0,

            // memorizzo in una variabile il messaggio scritto dall'utente
            newChatMessage: '',

            // memorizzo in una variabile booleana se un messaggio è stato inviato o meno
            sentNewMessage: false,

            // memorizzo in una variabile la stringa che scrive l'utente per cercare un contatto
            searchContact: '',

            // creo un variabile che mi indica l'indice del messaggio a su cui voglio mostrare la finestrina delle impostazioni
            indexMessageElement: -1,

            // data attuale
            dateNow: 0,

        }



    },

    methods: {

        // metodo che mi restituisce l'indice dell'elemento corrente
        indexNumber(index) {
            
            this.currentIndexElement = index;
            
        },

        // metodo per creare un nuovo messaggio
        createNewMessage(message) {
            if(message.trim() != 0){

                const actualDate = DateTime.now();

                // creo un oggetto di tipo messaggio
                this.newChatMessage = {
                    date: actualDate,
                    message: message,
                    status: 'sent',
                }

                this.contacts[this.currentIndexElement].messages.push(this.newChatMessage);

                this.sentNewMessage = true;
                
                this.newChatMessage = '';
            }
        },

        // metodo che genera una risposta
        createAnswerMessage() {
            // salvo l'indice del contatto corrente in una variabile per evitare (evito l'errore del cambio della chat)
            let index = this.currentIndexElement;

            if(this.sentNewMessage) {

                // imposto a true la proprietà del contatto che mi dice se sta scrivendo un messaggio
                this.contacts[index].isWritingMessage = true;

                setTimeout(() => {

                    const actualDate = DateTime.now();
    
                    this.newChatMessage = {
                        date: actualDate,
                        message: 'ok',
                        status: 'received',
                    }
    
                    this.contacts[index].messages.push(this.newChatMessage);

                    this.newChatMessage = '';

                    // imposto a false la proprietà del contatto che mi dice se sta scrivendo un messaggio
                    this.contacts[index].isWritingMessage = false;

                    this.contacts[index].isOnline = true;

                }, 2000);
            }

            // tengo la scritta "online" dopo l'invio della risposta
            setTimeout(() => {

                this.contacts[index].isOnline = false;       

            }, 4000);

        },

        // metodo che cambia il valore di "visible" a seconda di quello che l'utente scrive nella barra di ricerca
        showContact() {

            this.contacts.forEach(currentContact => {

                if(currentContact.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    currentContact.visible = true;
                } else {
                    currentContact.visible = false;
                }

            })

        },
        // metodo che elminia il messaggio selezionato
        deleteMessage(index) {

            this.contacts[this.currentIndexElement].messages.splice(index, 1);
            this.indexMessageElement = -1;

        },

        // metodo che mi restituisce una data scritta "dd/mm/yyyy "hh:mm"
        formatDate(date) {

            return date.day + "/" + date.month + "/" + date.year + " " + date.hour + ":" + date.minute;
            
        },

        // metodo che mi restituisci la data attuale scritta "dd/mm/yyyy "hh:mm"
        formatActualDate() {

            const now = DateTime.now();
            return now.day + "/" + now.month + "/" + now.year + " " + now.hour + ":" + now.minute;

        },

        // metodo per rimuovere tutti i messaggi di una chat
        deleteAllMessages(index) {

            this.contacts[index].messages.splice(0);

        },

        // metodo per rimuovere l'intera chat
        deleteAllChat(index) {

            // se sto eliminando l'ultimo elemento
            if(index == this.contacts.length - 1) {
                // imposto l'indice dell'elemento corrente all'elemento precedente all'ultimo elemento
                this.currentIndexElement -= 1;
                // elimino l'ultimo elemento dall'array
                this.contacts.pop();
            } else {     
                // elimino l'elemento selezionato   
                this.contacts.splice(index, 1);
            }

        },

        // metodo per creare una nuova chat
        createNewChat() {
            
            const newName = "Andrea";
            const newImage = "./img/avatar_1.jpg"
            const newContact = {
                    name: newName,
                    avatar: newImage,
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    isOnline: false,
                    isWritingMessage: false,
                    settingsDelete: false,
                    messages: [
                       
                    ],
            }

            this.contacts.push(newContact);

        },


    },

    mounted() {

        // allo start della pagina, viene visualizzato il primo elemento della lista dei contatti
        this.indexNumber(0);

        // allo start della pagina prendo tutte le date presenti nell'array e le converto in date gestibili dalla libreria luxon
        this.contacts.forEach(current => {
            current.messages.forEach(currentMessage => {
                currentMessage.date = DateTime.fromFormat(currentMessage.date, "dd/MM/yyyy HH:mm:ss");
            })
        })

        this.dateNow = DateTime.now();
        this.dateNow = this.dateNow.toFormat("dd/MM/yyyy HH:mm:ss");

    },

}).mount("#app");
