const cmdArgs = require('command-line-args')
const fs = require('fs')

const saveIt = (newData) =>{
	const str = JSON.stringify(newData);
	fs.writeFileSync('db.json', str)
}

const optionsDefinitions = [
	{name:'name', type:String},
	{name:'order', type:String},
	{name:'payment', type:Number},
	{name:'exit', type:Boolean}
];

const options = cmdArgs(optionsDefinitions);

let getJson = fs.readFileSync('db.json')
let data = JSON.parse(getJson)

if(options.name){
    data.name = options.name;

    console.log(`Hello, ${options.name}, we are serving CAKE,PIZZA and SALAD`)

    saveIt(data);

} else if(options.order){
    data.order = options.order;

    console.log(`Ok ${data.name}, that would be $25, you will pay with....`)
    saveIt(data);
    
} else if(options.payment){
    data.payment = options.payment;

    console.log(`Your change is ${options.payment - 25}, thanks for eating at chuckies type --exit to get the order`)
    saveIt(data);
}else if(options.exit){
    console.log(data)
    console.log(`Thanks`)

    data.name = '';
    data.order = '';
    data.payment = '';
    saveIt(data);
}else {
    console.log(`Hello, please enter your name`)
}

