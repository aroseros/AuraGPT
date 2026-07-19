const observer = new MutationObserver(()=>{
    updateAura();
});

observer.observe(document.body,{
    subtree:true,
    childList:true
});