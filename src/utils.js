
function findForRemove(arr, name) {
  return arr.find((entity) => entity.name === name);
}

export function remove(arr, entityName) {
  const entity = findForRemove(arr, entityName);
  const index = arr.indexOf(entity);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}