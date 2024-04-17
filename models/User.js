import mogoose from "mongoose"

const User = new mogoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email:{
            type:String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: ["user", "admin"],
            default: "user"
        }

    },
    {
        timestamps: true //created_at, updated_at
    }
    
)

export default mogoose.model(User)
