const app = require('./app');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
});
