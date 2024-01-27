import{Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
import crypto from 'crypto';
import { type } from 'os';
config();
const dashboardquestion = new Schema({
    createdBy:{
        type: 'string',
    },
    quizName:{
        type: 'string',
    },
    quizId:{
        type: 'string',
    },
    shareLinkQuestion:{
        type: 'string'
    },
    question:{
        type: 'string'
    },
    options:{
        textOption:{
            option1:{
                type:'string'
            },
            option2:{
                type:'string'
            },
            option3:{
                type:'string'
            },
            option4:{
                type:'string'
            },
        },
        imageOption:{
            option1:{
                type:'string'
            },
            option2:{
                type:'string'
            },
            option3:{
                type:'string'
            },
            option4:{
                type:'string'
            },
        },
        textAndImageOption:{
            option1:{
               imageOption:{
                type:'string'
               },
               textOption:{
                type:'string'
               }
            },
            option2:{
                imageOption:{
                    type:'string'
                   },
                   textOption:{
                    type:'string'
                   }
            },
            option3:{
                imageOption:{
                    type:'string'
                   },
                   textOption:{
                    type:'string'
                   }
            },
            option4:{
                imageOption:{
                    type:'string'
                   },
                   textOption:{
                    type:'string'
                   }
            },
        },
    },
    questiontype:{
        type: 'string',
    },
    questionTimer:{
        type:Number
    },
    AttempedNumber:{
        type:Number
    },
    correctNumber:{
        type:Number
    },
    incorrectNumber:{
        type:Number
    },
    optionNumber:{
        option1Number:{
            type:Number
        },
        option2Number:{
            type:Number
        },
        option3Number:{
            type:Number
        },
        option4Number:{
            type:Number
        }
    }

},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
const Dashboardquestionmodel=model('dashboardquestion',dashboardquestion)
export default Dashboardquestionmodel;