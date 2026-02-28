import chalk from 'chalk';

export function greet(name = "Ninja") {
  console.log(
    chalk.blue.bold("👋 Hello ") +
    chalk.green(name) +
    chalk.red("! Welcome to Ninja Utility!")
  );
}