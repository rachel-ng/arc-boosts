window.addEventListener("load", function() { 
  toggle_calendar()
});

window.navigation.addEventListener('navigate', function() {
  toggle_calendar()
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    toggle_calendar()
});

observer.observe(document, {
  subtree: true,
  attributes: true, 
  childList: true,
});

function toggle_calendar(calendar="Work", debug=false) {
  if (debug) { console.log(window.location.href) }
  if (window.location.href.indexOf("month") > -1) {
    let work = [...[...document.querySelector("div[aria-label='My\ calendars']").childNodes].filter(c => c.innerText == calendar)[0].childNodes][0].querySelector("div.lcPUt").querySelector("input")
    if (debug) { console.log("month"); console.log(work);}
    if (work.checked) {
      work.click();
    }
  }

  if (window.location.href.indexOf("week") > -1) {
    let work = [...[...document.querySelector("div[aria-label='My\ calendars']").childNodes].filter(c => c.innerText == calendar)[0].childNodes][0].querySelector("div.lcPUt").querySelector("input")
    if (debug) { console.log("week"); console.log(work); }
    if (!work.checked) {
      work.click();
    }
  }
}

