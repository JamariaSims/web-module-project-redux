import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
	movies: movies,
	favorites: [],
	appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case DELETE_MOVIE:
			return {
				movies: state.movies.filter((item) => action.payload !== item.id),
			};
		case ADD_MOVIE:
			const item = state.movies.filter((item) => action.payload === item.id);
			initialState.favorites.push(item);
			console.log(initialState);
			return {
				movies: state.movies,
				favorites: initialState.favorites,
			};
		default:
			return state;
	}
};

export default reducer;
