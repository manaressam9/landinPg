//global variables
let sections = document.querySelectorAll('section');
let uOrderedList = document.getElementById('navbar__list');
let frag = document.createDocumentFragment();


//functions
//remove 'active' class from all sections
function removeActives(){
    sections.forEach((section) => {section.classList.remove('active');})
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
   // connect the link in the navbar with the active section, and add class'activeLink' to the link<a></a> !!WORKS!!
   let Links = document.querySelectorAll('li');
    Links.forEach((li) => {
      let txt = li.textContent;
      if (txt == section.getAttribute('data-nav')){
        Links.forEach((li) => {li.classList.remove('activeLink');})
        li.classList.add('activeLink');
      }
    })
  
  }
  
})
})
