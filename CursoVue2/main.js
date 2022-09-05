Vue.component('lista-tarefas', {

    template: '<div><tarefa v-for="tarefa in tarefas"> {{ tarefa.descricao }} </tarefa></div>',

    data() {
        return {
            tarefas:[
                { descricao: 'Ir ao Banco no Brasil' },
                { descricao: 'Ir gravar as aulas' },
                { descricao: 'Ir para a aula de inglês' }
            ]
        }
    }
})


Vue.component('tarefa', {
    template: '<li> <slot></slot> </li>',
})

new Vue({
    el: '#root'
})