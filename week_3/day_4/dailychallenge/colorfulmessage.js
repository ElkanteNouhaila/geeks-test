import chalk from 'chalk';

export function showMessage() {
  console.log(
    chalk.blue.bold('Hello! ') +
    chalk.green('This is a colorful message ') +
    chalk.red('using Chalk!')
  );
}