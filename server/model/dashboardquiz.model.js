import{Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
import crypto from 'crypto';
import { type } from 'os';
config();
const dashboardquiz = new Schema({
    createdBy:{
        type: 'string',
    },
    quizName:{
        type: 'string',
        required: [true, 'name is required'],
        trim:true
    },
  

    impression: {
        type: Number, 

    },
    shareLink:{
        type: 'string'
    },
    questionsLink:[{}],
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')){
//         return next();
//     }
//     this.password=await bcrypt.hash(this.password,10)

// })
// userSchema.methods={
//     generateJWTToken:async function (){
//         return await jwt.sign({
//             id:this._id,
//             email:this.email,
//             subscription:this.subscription,
//             role:this.role
//         },
//         process.env.JWT_SECRET,
//         {
//         expiresIn:process.env.JWT_EXPIRY
//         }
//         )

//     },
//     comparePassword: async function(plainPassword){
//         // console.log(plainPassword);
//         // console.log(this.email);
//         return await bcrypt.compare(plainPassword, this.password)
//     },
//     generatePassToken:async function(){
//         const token=crypto.randomBytes(20).toString('hex')
//         this.forgotPasswordToken=crypto.createHash('sha256').update(token).digest('hex')
//         this.forgotPasswordExpires = Date.now()+ 15*60*1000;
//         return token;
//     }   
// }
const Dashboardquizmodel=model('dashboardquiz',dashboardquiz)
export default Dashboardquizmodel;