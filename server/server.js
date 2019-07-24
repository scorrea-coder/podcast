import app from './app';

const port = 8800;

app.listen(port, () => {
  console.log('Listening from server endpoint', port);
});
