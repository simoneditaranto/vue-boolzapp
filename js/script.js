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
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    stage: 'Hey there im using Bolzapp!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
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
            let index = this.currentIndexElement;
            if(this.sentNewMessage) {
                setTimeout(() => {

                    const actualDate = DateTime.now();
    
                    this.newChatMessage = {
                        date: actualDate,
                        message: 'ok',
                        status: 'received',
                    }
    
                    this.contacts[index].messages.push(this.newChatMessage);
    
                    this.newChatMessage = '';

                }, 1000)
            }
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

        // metodo che mi fa mostrare o meno la finestra delle impostazioni dei messaggi
        showInfoMessage(index) {
            
            this.indexMessageElement == index ? this.indexMessageElement = -1 : this.indexMessageElement = index;

        },

        // metodo che elminia il messaggio selezionato
        deleteMessage(index) {

            this.contacts[this.currentIndexElement].messages.splice(index, 1);
            this.indexMessageElement = -1;

        }

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
