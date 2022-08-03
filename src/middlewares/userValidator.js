import userSchema from "../schemas/usersSchema.js";

export async function validateUser(req, res, next){
    const user = req.body;
    const validation = userSchema.validate(user,{abortEarly: false});

    if(validation.error){
        const message = validation.error.details;
        
        return res.status(422).send(message);
    };
    next();
};
