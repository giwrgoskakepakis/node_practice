const os = require('os')

//info about current user
console.log(os.userInfo())

console.log(`system uptime: ${os.uptime} secs`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)