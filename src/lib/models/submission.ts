import mongoose, {Document, model, Schema} from "mongoose";
interface ISubmission extends Document {
    category: string;
    teamName: string;
    url:string;
    score:number;
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
    score: {
        type: Number,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    }
})
const Submission = mongoose.models.Submission || model<ISubmission>('Submission', submissionSchema);
export default Submission;