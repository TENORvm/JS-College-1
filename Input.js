function plus() {
    const elem1 = document.getElementById("i1").value;
    const elem2 = document.getElementById("i2").value;
    document.getElementById("out").textContent = elem1 + elem2
}

function minus() {
    const elem1 = document.getElementById("i1").value;
    const elem2 = document.getElementById("i2").value;
    document.getElementById("out").textContent = elem1 - elem2
}

function Click2() {
    let text = document.getElementById("n2").value;
    document.getElementById("n2").value = document.getElementById("n1").value;
    document.getElementById("n1").value = text;
}

function btnClick() {
    let text1 = "";
    let text2 = "";
    text1 = document.test.bn.value;
    text2 = document.test.bn.name;
    document.getElementById("ex1").innerHTML = "<hr>" + "Ви натиснули кнопку:" + text1.bold() + " з ім'ям: " + text2.bold() + "</hr>";
}
