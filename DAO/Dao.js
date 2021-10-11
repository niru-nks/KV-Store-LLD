const Validator = require('../Validator/index');
const Value = require('../DAO/Value');
const {VALIDATION_TYPES} = require('../Constants');

class  DAO {
    constructor() {
        this.db = {};
        this.attributeTypeMapping = {};
        this.validator = new Validator([VALIDATION_TYPES.PRIM, VALIDATION_TYPES.TYPE]);
    }
    put(key, ...value) {
        let obj = {};
        for(let i = 0; i < value.length; i+=2) {
            let k = value[i];
            let v = value[i+1];
            let val = new Value(typeof v, v, k);
            try {
                this.validator.validate(val, this.attributeTypeMapping[k]);
            } catch(e) {
                console.log("Error!!", e);
                return false;
            }
            obj[k] = val;
            this.attributeTypeMapping[k] = val.getType();
        }
        if(!this.db[key]) {
            this.db[key] = obj;
        } else {
            this.db[key] = {
                ...this.db[key],
                ...obj
            }
        }
    }
    get(key) {
        if(!this.db[key]) {
            return {};
        }
        let resp = {};
        let findObj = this.db[key];
        let keys = Object.keys(findObj);
        for(let i = 0;i<keys.length;i++) {
            let k = findObj[keys[i]].getKey();
            let v = findObj[keys[i]].getValue();
            resp[k] = v;
        }
        console.log(resp)
        return resp;
    }
    search(key, val) {
        let keys = Object.keys(this.db);
        let response = [];
        for(let i = 0;i<keys.length;i++) {
            let outerKey = keys[i];
            if(this.db[outerKey][key] && this.db[outerKey][key].getValue() == val) {
                response.push(outerKey);
            }
        }
        if(response.length) {
            console.log(response);
            return response;
        }
        console.log("Key not found");
        return "Key not found";
    }
    delete(key) {
        delete this.db[key];
    }
    
}



module.exports = DAO;