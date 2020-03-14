async function compute() {
 var value1 = await getNumber1();
 var value2 = await getNumber2();
 return value1 + value2;

 compute() 
  .then(function(data) {
  document.getElementById('result').innerHTML = data;
}
