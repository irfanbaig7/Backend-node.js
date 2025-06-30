import { asyncHandler } from "../util/asyncHandler.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../util/cloudinary.js"
import { apiError } from "../util/apiError"
import { apiResponse } from "../util/apiResponce.js"

const registerUser = asyncHandler( async (req, res) => {

    // get user details from frontend (postman) 

    const {username, fullname, email, password} = req.body
    console.log("Email : " , email);
    


    // validation like can user pass empty anything?

    if (
        [fullname, username, email, password].some((field) => field?.trim() === "")
    ) {
        throw apiError(400, "All field are required")
    }


    // check if user already exist ? how can we check?

    const existedUser = await User.findOne({
        $or : [
            { username },
            { email },
        ]
    })

    if (existedUser) {
        throw new apiError(409, "User with Email or Username already Exists")
    }


    // check images, check avatar specailly

    const avatarLocalPath =  req.files?.avatar[0]?.path;
    const coverImageLocalPath =  req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new apiError(400, "Avatar file is required")
    }


    // uloade theme to cloudinary , we already have for that one utility

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage  = await uploadOnCloudinary(coverImageLocalPath)
     

    if (!avatar) {
        throw new apiError(400, "Avatar file is required!")
    }


    // create a user Object - ceration call entry in DB

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverIamge?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    })

    
    // remove password and refreshToken field from response

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new apiError(500, "Something went Wrong while registering the User")
    }



    // return Response

    return res.status(201).json(
        new apiResponse(200, createdUser, "User Registered Successfully")
    )


 
})


export {registerUser}  