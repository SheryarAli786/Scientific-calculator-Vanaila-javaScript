let str = '';
let val = '';
let vale='';
buttons = document.querySelectorAll('.button');
for (button of buttons) {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML == 'AC') {
        str = '';
        document.querySelector('input').value = str;
        document.querySelector('.input2').value = str;
      } else if (e.target.innerHTML == 'Back') {
        str = str.substring(0, str.length - 1);
        document.querySelector('input').value = str;
      } else if (e.target.innerHTML === '=') {
        
        if (str === '') {
          document.querySelector('input').value = '';
        } else {
          evaluation();
        }
      }
       else if (e.target.innerHTML == 'π') {
        val = str + 'π';
        str = 3.14159265359 + '*' + str;
        document.querySelector('input').value = val;
      }
      else if (e.target.innerHTML == 'e') {
        val = str + 'e';
        str = '' + 'e' +  str + '*'+'';
        document.querySelector('input').value = val;
      }
      else if (e.target.innerHTML == '√x') {
        val = '√' + str;
        str='√('+ str +')';
        // str = 'Math.sqrt(' + str + ')';
        console.log(str)
        document.querySelector('input').value = val;
      }    
      else if (e.target.value == '3√x') {
        val = '3√'+str;
        str='cube('+ str +')';
        // str = 'Math.sqrt(' + str + ')';
        console.log(str)
        document.querySelector('input').value = val ;
      }
      else if (e.target.value == 'y√x') {
        str=  str+'√';
    document.querySelector('.input1').value = str;
      }
       else if (e.target.value == 'x²') {
        val = str + '²';
        str = '(' + str + '*' + str + ')';
        document.querySelector('.input1').value = val;
      }
      else if (e.target.value == 'x³') {
        val = str + '³';
        str = '(' + str + '×' + str + '×' + str + ')';
        document.querySelector('.input1').value = val;
      }
      else if (e.target.value == 'x^y') {
        val = str + '^';
        str = '' + str + '^';
        document.querySelector('input').value = val;
      } 
      else if (e.target.value == 'EXP') {
        val = str + '×' +'10' + '^';
        str = str + '×' +'10' + '^';
        document.querySelector('.input1').value = val;
      }
      else if (e.target.value == 'e^x') {
        val = 'e' + str + '^';
        str = 'e' + str + '^';
        document.querySelector('input').value = val;
      } 
      else if (e.target.value == '10^y') {
        val = '10' + '^';
        str = '10' + str + '^';
        document.querySelector('input').value = val;
      } 
      else if (e.target.value == 'EXP') {
        val= str+'×'+'10' + '^';
        str = '10' + str + '^';
        document.querySelector('input').value = val;
      } 
       else if (e.target.value == 'n!') {
        val = str + '!';
        str=str+'!'
        fact();
        document.querySelector('.input1').value = val;
      }
      else if (e.target.innerHTML == '%') {
        val=str + '%';
        str = str + '%';
        document.querySelector('input').value = str;
        document.querySelector('.input1').value = val;
      } 
      else if (e.target.innerHTML == 'sin') {
        str = 'sin(' + str;
        document.querySelector('.input1').value = str;
      }
      else if (e.target.value == 'log') {
        str ='log('+ str;
        document.querySelector('.input1').value = str;
      }
      else if (e.target.value == '1/x') {
        val = '1/'+str;
        str= '1/'+str
        console.log(str)
        document.querySelector('.input1').value = val;
      }
      else if (e.target.value == 'ln') {
        str ='ln('+str;
        document.querySelector('.input1').value = str;
      }
      else if (e.target.value == 'RND') {
        str = Math.random()
        document.querySelector('.input2').value = str;
      }
      else if (e.target.value == 'M+') {
        vale+=str
        document.querySelector('.input2').value = str;
      }
      else if (e.target.value == 'MR') {
        str+=vale; 
        document.querySelector('.input1').value = str;
      }
      else if (e.target.value == 'M-') {
        vale='';
        document.querySelector('.input1').value = vale;
        document.querySelector('.input2').value = vale;
      }
      else if (e.target.innerHTML == 'cos') {
        str ='cos(' + str;
        document.querySelector('input').value = str;
      }
      else if (e.target.innerHTML == 'tan') {
        str ='tan(' +str;
        document.querySelector('input').value = str;
      }
      else if (e.target.value == 'asin') {
        str = 'asin('+str
        document.querySelector('input').value = str;
      }
      else if (e.target.value == 'acos') {
        str = 'acos('+str
        document.querySelector('input').value = str;
      }
      else if (e.target.value == 'atan') {
        str ='atan('+str
        val=str
        document.querySelector('input').value = str;
      }
      else if (e.target.value == 'Ans') {
       str=ans
        document.querySelector('.input1').value = ans;
      }
      else {
        // str = str + e.target.innerHTML;
        str = str + e.target.value;
        document.querySelector('.input1').value = str;
        console.log(str)
      }
    } catch (error) {
      str = 'syntax error';
      document.querySelector('.input2').value = str;
      str = '';
    }
  });
}
function myAsin(str) {
  if (str >= -1 && str <= 1) {
    return Math.asin(str);
  } else {
    return 'syntax error';
  }
}
function evaluation() {
  perc();
  sqroot();
  // document.querySelector('.input1').value = neww;
  const convertedVal = str
    .replace(/\b×\b/g, "*")
    .replace('^', "**")
    .replace(/\b÷\b/g, "/")
    // .replace(/\b√\b/g, 'Math.sqrt')
    // .replace(/\b3√\b/g, "Math.cbrt")
    .replace('√', 'Math.sqrt')
    .replace('cube', 'Math.cbrt')
    .replace('custom', 'Math.pow')
    // .replace('(', '*(')
    // .replace(')', '*)')
    .replace(/\bsin\b/g, 'Math.sin')
    .replace(/\blog\b/g, 'Math.log10')
    .replace(/\bln\b/g, 'Math.log')
    .replace(/\bcos\b/g, "Math.cos")
    .replace(/\btan\b/g, "Math.tan")
    .replace(/\by√\b/g, 'Math.pow')
    .replace(/\basin\b/g,'myAsin')
    .replace(/\bacos\b/g,'Math.acos')
    .replace(/\batan\b/g,'Math.atan')
    .replace(/\be\b/g,'2.71828182846')
    .replace(/\bπ\b/g,'3.14159265359');
  const result = eval(convertedVal);
  // const result = Function('"use strict";return (' + convertedVal + ')')();
  str = result.toString();
  ans=str
  document.querySelector('.input2').value = ans;
  // document.querySelector('.input1').value = val;
}
function fact() {
  let num = parseFloat(str);
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f = f * i;
  }
  str = f.toString();
  document.querySelector('.input2').value = str;
}
function perc() {
  if ((str).indexOf("%") > -1) {
    console.log(str);
    var first = (str).slice(0, (str).indexOf("%"));
    console.log(first);
    var second = (str).slice((str).indexOf("%") +1);
  console.log(second);
    str = eval(first/100 * second);
    str=str.toString();
    console.log(str);
  }
  document.querySelector('.input2').value = str;
}
 function sqroot(){
  if ((str).indexOf("√") > -1){
  document.querySelector('input').value=val
  var f = (str).slice((str).indexOf("√")+1);
  var t = (str).slice(0, (str).indexOf("√"));
str = 'custom(' + f + ', 1/'+ t +')';
document.querySelector('.input1').value = str;
}
document.querySelector('.input2').value = str;
 }
 