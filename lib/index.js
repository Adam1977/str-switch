
function strSwitch(str) {
  var isAccord = isAccordWith(str)
  var finStr;
  if (isAccord('-')) {
    finStr = strReplace(str, '-', '/')
    finStrFormat(finStr)
    return
  } else if(isAccord('/')) {
    finStr = strReplace(str, '/', '-')
    finStrFormat(finStr)
    return
  }
  var msg = 'This string is wrong!'
  if (!str) {
    msg = 'Value can`t be empty!';
  }
  finStrFormat(msg)
}

function isAccordWith(str) {
  return function(symb) {
    return str && !!~str.indexOf(symb)
  }
}

function strReplace(str, current, change) {
  var reg = new RegExp(current, 'g')
  return str.replace(reg, change)
}

function finStrFormat(str) {
  var finStr = `
    -------------------
    
    ${str}

    -------------------
  `
  console.log(finStr)
}

module.exports = strSwitch