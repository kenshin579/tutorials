import {get} from 'request';
import {writeFile} from 'fs';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
    .then((response) => {
        return writeFile('article.html', response);
    })
    .then(() => {
        console.log('File written');
    })
    .catch((err) => {
        console.error(err);
    });