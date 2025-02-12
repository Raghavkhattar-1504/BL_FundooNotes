import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        isTrashed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default model('Note', noteSchema);
