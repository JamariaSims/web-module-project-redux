export const DELETE_MOVIE = "DELETE_MOVIE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_MOVIE_LIST = "ADD_MOVIE_LIST";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

export const deleteMovie = (id) => {
	console.log("delete");
	return { type: DELETE_MOVIE, payload: id };
};
export const deleteFavorite = (id) => {
	return { type: DELETE_FAVORITE, payload: id };
};
export const addMovie = (id) => {
	console.log("add");
	return { type: ADD_MOVIE, payload: id };
};
export const addMovieList = (load) => {
	return { type: ADD_MOVIE_LIST, payload: load };
};
export const handleAddChange = (load) => {
	console.log(load);
	// return { type: HANDLE_CHANGE, payload: load };
};
