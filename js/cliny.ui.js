/*
  UI Functions
  - reply()
  - reverse()
  - filterise()
  - showFilter()
  - hideFilter()
  - showSource()
  - hideSource()
 */

reply = function() {
  var answers = MCQ.A
  $('#answer-content').html(answers.join('<br>'))
  $('#query').hide()
  $('#answer').show()
  $('#answer-src').show()
  $('#q-back').addClass('useable')
  hideFilter()
}

reverse = function() {
  $('#answer').hide()
  $('#query').show()
  $('#q-back').removeClass('useable')
}

filterise = function() {
  var template = '<li class="li-selector"><label class="switch"><input class="in-check" type="checkbox" checked="checked" data="DATUM"><span class="slider round"></span></label><div class="selector">CONTENT</div></li>'
  var s = ''
  for (var k in perms) {
    var t = k
    if (typeof cats != 'undefined' && 
        typeof cats[k] != 'undefined' &&
        typeof cats[k].length == 'number') {
      t = k + ' (' + cats[k].length + ')'
    }
    s += template.replace('CONTENT', t).replace('DATUM', k) 
  }
  s = template.replace('CONTENT', 'All').replace('DATUM', 'All') + s
  $('#q-filter').empty().append(s)
}

showFilter = function() {
  $('#q-util').empty().append('&rHar;')
  $('#q-filter').css('display','block')
}

hideFilter = function() {
  $('#q-util').empty().append('&dHar;')
  $('#q-filter').css('display','none')
}

hideSearch = function() {
  setTimeout(function() { $('#q-search').css('display','none') }, 150)
}

showSource = function() {
  var ref = ''
  if (typeof MCQ != 'undefined' && typeof MCQ.ref != 'undefined') { /*console.log(MCQ.ref);*/ ref = MCQ.ref }
  $('#answer-source').html(ref).css('display','block')
  $('#answer-src')
    .text('x')
    .addClass('shown')
    .css('border-top-right-radius','0%')
    .css('border-top-left-radius', '0%')
}

hideSource = function() {
  $('#answer-source').text('').css('display','none')
  $('#answer-src')
    .text('{}')
    .removeClass('shown')
}
