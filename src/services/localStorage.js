export const loadStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (error) {
    console.log("the error", error);
    return undefined;
  }
};

export const saveStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log("the error", error);
  }
};
