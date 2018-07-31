import {get} from 'request';
import {writeFile} from 'fs';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', (requestErr, response) => {
    if (requestErr) {
        console.error(requestErr);
    } else {
        writeFile('article.html', response.body, (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
            } else {
                console.log('File written');
            }
        });
    }
});