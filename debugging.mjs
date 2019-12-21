//print function

export function print(...messages) {
    const div = document.createElement('div');
    div.innerHTML = messages.join("");
    document.body.appendChild(div);
}

export function newLine() { 
    print("<br/>");
}