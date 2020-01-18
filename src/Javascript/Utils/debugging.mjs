//print function
export function print(...messages) {
    const div = document.createElement('div');
    div.innerHTML = messages.join("");
    document.body.appendChild(div);
}

//print color function
export function printColour(...messagesAndColours) {
    var div = document.createElement('div');
    for (var i=0; i<messagesAndColours.length; i+=2){
        var message = messagesAndColours[i];
        var colour = messagesAndColours[i+1];
        var span = document.createElement('span');
        span.style.color = colour;
        span.innerHTML = message;
        div.appendChild(span);
    }
    document.body.appendChild(div);
}

//print new line
export function newLine() { 
    print("<br/>");
}