#!/usr/bin/env node

const { Input, Select, MultiSelect, NumberPrompt } = require('enquirer');

async function greet(){
    let name = await new Input({
        message: "Hi! What is your name? "
    }).run();
    
    console.log(`Hello ${name}! Welcome to the test npm package!`);

    let pizza = await new Select({
        message: "Shall we have some pizza? ",
        choices: ['Yes', 'No']
    }).run();
    if(pizza === "Yes") console.log("Let's have some!");
    else console.log("Nevermind!");

    console.log("Bye...");
}

greet();