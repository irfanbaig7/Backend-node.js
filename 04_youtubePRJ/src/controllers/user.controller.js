import { asyncHandler } from "../util/asyncHandler.js"

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Learn backend with chai aur code"
    })
})


export {registerUser}  