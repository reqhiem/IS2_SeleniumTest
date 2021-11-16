const percentage = require('./percentage');

(async function main(){
    let result = await percentage(100, 10);
    console.log(result);
})();
