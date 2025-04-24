function convert()
{


let cm=Number(document.getElementById("i").value);
let inch=cm/2.54;
let result=(document.getElementById("result"));
result.innerHTML=inch.toFixed(2);
}