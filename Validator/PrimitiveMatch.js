const {ACCEPTED_DATA_TYPES} = require('../Constants')
class PrimitiveMatchValidation {
    
    validate(value, type) {
        if(!ACCEPTED_DATA_TYPES[value.getType()]) {
            return {
                success: false,
                Message: 'New Data Type Used -> '+ value.getType()
            }
        }
        return {
            success: true
        }
    }
}

module.exports = PrimitiveMatchValidation;