  /*
  id string pk
  Username string 
  password string 
  Email string
  FullName String
  WatchHistory objectId[] Videos
  avatar string 
  coverImage string
  refreshToken string
  createdAt Date 
  updatedAt Date
  */
import mongoose , { Schema, SchemaTypes } from "mongoose";

const userSchema = new Schema (
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            index : true,
            trim : true
        },

        email : {
            type : string,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },

        fullname : {
            
            type : string,
            required : true,
            trim : true,
            index : true
        },
        avatar : {
            type : string,
            required : true
        },
        coverImage : {
            type : string,
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Videos"
        }
        ],
        password : {
            type : string,
            required : [true , "Password is required"]
        },
        refreshToken : {
            type : string
        }
    },
    {timestamps : true}
)

export const User = mongoose.model("User" , userSchema)