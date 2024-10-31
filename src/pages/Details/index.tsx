import CardInfo from '../../components/CardInfo';
import MovieGenres from '../../components/MovieGenres';
import MovieRating from '../../components/MovieRating';
import MovieSynopsis from '../../components/MovieSynopsis';
import MovieTitle from '../../components/MovieTitle';
import MovieTrailer from '../../components/MovieTrailer';

import {
  DetailsContainer,
  MovieDetails,
  MoviePoster,
  MovieOverview,
  MovieHeader,
  MovieInformation,
  MovieDescription,
  AdditionalMovieInfo,
  MovieAttributes,
  MovieFinancials,
} from './styles';

const Details: React.FC = () => {
  const movie = {
    title: 'Bumblebee',
    originalTitle: 'Bumblebee',
    tagline: 'Todo herói tem um começo.',
    popularity: 42595,
    votes: 5704,
    score: 67,
    synopsis:
      '“Bumblebee” é um filme que se passa em 1987 e conta a história de um Autobot chamado Bumblebee que encontra refúgio em um ferro-velho de uma pequena cidade praiana da Califórnia. Charlie, uma adolescente prestes a completar 18 anos, encontra Bumblebee machucado e sem condições de uso. Quando ela o revive, percebe que este não é qualquer fusca amarelo1. O filme é uma mistura de animação e drama, com um tom leve e divertido, e se destaca por sua ambientação nos anos 80 e pela trilha sonora perfeita2.',
    genres: ['AÇÃO', 'AVENTURA', 'FICÇÃO CIENTÍFICA'],
    releaseDate: '12/20/2018',
    duration: '1h 53m',
    status: 'Lançado',
    language: 'Inglês',
    budget: '$133M',
    revenue: '$467.99M',
    profit: '$332.99M',
    trailerUrl: 'https://www.youtube.com/embed/7GOjNHcGTxk',
  };

  return (
    <DetailsContainer>
      <MovieDetails>
        <MoviePoster
          src="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
          alt={movie.title}
        />

        <MovieOverview>
          <MovieHeader>
            <MovieTitle
              title={movie.title}
              originalTitle={movie.originalTitle}
              tagline={movie.tagline}
            />

            <MovieRating
              popularity={movie.popularity}
              votes={movie.votes}
              score={movie.score}
            />
          </MovieHeader>

          <MovieInformation>
            <MovieDescription>
              <MovieSynopsis synopsis={movie.synopsis} />
              <MovieGenres genres={movie.genres} />
            </MovieDescription>

            <AdditionalMovieInfo>
              <MovieAttributes>
                <CardInfo label="LANÇAMENTO" value={movie.releaseDate} />
                <CardInfo label="DURAÇÃO" value={movie.duration} />
                <CardInfo label="SITUAÇÃO" value={movie.status} />
                <CardInfo label="IDIOMA" value={movie.language} />
              </MovieAttributes>

              <MovieFinancials>
                <CardInfo label="ORÇAMENTO" value={movie.budget} />
                <CardInfo label="RECEITA" value={movie.revenue} />
                <CardInfo label="LUCRO" value={movie.profit} />
              </MovieFinancials>
            </AdditionalMovieInfo>
          </MovieInformation>
        </MovieOverview>
      </MovieDetails>

      <MovieTrailer trailerUrl={movie.trailerUrl} />
    </DetailsContainer>
  );
};

export default Details;
