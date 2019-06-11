
storageTest = function() {
  var t = 'test'
  try {
    localStorage.setItem(t, t)
    localStorage.removeItem(t)
  } catch(err) {
    return false
  }
}

storageInitialisation = function() {
  if (!storageTest()) {
    console.log('No ability to use localStorage.')
  } else {
  
  }
}
