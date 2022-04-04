function topla() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) + parseInt(s2);
    s1.value = " ";
    s2.value = " ";
}

function cikar() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) - parseInt(s2);
    s1.value = "";
    s2.value = "";
}

function carp() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    textboxresult.value = parseInt(s1) * parseInt(s2);
    s1.value = " ";
    s2.value = " ";
}

function bol() {
    s1 = document.getElementById("textbox1").value;
    s2 = document.getElementById("textbox2").value;
    if (s2 == 0)
        alert("Lütfen Değer Girin")
    else textboxresult.value = parseInt(s1) / parseInt(s2);
    s1.value = " ";
    s2.value = " ";
}

function calculateCosinus() {
    s1 = document.getElementById("textbox1").value;
    cosinuss = Math.cos(s1 * Math.PI / 180).toFixed(2);
    textboxresult.value = cosinuss;
}

function calculateSinus() {
    s1 = document.getElementById("textbox1").value;
    sinuss = Math.sin(s1 * Math.PI / 180).toFixed(2);
    textboxresult.value = sinuss;
}

function calculateTan() {
    s1 = document.getElementById("textbox1").value;
    tan = Math.sin(s1 * Math.PI / 180) / Math.cos(s1 * Math.PI / 180);
    textboxresult.value = tan.toFixed(2);
}

function calculateCot() {
    s1 = document.getElementById("textbox1").value;
    tan = Math.sin(s1 * Math.PI / 180).toFixed(2) / Math.cos(s1 * Math.PI / 180).toFixed(2);
    cot = 1 / tan;
    textboxresult.value = cot.toFixed(2);
}
