// Selectors : sélectionner une partie de notre store

export const getTasks = store => store.tasksList
// Autre façon d'écriture :
// export function getTasks(store) {
//     return store.tasksList
// }
export const getCompletedTasks = store => store.tasksList.filter(task => task.completed)