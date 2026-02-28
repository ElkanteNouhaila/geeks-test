import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const fullName = prompt('Enter your full name (e.g., John Doe): ');

const validNameRegex = /^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$/;

if (validNameRegex.test(fullName)) {
  console.log('Valid name!');
} else {
  console.log('Invalid name! Make sure it contains only letters, one space, and first letters uppercase.');
}