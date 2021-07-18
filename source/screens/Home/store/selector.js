export const getUser = state => {
  let userData = {};
  if (state.home.usersList && Array.isArray(state.home.usersList)) {
    const filterData = state.home.usersList.filter(obj => {
      return obj.id === state.home.userId;
    });
    if (Array.isArray(filterData) && filterData.length > 0) {
      userData = filterData[0];
    }
  }
  return userData;
};
