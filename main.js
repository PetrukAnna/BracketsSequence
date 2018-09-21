if(window.addEventListener) {
  window.addEventListener("load", init,false);
}

function init(){

  var input = prompt("Input brackets sequence", "");
  var open = "(", close = ")", 
      openCount = [], closeCount = [], 
      checkNotEmpty = true, checkSymbol = true, checkOpenClose = true;

  var brackets = input.split('');
  document.write(input+ "<br>");

  
  if(brackets.length == 0) {
    checkNotEmpty = false;
  } else {
    for (var i = 0; i < brackets.length; i++) {
      if (brackets[i] != open && brackets[i] != close) {
        checkSymbol = false;
      } 
      if (brackets[i] == open) {
        openCount.push(i);
      }
      if (brackets[i] == close) {
        closeCount.push(i);
      }  
    }
  }
  // document.write("<br>Open: " + openCount);
  // document.write("<br>Close: " + closeCount);

  for (var j = 0; j < openCount.length; j++) {
    if (openCount[j] > closeCount[j]) {
      checkOpenClose = false;
    }
  }

  if (checkNotEmpty == true && checkSymbol == true && checkOpenClose == true && (openCount.length == closeCount.length)) {
    document.write("<br>Дужкова послідовнясть вірна!");
  }
  if (checkNotEmpty == false) {
    document.write("<br>Рядок пустий!");
  }
  if (checkSymbol == false) {
    document.write("<br>Рядок має складатись лише з дужок!");
  } 
  if (checkOpenClose == false) {
    document.write("<br>Закрита дужка стоїть перед відкритою!");
  }
  if (openCount.length > closeCount.length) {
    if (openCount.length >= 1 && closeCount.length == 0) {
       document.write("<br>Рядок має закінчуватись закритою дужкою та складатись з 2 та більше дужок!");
    } else {
      document.write("<br>Якась дужка не закрита!");
    }
  } 
  if (closeCount.length > openCount.length) {
    if (closeCount.length >= 1 && openCount.length == 0) {
      document.write("<br>Рядок має починатись з відкритої дужки та складатись з 2 та більше дужок!");
    } else {
      document.write("<br>Якась дужка закрита двічі!");
    }
    
  } 
} 