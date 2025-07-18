export interface MovieSummaryWithGenre {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  genre_name?: string[]; 
  overview?: string;
}
