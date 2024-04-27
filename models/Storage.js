import mogoose from "mongoose"


const storageSchema = new mogoose.Schema(
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

//TODO: pendiente eliminación logica

const Storage = mogoose.model('Storage', storageSchema)

export default Storage
