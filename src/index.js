import {model} from './model'
import {templates} from "./template";
import './styles/main.css'

const $site = document.querySelector('#site'); // query selector marks as $

model.forEach(block => {
    const toHtml = templates[block.type]
    if (toHtml) {
        $site.insertAdjacentHTML('beforeend',toHtml(block))
    }
});

