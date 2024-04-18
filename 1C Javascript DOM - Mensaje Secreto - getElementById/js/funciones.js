function funcion(){
    let contenido = document.getElementById("inputtext").value;
    alert(reverseParentheses(contenido));
}

function reverseParentheses(s){
    let j = s;
    if (s.includes('(')){
        j = reverseParentheses(reverseOnce(s));
    }   
    return j;
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}
