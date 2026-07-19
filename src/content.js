document.documentElement.classList.add('auragpt');
new MutationObserver(()=>document.documentElement.classList.add('auragpt'))
.observe(document.body,{subtree:true,childList:true});
console.log('Aura loaded');
