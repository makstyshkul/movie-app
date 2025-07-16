export interface MovieSummary {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  original_language: string;
  popularity: number;
}

export interface MovieSummaryWithGenre extends MovieSummary {
  genre_name: string[];
}
