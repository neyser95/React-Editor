// * This parser would handle markdown language and create required html elements
export default function parseMarkdown(markdown) {
  // * i will track the character in markdown and the html will hold the elements created by the parser.
  let i = 0;
  let html = '';

  // * Makes a header depending the amount of hashes.
  // * ex: hashCounter = 2, title will be <h2></h2>
  function makeHeader() {
    let hashCounter = 1;
    let title = '';
    let titleContent = '';
    
    while(markdown[hashCounter] === '#'){
      if(hashCounter >= 6) return;
      hashCounter++;
    }

    // * h plus the amount of hashes to create the title
    title = document.createElement(`h${hashCounter}`);

    // * since we looped hashcounter times when then want to loop to get the text content with i
    i = hashCounter;
    while(i <= markdown.length || markdown[i] === '<'){
      titleContent += markdown[i];
      i++;
    }

    // * This will add the text content to the 
    title.textContent = titleContent.trim();

    html += title;
  } 

  // * would loop through the content in the editor and invoke the function that matchs the switch statement.
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
