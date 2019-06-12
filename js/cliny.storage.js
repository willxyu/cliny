
storageTest = function() {
  var t = 'test'
  try {
    localStorage.setItem(t, t)
    localStorage.removeItem(t)
  } catch(err) {
    return false
  }
  return true
}

storageInitialisation = function() {
  if (!storageTest()) {
    showError('Unable to use local storage to remember preferences.')
  } else {
    console.log('window.localStorage passed.')
  }
}
