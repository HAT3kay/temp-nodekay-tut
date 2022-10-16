const os = require("os");

//ifo about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seecs

console.log(`the system ustime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeeMem: os.freemem(),
};
console.log(currentOs);
