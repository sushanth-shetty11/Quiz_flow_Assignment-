import corsAnywhere from 'cors-anywhere';

const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS Anywhere is running on ${host}:${port}`);
});
