import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Film {
        id: ID,
        name: String,
        img: String,
        genres: [Genre],
        filmType: FilmType,
        filmDetail: FilmDetail
    }

    type Genre {
        id: ID,
        name: String,
    }

    type FilmType {
        id: ID,
        name: String,
    }

    type FilmDetail {
        id: ID,
        total_seasons: String,
        seasons: [Season],
        episode: Episode
    }

    type Season {
        id: ID,
        name: String,
        total_episodes: Int,
        episodes: [Episode]
    }

    type Episode {
        id: ID,
        name: String,
        time: String,
        link_embed: String,
        link_m3u8: String
    }

    type Query {
        hello: String,

        films: [Film]
        film(id: ID): Film

        genres: [Genre]
        genre(id: ID): Genre

        filmTypes: [FilmType]
        filmType(id: ID): FilmType

        filmDetails: [FilmDetail]
        filmDetail(id: ID): FilmDetail

        seasons: [Season]
        season(id: ID): Season

        episodes: [Episode]
        episode(id: ID): Episode
    }

    input EpisodeInput{
        id: String,
        name: String,
        time: String,
        link_embed: String,
        link_m3u8: String
    }

    input GenreInput{
        name: String
    }

    input FilmTypeInput{
        name: String
    }

    input SeasonInput{
        name: String,
        total_episodes: String,
        episodes: [String]
    }

    input FilmDetailInput {
        total_seasons: String,
        seasons: [String],
        episode: String
    }

    input FilmInput {
        name: String,
        img: String,
        genres: [String],
        filmType: String,
        filmDetail: String
    }

    type Mutation{
        createEpisode(input:EpisodeInput): Episode,
        createGenre(input:GenreInput): Genre,
        createFilmType(input:FilmTypeInput): FilmType,
        createSeason(input:SeasonInput): Season,
        createFilmDetail(input:FilmDetailInput): FilmDetail,
        createFilm(input:FilmInput): Film
    }
`;
/*
type Genre {
    id: ID,
    name: String,
    films: [Film]
}
type FilmType {
        id: ID,
        name: String,
        films: [Film]
    }

type Season {
        id: ID,
        name: String,
        total_episodes: Int,
        episodes: [ID]
    }
*/
export default typeDefs