#!/usr/bin/env node

const { Input, Select, MultiSelect, NumberPrompt } = require('enquirer');

async function greet(){
    let name = await new Input({
        message: "Hi! What is your name? "
    }).run();
    
    console.log(`Hello ${name}! Welcome to the test npm package!`);
}

greet();