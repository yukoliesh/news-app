import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  // const retrievedData =  window.localStorage.getItem(key);
  // console.log("retrieved", retrievedData);
  // let newStoreArray;
  // const dataString = JSON.parse(retrievedData);
  // console.log("dataString", dataString);
  // newStoreArray = dataString.push(dataString);
  // newStoreArray = [...dataString, dataString];
  

  // console.log("store", newStoreArray);


  return [storedValue, setValue];
}
