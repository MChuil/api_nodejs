import mogoose from "mongoose"

const Track = new mogoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: Number
        },
        cover:{
            type:String,
            validate:{
                validator:(req) =>{
                    return true;
                },
                message: "ERROR_URL"
            }
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality:{
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mogoose.Types.ObjectId
        }
    },
    {
        timestamps: true //created_at, updated_at
    }
    
)

export default mogoose.model(Track)
