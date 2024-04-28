#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//avdenture game mode
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your good name?",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent?",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
//skeleton
do {
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Option",
            choices: ["Attack", "Drink your Portion", "Run for your Life"],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red(`${p1.name} is dead`));
                console.log(chalk.bold.green(`${o1.name} won`));
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.bold.blue.italic(`${p1.name} Win`));
                process.exit();
            }
        }
        if (p1.fuel <= 0) {
            console.log(chalk.bold.red(`${p1.name} is dead`));
        }
        if (ask.opt == "Drink your Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life") {
            console.log(chalk.red.bold.italic("Your Loose, Better Luck Next Time!"));
        }
    }
    //assassin
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Option",
            choices: ["Attack", "Drink your Portion", "Run for your Life"],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red(`${p1.name} is dead`));
                console.log(chalk.bold.green(`${o1.name} won`));
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.bold.blue.italic(`${p1.name} Win`));
                process.exit();
            }
        }
        if (p1.fuel <= 0) {
            console.log(chalk.bold.red(`${p1.name} is dead`));
        }
        if (ask.opt == "Drink your Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life") {
            console.log(chalk.red.bold.italic("Your Loose, Better Luck Next Time!"));
        }
    }
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Option",
            choices: ["Attack", "Drink your Portion", "Run for your Life"],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red(`${p1.name} is dead`));
                console.log(chalk.bold.green(`${o1.name} won`));
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.bold.blue.italic(`${p1.name} Win`));
                process.exit();
            }
        }
        if (p1.fuel <= 0) {
            console.log(chalk.bold.red(`${p1.name} is dead`));
        }
        if (ask.opt == "Drink your Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your Life") {
            console.log(chalk.red.bold.italic("Your Loose, Better Luck Next Time!"));
        }
    }
} while (true);
