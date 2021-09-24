let config = {}, error = false, pe = process.env;

function getConfig(name, defValue, help, regex) {

    let value = pe[name];

    if (!value && defValue !== undefined) {
        console.warn(`The environment variable:[ ${name} ] is not defined in .env, default value is: ${defValue}`);
        return defValue;
    } else if (!value) {
        console.error("The envronment variable:[", name, "] must be defined in .env!");
        if (help) {
            console.log("Help for [", name, "]\n\t*", help);
        }
        error = true;
    } else {
        if (!!regex && !regex.test(value)) {
            console.error(`The envronment variable:[${name}] does not match with regular expression ${regex}`);
            error = true
        } else return value;
    }
}

function loadConfig(varDoc) {
    if (config[varDoc.key] !== undefined) {
        console.error("Duplicated variable definition ", name, " in .env.");
        throw new Error("Duplicated variable definition " + name + " in .env.");
    }
    config[varDoc.key] = getConfig(varDoc.key, varDoc.value, varDoc.help, varDoc.regex);
}
function initEnv(config) {
    require('dotenv').config(config);
    let doc = require(__dirname + '/../../../docenv-config.json');
    if (doc === undefined) doc = [];

    doc.forEach(loadConfig)
    if (error) process.exit(1);
}

module.exports.default = initEnv;
module.exports.loadEnv = initEnv;
module.exports.Config = config;