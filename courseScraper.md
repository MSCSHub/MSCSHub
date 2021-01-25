### I created a script to scrape course data from the ut mscs online website
### The current iteration runs in the browser console
### https://www.cs.utexas.edu/graduate-program/masters-program/online-option/courses
var result = [];
const scrapedItems = document.getElementsByClassName("column-table");
for(i=0; i<scrapedItems.length; i++){
    const y = scrapedItems[i].children
    for(j=0; j<y.length; j+=5){
        if(!y[j].classList.contains("column-blank")){
            const courseName = y[j+1].children[0].textContent;
            const prof = y[j+2].children[0].textContent;
            const category = y[j+3].children[0].textContent;
            const graphicThumbnail = y[j+0].children[0].children[0].src;
            result.push([courseName, prof, category, graphicThumbnail]);
        }
    }
}
result