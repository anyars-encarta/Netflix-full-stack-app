import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array }
},
    { timestamps: true }
);

const List = mongoose.model('List', ListSchema);
export default List;