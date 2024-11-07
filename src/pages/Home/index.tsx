import { useCallback, useEffect, useState } from 'react';

import { api } from '../../lib/axios';

import usePersistedState from '../../hooks/usePersistedState';

import { MovieProps } from '../../interfaces/movie';
import { GenreProps } from '../../interfaces/genre';

import Input from '../../components/Input';
import FilterIcon from '../../components/FilterIcon';
import Pagination from '../../components/Pagination';
import MovieCard from '../../components/MovieCard';
import MovieCardSkeleton from '../../components/MovieCardSkeleton';

import {
  HomeContainer,
  Form,
  FormHeader,
  FilterButton,
  GenreCheckboxes,
  MovieList,
} from './styles';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [genreMap, setGenreMap] = useState<Record<number, string>>({});
  const [search, setSearch] = usePersistedState<string>('search', '');
  const [checkedItems, setCheckedItems] = usePersistedState<
    Record<string, boolean>
  >('checkedGenres', {});
  const [currentPage, setCurrentPage] = usePersistedState<number>(
    'currentPage',
    1,
  );
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowGenreCheckboxes, setIsShowGenreCheckboxes] = useState(false);

  const handleCheckedItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });
  };

  const getMovies = useCallback(async () => {
    setIsLoading(true);

    const selectedGenres = Object.entries(checkedItems)
      .filter(([, isChecked]) => isChecked)
      .map(([genreId]) => genreId)
      .join(',');

    const response = await api.get(
      search ? '/search/movie' : '/discover/movie',
      {
        params: {
          page: currentPage,
          query: search,
          with_genres: selectedGenres,
        },
      },
    );

    const moviesWithGenres = response.data.results.map((movie: MovieProps) => ({
      ...movie,
      genres: movie.genre_ids ? movie.genre_ids.map(id => genreMap[id]) : [],
    }));

    setMovies(moviesWithGenres);
    setTotalPages(response.data.total_pages);
    setIsLoading(false);
  }, [checkedItems, currentPage, genreMap, search]);

  const handleSubmitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      getMovies();
      setCurrentPage(1);
    },
    [getMovies, setCurrentPage],
  );

  const handleInputChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      setCurrentPage(1);
    },
    [setCurrentPage, setSearch],
  );

  const handleShowGenreCheckboxes = useCallback(() => {
    setIsShowGenreCheckboxes(state => !state);
  }, []);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
    },
    [setCurrentPage],
  );

  useEffect(() => {
    const getGenres = async () => {
      const response = await api.get('genre/movie/list');
      const genres = response.data.genres;

      const mappedGenres = Object.fromEntries(
        genres.map((genre: GenreProps) => [genre.id, genre.name]),
      ) as Record<number, string>;
      setGenreMap(mappedGenres);
    };

    getGenres();
  }, []);

  useEffect(() => {
    if (Object.keys(genreMap).length > 0) {
      getMovies();
    }
  }, [genreMap, getMovies]);

  return (
    <HomeContainer>
      <header>
        <Form onSubmit={handleSubmitForm}>
          <FormHeader>
            <Input
              type="text"
              placeholder="Pesquise por filmes"
              value={search}
              onChange={handleInputChanges}
            />
            <FilterButton
              type="button"
              title="Filtro de gêneros"
              onClick={handleShowGenreCheckboxes}
            >
              <FilterIcon />
            </FilterButton>
          </FormHeader>

          {isShowGenreCheckboxes && (
            <GenreCheckboxes>
              {Object.entries(genreMap).map(([id, name]) => (
                <label key={id} className="custom-checkbox">
                  <input
                    type="checkbox"
                    value={id}
                    checked={checkedItems[id] || false}
                    onChange={handleCheckedItems}
                  />
                  <span className="checkmark"></span>
                  {name}
                </label>
              ))}
            </GenreCheckboxes>
          )}
        </Form>
      </header>

      <MovieList>
        {isLoading
          ? Array(20)
              .fill(null)
              .map((_, index) => <MovieCardSkeleton key={index} />)
          : movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </MovieList>

      <footer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </footer>
    </HomeContainer>
  );
};

export default Home;
