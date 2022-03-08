let dictionary = new Array;
function addWords() {
    let word = document.getElementById("insertWord").value;
    dictionary.push(word);
    let element = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(word);
    li.append(text);
    element.append(li);
}

function verifyWords() {
    let checkWord = document.getElementById("check").value;
    if (dictionary.includes(checkWord)) {
        document.getElementById("result").innerHTML = "This word it's in the list!";
    } else {
        document.getElementById("result").innerHTML = "This word isn't in the list!";
    }
}