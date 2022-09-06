Vue.component('message', {
    // props: ['title', 'body'],
  
    data() {
      return {
        visible: true
      };
    },
  
    template: `
        <article class="message" v-show="visible">
            <div class="message-header">
                <p>Olá mundo, Código refinado!</p>
                <button class="delete" @click="hideMessage"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
                placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem
                eget, facilisis sodales sem.
            </div>
        </article>
      `,
  
    methods: {
      hideMessage(){
        this.visible = false;
      }
    }
  
  
  });
  
  
  new Vue({
    el: '#root'
  });