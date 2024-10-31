import { GenreProps } from './genre';

export interface MovieProps {
  id: string;
  title: string;
  original_title: string;
  tagline: string | null;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  trailer_key: string;

  genre_ids: number[];
  genre_names: string[];
  genres: GenreProps[];

  popularity: number;
  vote_count: number;
  vote_average: number;

  release_date: string;
  runtime: number | null;
  runtime_formatted: string;
  status: string;
  spoken_languages: {
    name: string;
  }[];
  languages: string[];

  budget: number;
  revenue: number;
}
