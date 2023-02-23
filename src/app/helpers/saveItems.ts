export const saveItems = (itemName: string, json: any) => {
  const itemNameOnLocalStorage = localStorage.getItem(itemName);

  if (!itemNameOnLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(json));
  }
};
