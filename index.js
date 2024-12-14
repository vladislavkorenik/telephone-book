// Телефонная книга
const phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
var commandArray=command.split(' ');
switch (commandArray[0]) {
    case 'ADD':add(commandArray);break;
    case 'SHOW':return show();break;
    case 'REMOVE_PHONE':return remove(commandArray);break;
}

function add(commandArr) {
var name=commandArr[1];
var number=commandArr[2].split(',');
if(phoneBook.hasOwnProperty(name)){
    phoneBook[name]=phoneBook[name].concat(number);
}
else phoneBook[name]= number;
}
function show() {
        var res = [];
        for (var name in phoneBook) {
            res.push(name + ': ' + phoneBook[name].join(', '));
        }
    res.sort();
        return res;
}
function remove(commandArr) {
    var number=commandArr[1];
    for (var key in phoneBook) {
        var numberPos = phoneBook[key].indexOf(number);
        if (numberPos != -1) {
            phoneBook[key].splice(numberPos, 1);
            if (phoneBook[key].length == 0) {
                delete phoneBook[key];
            }
        return true;
    }
    }
 return false;
}
};
