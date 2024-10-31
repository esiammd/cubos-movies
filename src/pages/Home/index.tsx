import { useCallback, useEffect, useState } from 'react';

import { api } from '../../lib/axios';

import { MovieProps } from '../../interfaces/movie';
import { GenreProps } from '../../interfaces/genre';

import Input from '../../components/Input';
import Pagination from '../../components/Pagination';
import MovieCard from '../../components/MovieCard';
import MovieCardSkeleton from '../../components/MovieCardSkeleton';

import { HomeContainer, Form, MovieList } from './styles';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getGenres = useCallback(async () => {
    const response = await api.get('genre/movie/list');
    return response.data.genres;
  }, []);

  const getMovies = useCallback(async () => {
    setIsLoading(true);

    const [moviesResponse, genresResponse] = await Promise.all([
      api.get('/discover/movie', {
        params: {
          page: currentPage,
        },
      }),
      getGenres(),
    ]);

    const genreMap = Object.fromEntries(
      genresResponse.map((genre: GenreProps) => [genre.id, genre.name]),
    );

    const moviesWithGenres = moviesResponse.data.results.map(
      (movie: MovieProps) => ({
        ...movie,
        genres: movie.genre_ids.map(id => genreMap[id]),
      }),
    );

    setMovies(moviesWithGenres);
    setIsLoading(false);
  }, [currentPage, getGenres]);

  const handleSubmitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const [moviesResponse, genresResponse] = await Promise.all([
        api.get('search/movie', {
          params: {
            query: search,
          },
        }),
        getGenres(),
      ]);

      const genreMap = Object.fromEntries(
        genresResponse.map((genre: GenreProps) => [genre.id, genre.name]),
      );

      const moviesWithGenres = moviesResponse.data.results.map(
        (movie: MovieProps) => ({
          ...movie,
          genres: movie.genre_ids.map(id => genreMap[id]),
        }),
      );
      setMovies(moviesWithGenres);
    },
    [search, getGenres],
  );

  const handleInputChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  );

  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <HomeContainer>
      <header>
        <Form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            placeholder="Pesquise por filmes"
            value={search}
            onChange={handleInputChanges}
            required
          />
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
          totalPages={20}
          onPageChange={handlePageChange}
        />
      </footer>
    </HomeContainer>
  );
};

export default Home;
