import {
	ADD_MOVIE,
	DELETE_MOVIE,
	DELETE_FAVORITE,
	ADD_MOVIE_LIST,
	HANDLE_CHANGE,
} from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
	movies: movies,
	movie: {
		title: "",
		director: "",
		genre: "",
		metascore: "",
		description: "",
	},
	favorites: [],
	appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_MOVIE:
			return {
				movies: state.movies.filter((item) => action.payload !== item.id),
			};
		case DELETE_FAVORITE: {
			return {
				favorites: state.favorites.filter((item) => action.payload !== item.id),
				...state,
			};
		}
		case ADD_MOVIE:
			const item = state.movies.filter((item) => action.payload === item.id);
			return {
				...state,
				favorites: [...state.favorites, item],
			};
		case ADD_MOVIE_LIST:
			console.log(action.payload);
			return {
				...state,
				movies: [...state.movies, action.payload],
			};
		case HANDLE_CHANGE:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default reducer;
