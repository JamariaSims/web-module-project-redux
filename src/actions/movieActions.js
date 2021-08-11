export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
	console.log("delete");
	return { type: DELETE_MOVIE, payload: id };
};
export const addMovie = (id) => {
	console.log("add");
	return { type: ADD_MOVIE, payload: id };
};
