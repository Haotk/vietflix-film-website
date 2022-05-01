import mongoose from "mongoose";
const filmDetailSchema = new mongoose.Schema({
    total_seasons: {
        type: String
    },
    seasons: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'season',}],
        default : undefined
    },
    episode: {
        type: mongoose.Schema.Types.ObjectId, ref: 'episode',
    }
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const FilmDetail = mongoose.model('film_detail', filmDetailSchema);
export default FilmDetail;