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
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


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

userSchema.pre("save" , async function (next){
   if (!this.modified("password")) return next()
    this.password = bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function () {
    // short lived access token 
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn : process.env.ACCESS_TOKEN_EXPIRY}
    )
}

userSchema.methods.generateRefreshToken = function () {
    // long lived access token 
    jwt.sign({
        _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn : process.env.REFRESH_TOKEN_EXPIRY}
    )
}

export const User = mongoose.model("User" , userSchema)