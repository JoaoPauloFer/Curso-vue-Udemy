Vue.component('tarefa', {
    template: '<li> <slot></slot> </li>',
})

new Vue({
    el: '#root'
})