
function createParagraph(){
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);

}

var buttons = document.querySelectorAll('button');

for (var i =0; i< buttons.length ; i ++){
    buttons[i].addEventListener('click', createParagraph);

}

// 한줄 주석

/*

여러줄 주석 가능

 */