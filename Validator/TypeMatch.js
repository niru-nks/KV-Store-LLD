class TypeMatchValidation {
    
    validate(value, type) {
        if(type && value.getType() != type) {
            return {
                success: false,
                Message: 'Type Mismatch... Expected -> '+ type+" ... got -> "+ value.getType()
            }
        }
        return {
            success: true
        }
    }
}

module.exports = TypeMatchValidation;