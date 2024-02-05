// index.js

// Array of three quotations
const quotations = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
  ];
  
  // Function to get a random quotation
  function getRandomQuotation() {
    const randomIndex = Math.floor(Math.random() * quotations.length);
    return quotations[randomIndex];
  }
  
  // Print a random quotation to the console
  console.log(getRandomQuotation());
  