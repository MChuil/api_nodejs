import mogoose from "mongoose"

const Storage = new mogoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true //created_at, updated_at
    }
    
)

export default mogoose.model(Storage)
