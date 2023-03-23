import mongoose from "mongoose"
import slugify from "slugify";

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})
articleSchema.pre("validate", () => {
   if (this.title) 
   {
        this.slug = slugify(this.title, {
            lower: true, 
            strict: true
        });
   } 
});

export default mongoose.model("Article", articleSchema)