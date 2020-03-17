// constant
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

// action creator
export const toggleFavourite = id => {
  return { type: TOGGLE_FAVOURITE, mealId: id };
};
