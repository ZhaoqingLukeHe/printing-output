var a = 3;
var b = 5;
var c;

var output = 'var a = 3;\n';
output += 'var b = 5;\n';
output += 'var c;\n';
output += '------\n';
output += 'a + b =' + (a + b) + '\n';
output += 'a - b =' + (a - b) + '\n';
output += 'a * b =' + a * b + '\n';
output += 'a / b =' + a / b + '\n';
output += 'a % b =' + (a % b) + '\n';
output += '(a += b): ' + (a += b) + '\n';
output += '(a -= b): ' + (a -= b) + '\n';
output += '(a * b): ' + a * b + '\n';
output += '(a /= b): ' + (a /= b) + '\n';
output += '(a %= b): ' + (a %= b) + '\n';
output += '(a == b): ' + (a == b) + '\n';
output += '(a != b): ' + (a != b) + '\n';
output += '(a > b): ' + (a > b) + '\n';
output += '(a < b): ' + (a < b) + '\n';
output += '(!a && !c): ' + (!a && !c) + '\n';
output += '(!a || !c): ' + (!a || !c) + '\n';

var first_name = 'Zhaoqing(Luke)';
var last_name = 'He';
var email = 'he000116@algonquinlive.com';
var output2 = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
alert(output);
alert(output2);

