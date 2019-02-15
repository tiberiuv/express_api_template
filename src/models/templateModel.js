import mongoose, {Schema} from 'mongoose'

const TemplateSchema = new Schema ({
    test: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
    },
})

export default mongoose.model('Template', TemplateSchema)
