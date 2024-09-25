// read.write,execute
// 00000100 - 4
//00000010 - 2
//00000111 - 3


let readPermission = 4
let writePermission = 2;
let executePermission = 1;
let myPermission = 0

myPermission = myPermission | readPermission | executePermission;

console.log('write permission : ' + (myPermission & writePermission ? 'yes' : 'no'));