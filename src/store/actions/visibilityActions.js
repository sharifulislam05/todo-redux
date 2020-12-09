export const VISIBILITY = "VISIBILITY";
export const setVisibilityFilter = (filter) => {
  return {
    type: "VISIBILITY",
    payload: filter,
  };
};
