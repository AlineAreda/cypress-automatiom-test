const cypress = require("cypress");
const tesults = require("cypress-tesults-reporter");

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImZkZWM5NzgyLTU2OTctNGZjYy05OGQyLWZlOWI5NTZmZmIyZi0xNzM3MTU5NDM5MzAwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZWExZTY4M2MtNGQyMS00YjNiLWJiMWEtNzZkZjk5YTRjNzY2IiwidHlwZSI6InQifQ.Ho8PhIkFHUxaXfLa43zDjKAs-SwQot1BZSsrzihJvP0'

cypress
  .run({
    // specs to run here
  })
  .then((results) => {
    const args = {
      target: TOKEN,
    };
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err);
  });
