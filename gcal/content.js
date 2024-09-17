calendars = ["Work", "Routine"]

window.addEventListener("load", function() { 
  calendars.forEach(c => (toggle_calendar(c)))
});

window.navigation.addEventListener('navigate', function() {
  calendars.forEach(c => (toggle_calendar(c)))
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  calendars.forEach(c => (toggle_calendar(c)))
});

observer.observe(document, {
  subtree: true,
  attributes: true, 
  childList: true,
});

function toggle_calendar(calendar, debug=false) {
  if (debug) { console.log(window.location.href) }
  if (window.location.href.indexOf("month") > -1) {
    let cal = [...[...document.querySelector("div[aria-label='My\ calendars']").childNodes].filter(c => c.innerText == calendar)[0].childNodes][0].querySelector("div.lcPUt").querySelector("input")
    if (debug) { console.log("month"); console.log(cal);}
    if (cal.checked) {
      cal.click();
    }
  }

  if (window.location.href.indexOf("week") > -1) {
    let cal = [...[...document.querySelector("div[aria-label='My\ calendars']").childNodes].filter(c => c.innerText == calendar)[0].childNodes][0].querySelector("div.lcPUt").querySelector("input")
    if (debug) { console.log("week"); console.log(cal); }
    if (!cal.checked) {
      cal.click();
    }
  }
}
