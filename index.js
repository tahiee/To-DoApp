const inputBox = document.getElementById('input-box');
const textList = document.getElementById('text-list');

function mytask() {
    if (inputBox.value === '') {
        alert('write your Task First')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        textList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}

textList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem('data', textList.innerHTML);
}
function showData() {
    textList.innerHTML = localStorage.getItem('data');
}
showData()