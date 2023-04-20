const express = require('express');
const app = express();

app.get('/api/numbers', (req, res) => {
  const numbers = {
    revenues: '$2,129,430',
    transactions: '1520',
    likes: '9721',
    users: '892'
  };
  res.json(numbers);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});