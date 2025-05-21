import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req , res)=>{
   const {fullname , email , username , password} = req.body 

   if([fullname , email , username , password].some((field)=>{
    return field?.trim()===""
   })){
        throw new ApiError(400, 'All fields required')
   }

    const existingUser = await User.findOne({
     $or:  [ {username} , {email}]
   })

   if (existingUser){
        throw new ApiError(401, 'User Already Exist')
   }

   const avatarlocalPath = req.files?.avatar?.[0]?.path
   const coverlocalPath = req.files?.coverImage?.[0]?.path

   if (!avatarlocalPath) {
        throw new ApiError(402, 'Avatar File Missing')
   }
   if (!coverlocalPath) {
        throw new ApiError(403, 'Cover Image Missing')
   }

   const avatar = await uploadOnCloudinary(avatarlocalPath)
   let cover = ""
   if (coverlocalPath) {
        cover = await uploadOnCloudinary(coverlocalPath)
   }

   const newUser = await User.create({
    fullname,
    avatar : avatar.url,
    cover: cover?.url || "",
    email,
    password,
    username : username.toLowerCase()
   })

   const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
   )
   if (!createdUser){
    throw new ApiError(499, "Internal Server Error")
   }

   return res 
   .status(201)
   .json(new ApiResponse(200 , createdUser , "User Registered Sucessfully"))
})



export {registerUser}
