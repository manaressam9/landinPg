//global variables
let sections = document.querySelectorAll('section');
let uOrderedList = document.getElementById('navbar__list');
let frag = document.createDocumentFragment();
let aLinks = document.querySelectorAll('a');

//functions
//remove 'active' class from all sections
function removeActives(){
    sections.forEach((section) => {section.classList.remove('active');})
}
function removeActivesLinks(){
    aLinks.forEach((a) => {a.classList.remove('activeLink');})
}
//set nav dynamically
sections.forEach((section) => 
{
    let txt = section.getAttribute('data-nav');
    let nListItem = document.createElement('li');
    let nListAnchor = document.createElement('a');
    let txtNode = document.createTextNode(txt);
    nListAnchor.appendChild(txtNode);
    nListItem.appendChild(nListAnchor);
    frag.appendChild(nListItem);
    //connect the link and the section
   nListItem.addEventListener('click', function(){
       section.scrollIntoView({'behavior':'smooth'});
      
   });

})
uOrderedList.appendChild(frag);

//set active section
sections.forEach((section) => {
    document.addEventListener('scroll', function(){
  let rect = section.getBoundingClientRect();
  let Top = rect.top;
  if( Top >=0 &&  Top <= 110 ){
    removeActives(); 
   section.classList.add('active'); 
   // connect the link in the navbar with the active section, and add class'activeLink' to the link<a></a>
      //m4 radyaaaa t4t8l !!!
   aLinks.forEach((a) => {
    if(a.textContent == section.getAttribute('data-nav')){
          removeActivesLink();
          a.classList.add('activeLink');
      };
    
 });
  };
  
})
})
