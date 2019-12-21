//print function
export function print(...messages) {
    const div = document.createElement('div');
    div.innerHTML = messages.join("");
    document.body.appendChild(div);
}

//print new line
export function newLine() { 
    print("<br/>");
}