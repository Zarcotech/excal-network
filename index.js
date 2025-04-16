import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3131;

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/public' + '/templates' + '/index.html'));
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});