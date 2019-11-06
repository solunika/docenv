let config = {}

require('dotenv').config();
let doc = require(__dirname+'/../../../docenv-config.json');
if(doc === undefined) doc = []
let pe = process.env;

function getConfig(name, defValue, help) {

    let value = pe[name];

    if (!value && defValue !== undefined) {
        console.log(`The environment variable:[ ${name} ] is not defined in .env, default value is: ${defValue}`);
        return defValue;
    } else if (!value) {
        console.error("The envronment variable:[", name, "] must be defined in .env!");
        if (help) {
            console.log("Help for [", name, "]\n\t*", help);
        }
        process.exit(1);
    } else {
        return value;
    }
}

function loadConfig(varDoc) {
    config[varDoc.key] = getConfig(varDoc.key, varDoc.value, varDoc.help)
    //TODO: verify duplicated key
}

module.exports.default = function () {
    doc.forEach(loadConfig)
}

module.exports.Config = config;