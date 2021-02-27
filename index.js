const model = [
    {type: 'title', value: 'hello world from Js'},
    {type: 'text', value: 'here some text'},
    {
        type: 'column', value: [
            'first column',
            'second',
            'third',
            1111111,
            2323131
        ]
    },

    {type: 'image', value: './assets/javaScript.png'}
];

// query selector marks as $

const $site = document.querySelector('#site');

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


function title(block) {
    return `
          <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
         </div>
        `
}

function text(block) {
    return `
          <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
         </div>
        `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm"> ${item}</div>`);
    return `
            <div class="row">
                ${html}
            </div>
          `
}


function image(block) {
    console.log('s')
    return `
    <div class="row">
        <img src="${block.value}"/>
    </div>`
}
