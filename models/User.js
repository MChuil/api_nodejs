import mogoose from "mongoose"


const userSchema = new mogoose.Schema(
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

//TODO: pendiente eliminación logica

const User = mogoose.model('User', userSchema)

export default User
