// * This parser would handle markdown language and create required html elements
export default function parseMarkdown(markdown) {
  let i = 0;
  let html = '';

  // * Makes a header depending the amount of hashes
  function makeHeader() {
    let hashCounter = 1;
    let title = '';
    let titleContent = '';
    
    while(markdown[hashCounter] === '#'){
      if(hashCounter > 6) return;
      hashCounter++;
    }

    // * h plus the amount of hashes to create the title
    title = document.createElement(`h${hashCounter}`);

    while(markdown[i] === '<'){
      titleContent += markdown[i]; 
    }

    title.titleContent = titleContent.trim();

    html += title;
  } 

  // * loops through the content in the editor 
  function traverseMarkdown() {
    while (i < markdown.length) {
      switch (markdown[i]) {
        case '#':
          return makeHeader();
        default:
          return;
      }
    }
  }

  traverseMarkdown();
  return html;
}
