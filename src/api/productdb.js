import { createServer } from 'json-server';
import { readFileSync } from 'fs';
import path from 'path';


export default async function handler(req, res) {
  const dbPath = path.resolve('./src/DB/productdb.json');
  const jsonContent = readFileSync(dbPath, 'utf-8');

  const server = createServer();
  const router = server.router(JSON.parse(jsonContent));
  server.use(router);

  server.listen(3000, () => {
    res.end();
  });
}
