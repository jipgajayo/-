function pritHello() {
    console.log('Hello');

}
console.log('Goodmorning')
printHello();



function printMessage() {
    let message ='hello';
    console.log(message);
    console.log(globallMessage);
    function printAnother() {
        console.log(messsage);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();