export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter(todo => todo.id != action.payload.id);
    case 'toggle':
      return state.map(todo => {
        if (todo.id == action.payload.id){
          console.log(todo);
          return {...todo, done: !todo.done};
        }
        return todo;
      });
    default:
      return state;
  }
};
