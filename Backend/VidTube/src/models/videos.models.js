/* id string pk
  videoFile Url
  thumbnail Url
  owner objectId users
  title string 
  description string
  duration string 
  views number
  ispublished boolean
  createdAt Date 
  updatedAt Date */
import mongoose  , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile : {
            type : String,
            required : true ,

        },
        thumbnail : {
            type : string ,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        views : {
            type : number,
            default : 0
        },
        duration :{
            type : number,

        },
        isPublished : {
            type : boolean ,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }

    },
    {
        timestamps : true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video" , videoSchema)