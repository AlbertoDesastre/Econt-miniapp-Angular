export const saveItems = (itemName: string, json: any) => {
  const itemNameOnLocalStorage = localStorage.getItem(itemName);

  if (!itemNameOnLocalStorage) {
    localStorage.setItem('tiny-cities', JSON.stringify(json));
  }
};
