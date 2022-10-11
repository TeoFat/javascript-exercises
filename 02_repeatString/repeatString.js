const repeatString = function(string, times) {
    let eco = '';
    if (times >= 0) {
        for (let i=0; i < times; i++) {
            eco += string;
        }
    } else {
        eco = 'ERROR';
    }
    return eco
};

// Do not edit below this line
module.exports = repeatString;
