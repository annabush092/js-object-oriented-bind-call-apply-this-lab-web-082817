
function justInvoke(fxn) {
  return fxn()
}

function setThisWithCall(fxn, thisValue) {
  return fxn.call(thisValue)
}

function setThisWithApply(fxn, thisValue, args) {
  return fxn.apply(thisValue, args)
}

function returnNewFunctionOf(fxn, thisValue) {
  return fxn.bind(thisValue)
}
