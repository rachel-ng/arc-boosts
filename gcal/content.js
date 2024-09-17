// insert jslog email for calendar 
calendars = {
  "Work": "work@group.calendar.google.com",
  "Routine": "routine@group.calendar.google.com",
}

window.addEventListener("load", function() { 
  Object.entries(calendars).forEach(c => (toggle_calendar(c[0])))
  Object.entries(calendars).forEach(c => (opaque_events(c[1])))
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  Object.entries(calendars).forEach(c => (toggle_calendar(c[0])))
  Object.entries(calendars).forEach(c => (opaque_events(c[1])))
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

function opaque_events(calendar, opacity=0.5) {
  document.querySelectorAll(`div[jslog*='${calendar}']`).forEach((i) => { 
    let rgb = i.style.backgroundColor; 
    rgb = rgb.replace("rgb","rgba").replace(")", `, ${opacity})`); 
    i.style.backgroundColor = rgb; 
  })

}
