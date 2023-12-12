// compareAndLoadFromStorage.js
import { DefaultValue } from 'recoil';

export const compareAndLoadFromStorage = ({ key, setSelf, getSelf }) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null) {
    const parsedSavedValue = JSON.parse(savedValue);

    if (parsedSavedValue !== undefined && parsedSavedValue !== null) {
      const currentAtomValue = getSelf();
      if (currentAtomValue !== parsedSavedValue) {
        setSelf(parsedSavedValue);
      }
    } else {
      setSelf(new DefaultValue());
    }
  }
};

