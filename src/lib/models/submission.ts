import mongoose, {Document, model, Schema} from "mongoose";
interface ISubmission extends Document {
    category: string;
    teamName: string;
    url:string;
    score:Array<number>;
    reviewCount: number;
    }

const submissionSchema = new Schema<ISubmission>({
    category: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: "None"
    },
    score: [Number],
    reviewCount: {
        type: Number,
        default: 0
    }
})
const Submission = mongoose.models.Submission || model<ISubmission>('Submission', submissionSchema);
export default Submission;