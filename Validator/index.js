const PrimitiveMatchValidation = require('./PrimitiveMatch');
const TypeMatchValidation = require('./TypeMatch');
const {VALIDATION_TYPES} = require('../Constants');

class Validator {
    validation = []
    constructor(validationArr) {
        for(let i = 0;i<validationArr.length;i++) {
            switch (validationArr[i]){
                case VALIDATION_TYPES.PRIM: 
                            this.validation.push(new PrimitiveMatchValidation());
                            break;
                case VALIDATION_TYPES.TYPE: 
                            this.validation.push(new TypeMatchValidation());
                            break;
            }    
        }
    }
    validate(value, type) {
        // console.
        for(let i= 0;i<this.validation.length;i++) {
            let res = this.validation[i].validate(value, type);
            if(!res.success) {
                throw new Error(res.Message)
            }
        }
        return true;
    }
}

module.exports = Validator;
