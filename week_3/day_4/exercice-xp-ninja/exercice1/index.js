import { Command } from 'commander';
import { greet } from './commands/greet.js';
import { fetchData } from './commands/fetch.js';
import { readFile } from './commands/read.js';

const program = new Command();

program
  .name("ninja-utility")
  .description("A powerful ninja command-line tool")
  .version("1.0.0");

program
  .command('greet')
  .description('Display a greeting message')
  .argument('[name]', 'Name to greet')
  .action((name) => {
    greet(name);
  });

program
  .command('fetch')
  .description('Fetch data from a public API')
  .action(async () => {
    await fetchData();
  });

program
  .command('read')
  .description('Read a file')
  .argument('<filePath>', 'Path of the file')
  .action((filePath) => {
    readFile(filePath);
  });

program.parse(process.argv);