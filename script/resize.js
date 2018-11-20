var pageWidth = window.innerWidth/10
rem.innerHTML=`html{
  font-size:${pageWidth}px;
}`
$(window).resize(function () { 
  pageWidth = window.innerWidth/10
  rem.innerHTML=`html{
    font-size:${pageWidth}px;
  }`
});