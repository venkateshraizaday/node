const os = require('os');

let user = os.userInfo();
let platform = os.platform()

//console.log(user)
//console.log(platform)

module.exports.message = `Hello ${user.username}, I see that you use ${platform}\n`;

//console.log(module)