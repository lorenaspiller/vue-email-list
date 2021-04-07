/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

var app = new Vue({
  el: '#email-list',
  data: {
    mail: "",
    emailList: [],
  },
  mounted: function() {
    for (var i = 0; i < 10; i++) {
      const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        self.mail = response.data.response;
        self.emailList.push(self.mail);
      });
    }
  }
})
