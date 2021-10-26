const app = Vue.createApp({

  //template: '<h2>Je suis un template</h2>',
  data() {
    return {
      x: 0,
      y: 0,
      books: [
        {
          title: 'name of the wind', author: 'patrick', img: 'https://vignette.wikia.nocookie.net/onepiece/images/8/89/Wiki-wordmark.png/revision/latest?cb=20180401015943&path-prefix=fr', isFav: true
        },
        {
          title: 'the way of kings', author: 'ben', img: 'https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s88-c-k-c0xffffffff-no-rj-mo', isFav: false
        },
        {
          title: 'the final empire', author: 'stan', img: 'https://vignette.wikia.nocookie.net/onepiece/images/8/89/Wiki-wordmark.png/revision/latest?cb=20180401015943&path-prefix=fr', isFav: true
        }
      ],
      url:'https://codwerk.github.io/',
      textBrut: 'textBrut',
      textHTML: '<h1>textHTML</h1>',
      multi: '',
      selection: '',
      hms: '',
      checkedNames: [],
      picked: '',
      valeur: 300
    }
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);
      if(data) {
        console.log(data);
      }

    },
    handleMousemove({offsetX, offsetY}) {
      this.x = offsetX,
      this.y = offsetY
    },
    toggleClasses(book){
      book.isFav = !book.isFav;
    },
    actionChild(ev){
      console.log('event traite dans lenfant');
      //ev.preventDefault();
      ev.stopPropagation();
    },
    actionParent(){
      console.log('event traite dans le parent');
    },
    largeur(lar) {
      this.valeur = lar;
    }
  },
  computed: {
    filtered() {
      return this.books.filter( book => book.isFav )
    }
  }
});

let vm = app.mount('#app');
/*setInterval( ()=> {
  let d = new Date().toLocaleTimeString();
  vm.hms = d
}, 1000)*/