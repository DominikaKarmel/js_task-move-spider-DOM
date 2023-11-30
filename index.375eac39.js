document.addEventListener("click",t=>{let e=document.body,i=document.querySelector(".spider"),l=document.querySelector(".wall");l.addEventListener("click",t=>{let c=t.clientX,n=t.clientY,d=(e.clientWidth-l.clientWidth)/2,o=(e.clientHeight-l.clientHeight)/2,h=c-d-i.offsetWidth/2,s=n-o-i.offsetHeight/2;h=Math.min(Math.max(h,0),l.clientWidth-i.offsetWidth),s=Math.min(Math.max(s,0),l.clientHeight-i.offsetHeight),i.style.top=`${s+window.scrollY}px`,i.style.left=`${h+window.scrollX}px`})});//# sourceMappingURL=index.375eac39.js.map

//# sourceMappingURL=index.375eac39.js.map
