export const selectLibrary = (libraryID) => {
  return {
    type:'select_library',
    payload: libraryID
  };
};
