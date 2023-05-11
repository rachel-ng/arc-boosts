var material_symbols = document.createElement("link");
material_symbols.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
material_symbols.rel = 'stylesheet';
document.head.appendChild(material_symbols);

waitForElem('img.gb_Jc').then((elem) => {
  console.log(elem);
  elem.innerHTML = `<div style="overflow:hidden; width: 80px; height: 40px; display: inline-block;"><img style="margin-left: -31px; padding-bottom: 12px; " class="gb_Jc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x " alt="" aria-hidden="true" role="presentation"></div>`;
  console.log(elem);

  let e = elem.parentNode; // document.querySelectorAll('a.gb_3d.gb_Ec.gb_1d');
  console.log(e);

  e.innerHTML = `<div style="height: 40px; display: inline-block;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" height="22" width="30" style="padding-bottom: 9px;">
<path fill="var(--arc-background-gradient-color1, var(--arc-palette-cutoutColor))" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
<path fill="var(--arc-background-gradient-overlay-color1, var(--arc-palette-foregroundSecondary))" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
<path fill="color-mix(in srgb, var(--arc-palette-foregroundPrimary), var(--arc-palette-foregroundSecondary))" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
<path fill="var(--arc-palette-foregroundTertiary)" d="M72 74V48l24 18 24-18v26L96 92"/>
<path fill="var(--arc-palette-background)" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
</svg></div>` + `<div style="overflow:hidden; width: 80px; height: 40px; display: inline-block;"><img style="margin-left: -31px;" class="gb_Jc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x " alt="" aria-hidden="true" role="presentation"></div>`;
  // document.querySelector('a.gb_3d.gb_Ec.gb_1d').appendChild(svg);
  e.style.paddingTop = '7px';
  console.log(e);

});


var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('height', '109');
    svg.setAttribute('width', '40');
    svg.setAttribute('viewbox', '52 42 88 66');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.id = "arc-gmail"

let p1 = make_path(
  "var(--arc-background-gradient-color1, color-mix(in srgb, var(--arc-palette-backgroundExtra), var(--arc-palette-focus)))", 
  "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
  );
svg.appendChild(p1);
let p2 = make_path(
  "var(--arc-background-gradient-overlay-color1, var(--arc-palette-foregroundSecondary))", 
  "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
  );
svg.appendChild(p2);
let p3 = make_path(
  "color-mix(in srgb, var(--arc-palette-foregroundPrimary), var(--arc-palette-foregroundSecondary))",
  "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
  );
svg.appendChild(p3);
let p4 = make_path(
  "var(--arc-palette-foregroundTertiary)", 
  "M72 74V48l24 18 24-18v26L96 92"
  );
svg.appendChild(p4);
let p5 = make_path(
  "var(--arc-palette-background)", 
  "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
  );
svg.appendChild(p5);
console.log(svg);



function make_path(f, d) {
  let p = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  p.setAttribute('d',d);
  p.setAttribute('fill',"#000000");
  p.setAttribute('fill',f);
  return p;
}

function waitForElem(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}







