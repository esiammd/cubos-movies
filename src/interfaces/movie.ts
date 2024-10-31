import { GenreProps } from './genre';
import { SpokenLanguagesProps } from './spokenLanguages';

export interface MovieProps {
  id: string;
  title: string;
  original_title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  trailer_key: string;

  genre_ids: number[];
  genres: GenreProps[];

  popularity: number;
  vote_count: number;
  vote_average: number;

  release_date: string;
  runtime: number;
  runtime_formatted: string;
  status: string;
  spoken_languages: SpokenLanguagesProps[];
  languages: string[];

  budget: number;
  revenue: number;
}
