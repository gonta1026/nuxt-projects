export const state = () => ({
  title: "タイトルです",
  todos: [{
      id: 1,
      todo: "仕事"
    },
    {
      id: 2,
      todo: "バスケ"
    },
    {
      id: 3,
      todo: "soccer"
    },
    {
      id: 4,
      todo: "ラグビー"
    }
  ],
})

/* computedのプロパティの役割 */

export const getters = {
  totalTodos: state => state.todos.length,
  title: state => state.title
}
