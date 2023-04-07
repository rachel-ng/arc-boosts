/* 

add google fonts
https://github.com/kslambert/hacker-news-arc-boost/blob/main/content.js

*/

var getHeader = document.getElementsByTagName('head').item(0);
var linkStyle = document.createElement("link");

var url = "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700&display=swap";
linkStyle.href = url;
linkStyle.rel = 'stylesheet';
linkStyle.type = "text/css"; 

getHeader.appendChild(linkStyle);

