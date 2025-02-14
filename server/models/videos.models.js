const mongoose=require("mongoose")

const video=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true,unique:true},
    imageUrl:{type:String,required:true},
    videoUrl:{type:String,required:true},

},
{
    collection:'video-data'
})
const model=mongoose.model('Videos',video);
module.exports=model