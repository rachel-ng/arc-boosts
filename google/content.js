const q = queryParams().q.replace(/\+/g, ' ');
let query = queryParams().q.replace(/\+/g, ' ');

const smaller = false;
const same_row = true;

let nav = same_row ? document.querySelector('.nfdoRb') : navRow();

if (q.includes("site:")) {
  query_tokens = query.split(" ");
  qs = query_tokens.filter(q => !q.includes("site:"));  
  query = qs.join(" ");
}

if (!q.includes("site:wikipedia.org")) {
  const wikipediaLink = 'https://www.google.com/search?q=' + encodeURIComponent("site:wikipedia.org " + query);
  addLink(imgIcon('https://en.wikipedia.org/static/favicon/wikipedia.ico'), 'Wikipedia', wikipediaLink);
}

if (!q.includes("site:reddit.com")) {
  const redditLink = 'https://www.google.com/search?q=' + encodeURIComponent("site:reddit.com " + query);
  addLink(imgIcon('https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png'), 'Reddit', redditLink);
}

if (q.includes("site:")) {
  const googleLink = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  addLink(imgIcon('https://www.google.com/favicon.ico'), 'Google', googleLink);
}



function queryParams() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function navRow() {
  let nav = document.createElement('div');
  document.querySelector('.nfdoRb').parentElement.appendChild(nav);
  let classes = ['nfdoRb', 'nnav'];
  classes.forEach(c => nav.classList.add(c));
  if (smaller) nav.classList.add('smaller');

  return nav;
}

function createLink(icon, name, url) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  let classes = ['zItAnd', 'FOU1zf', 'GMT2kb', 'nnav-link'];
  classes.forEach(c => a.classList.add(c));
  if (smaller) nav.classList.add('smaller');

  const d = document.createElement('div');
  d.classList.add('O3S9Rb');
  d.append(name);

  a.append(icon);
  a.append(d);
  
  return a;
}

function textIcon(symbol) {
  const icon = document.createElement('span');
  icon.innerText = symbol;
  icon.style.marginRight = '0.5em';
  icon.style.fontWeight = 'bold';

  return icon;
}

function imgIcon(img) {
  const icon = document.createElement('img');
  icon.src = img;
  let classes = ['mUKzod', 'nnavico'];
  classes.forEach(c => icon.classList.add(c));

  icon.setAttribute("aria-hidden", "true");
  icon.setAttribute("focusable", "false");
  console.log(img);
  return icon;
}

function addLink(symbol, name, url) {
  const link = createLink(symbol, name, url);
  console.log(link);
  console.log(document.querySelector('.nfdoRb'));
  nav.appendChild(link);
}

