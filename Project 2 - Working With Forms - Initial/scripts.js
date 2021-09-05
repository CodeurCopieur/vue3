members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members,
            newMembers: {}
        }
    },
    methods: {
        addMember() {
            if (this.newMembers.fname && this.newMembers.lname && this.newMembers.instrument) {
                this.members.push(this.newMembers);
                this.newMembers = {};
            } else {
                alert('ils faut saisir tous les champs !')
            }
            
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
