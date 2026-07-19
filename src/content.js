console.log("AuraGPT Loaded");

document.documentElement.classList.add("auragpt");

const observer = new MutationObserver(() => {
    document.documentElement.classList.add("auragpt");
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});