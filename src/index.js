import {model} from './model'
import {title, text, columns, image} from "./template";

const $site = document.querySelector('#site'); // query selector marks as $

model.forEach(block => {
    let html = '';

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'column') {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }

    $site.insertAdjacentHTML('beforeend', html)

});

