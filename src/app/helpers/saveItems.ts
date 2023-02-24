export const saveItems = (itemName: string, json: any) => {
  const itemNameOnLocalStorage = localStorage.getItem(itemName);

  if (!itemNameOnLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(json));
  }
};

export const saveItemsForced = (itemName: string, json: any) => {
  if (localStorage.getItem(itemName)) {
    localStorage.removeItem(itemName);
  }
  localStorage.setItem(itemName, JSON.stringify(json));
};
