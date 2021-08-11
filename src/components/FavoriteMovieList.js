import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { deleteFavorite } from "../actions/movieActions";
const mapStateToProps = (state) => {
	return {
		favorites: state.favorites,
	};
};
const FavoriteMovieList = (props) => {
	const { favorites } = props;
	const List = [];
	favorites.map((item) => {
		item.map((movie) => {
			List.push(movie);
		});
	});
	const deleteFavorite = (e) => {
		e.preventDefault();
		props.deleteFavorite(e.target.id);
	};
	return (
		<div className="col-xs savedContainer">
			<h5>Favorite Movies</h5>
			{List.map((movie, index) => {
				return (
					<div key={movie.id}>
						<Link
							className="btn btn-light savedButton"
							to={`/movies/${movie.id}`}
						>
							{movie.title}
							<span>
								<span
									id={index}
									class="material-icons"
									onClick={deleteFavorite}
								>
									remove_circle
								</span>
							</span>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default connect(mapStateToProps, { deleteFavorite })(FavoriteMovieList);
