Vue.createApp({
    data() {
        return {
        visible: true,
        machin: '',
        machin2: '',
        };
    },
   
    methods: {
        disparitus(){
            this.visible = !this.visible;
        },
    },
    }).mount('#app');