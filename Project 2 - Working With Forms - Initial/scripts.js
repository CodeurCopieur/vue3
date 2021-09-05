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
            this.members.push(this.newMembers)
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
