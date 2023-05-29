import * as mockhttp from 'mockttp';

function main() {
  const server = mockhttp.getLocal();
  server.on('request', (data) => {
    console.log(data.url);
  });
  server.on('response', (data) => {
    console.log(data.body.buffer.toString());
  });
  server.forAnyRequest().thenPassThrough();
  server.start(8899);
}

main();
