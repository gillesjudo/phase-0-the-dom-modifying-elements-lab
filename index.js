// Write your code here!
const miniMain = document.getElementById('main');
miniMain.remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML='YOUR-NAME is the champion';
document.body.append(newHeader);
