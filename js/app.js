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
    // create li and a and txtNode and append them to frag
    let txt = section.getAttribute('data-nav');
    let nListItem = document.createElement('li');
    let nListAnchor = document.createElement('a');
    let txtNode = document.createTextNode(txt);
    nListAnchor.appendChild(txtNode);
    nListItem.appendChild(nListAnchor);
    frag.appendChild(nListItem);
    //connect the link and the section
   nListItem.addEventListener('click', function()
    {
       section.scrollIntoView({'behavior':'smooth'});
    });

})
 //apped the frag which contains li , a and textContent to the nav
uOrderedList.appendChild(frag);

//set active section
sections.forEach((section) => 
{
    // add active to the section that is visible in the viewboard on scroll
    document.addEventListener('scroll', function()
{
  let rect = section.getBoundingClientRect();
  let Top = rect.top;
  if( Top >=0 &&  Top <= 150 || Top <=0 && Top >=-550)
  {
    removeActives(); 
    section.classList.add('active');
   // connect the link in the navbar with the active section, and add class'activeLink' to the link
   let Links = document.querySelectorAll('li');
    Links.forEach((li) => 
    {
      let txt = li.textContent;
      if (txt == section.getAttribute('data-nav'))
      {
        Links.forEach((li) => {li.classList.remove('activeLink');})
        li.classList.add('activeLink');
      }
    //remove active class and activeLink class when stop scrolling
      setTimeout(function(){li.classList.remove('activeLink');
      section.classList.remove('active')},2500);
    })
  
  }
  
})
})
//scroll to top butto
var topButton = document.createElement('button');
document.body.appendChild(topButton);
topButton.textContent ='Top';
topButton.setAttribute('id','myBtn');
window.onscroll = function() { if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }};
  topButton.addEventListener('click',function(){document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;})
