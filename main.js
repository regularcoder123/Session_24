var time = new Date().getHours();
var greeting;

if (time < 10){
    greeting = "Good Morning"
    console.log(greeting)
}
else if (time < 20){
    greeting = "Good Day"
    console.log(greeting)
}
else{
    greeting = "Good Night"
    console.log(greeting)
}