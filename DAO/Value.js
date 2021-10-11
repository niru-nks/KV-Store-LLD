class Value {
    constructor(type, value, key) {
        this.type = type;
        this.value = value;
        this.key = key;
        
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    getKey() {
        return this.key;
    }
}

module.exports = Value;