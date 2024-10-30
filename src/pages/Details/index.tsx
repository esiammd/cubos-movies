import CardInfo from '../../components/CardInfo';
import MovieGenres from '../../components/MovieGenres';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';
import MovieSynopsis from '../../components/MovieSynopsis';
import MovieTitle from '../../components/MovieTitle';
import MovieTrailer from '../../components/MovieTrailer';

import {
  DetailsContainer,
  MovieDetails,
  MovieOverview,
  MovieHeader,
  MovieInformation,
  MovieDescription,
  AdditionalMovieInfo,
  MovieAttributes,
  MovieFinancials,
} from './styles';

const Details: React.FC = () => {
  const movieData = {
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
          alt="Poster"
        />

        <MovieOverview>
          <MovieHeader>
            <MovieTitle
              title={movieData.title}
              originalTitle={movieData.originalTitle}
              tagline={movieData.tagline}
            />

            <MovieRating
              popularity={movieData.popularity}
              votes={movieData.votes}
              score={movieData.score}
            />
          </MovieHeader>

          <MovieInformation>
            <MovieDescription>
              <MovieSynopsis synopsis={movieData.synopsis} />
              <MovieGenres genres={movieData.genres} />
            </MovieDescription>

            <AdditionalMovieInfo>
              <MovieAttributes>
                <CardInfo label="LANÇAMENTO" value={movieData.releaseDate} />
                <CardInfo label="DURAÇÃO" value={movieData.duration} />
                <CardInfo label="SITUAÇÃO" value={movieData.status} />
                <CardInfo label="IDIOMA" value={movieData.language} />
              </MovieAttributes>

              <MovieFinancials>
                <CardInfo label="ORÇAMENTO" value={movieData.budget} />
                <CardInfo label="RECEITA" value={movieData.revenue} />
                <CardInfo label="LUCRO" value={movieData.profit} />
              </MovieFinancials>
            </AdditionalMovieInfo>
          </MovieInformation>
        </MovieOverview>
      </MovieDetails>

      <MovieTrailer trailerUrl={movieData.trailerUrl} />
    </DetailsContainer>
  );
};

export default Details;
