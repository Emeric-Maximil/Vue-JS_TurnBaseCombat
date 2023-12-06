Vue.createApp({
    data() {
        return {
            playerLife: 100,
            opponentLife: 100,
            winner: '',
            tour: 0,

            coundown: 3,
            disableSpecialAttack: true,
            isOnFight : true,
            vainqueur : ',',
        };
    },
   
    
    methods:{
        /**
         * Function that allows the player to deal x lp to his opponent 
         */
        attackAdversaire(){
            if(this.coundown %3 == 1){
                this.disableSpecialAttack = false;
            }else{
                this.coundown--;
            }
            this.tour++; 
            this.opponentLife -= 10;
            this.attackPlayer();
        },
        /**
         * Function that allows the player to deal x lp to his opponent but needs to charge 3 turn
         */
        specialAttackAdversaire(){
            this.disableSpecialAttack = true;
            this.coundown = 3;
            this.tour++;
            this.opponentLife -= 30;
            this.attackPlayer();
        },

        /**
         * The player loses x lp 
         */
        attackPlayer(){
            this.playerLife -= 15;
        
            // Version sans les watchers 
            //______________________________________________________
            // if(this.playerLife <=0 && this.opponentLife <= 0){
            //     this.isOnFight =  false;
            //     this.vainqueur = 'Personne ne gagne';
            // }else if(this.playerLife <= 0){
            //     this.isOnFight =  false;
            //     this.vainqueur = 'Bravo le Mechant !';
            // }else if(this.opponentLife <= 0){
            //     this.isOnFight =  false;
            //     this.vainqueur = 'Bravo le Gentil !';
            // }
            
        },
        /**
         * Function that allows the player to heal 50 hp 
         */
        heal(){
            if(this.coundown %3 == 1){
                this.disableSpecialAttack = false;
            }else{
                this.coundown--;
            }
            if(100 - this.playerLife < 50){
                this.playerLife = 100;
            }else{
                this.playerLife += 50;
            }
            this.attackPlayer();
        }
    },
    //version avec les watchers
    watch:{
        //Check if player s is dead or if both of the players are dead
        playerLife(value){
            if(value <=0 && this.opponentLife <= 0){
                this.isOnFight =  false;
                this.vainqueur = 'Personne ne gagne';
            }else if(value <= 0){
                this.isOnFight =  false;
                this.vainqueur = 'Bravo le Mechant !';
            }
        },
        //Check if the opponent is dead 
        opponentLife(value){
            if(value <= 0){
                this.isOnFight =  false;
                this.vainqueur = 'Bravo le Gentil !';
            }
        },    
    },
    }).mount('#app');