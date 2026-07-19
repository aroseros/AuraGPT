console.log("AuraGPT Initializing");

document.documentElement.classList.add("auragpt");

function initializeTheme() {

    document.documentElement.classList.add("auragpt");

    document.body.classList.add("auragpt-loaded");

}

initializeTheme();

const observer = new MutationObserver(() => {

    initializeTheme();

});

observer.observe(document.body, {

    subtree: true,

    childList: true

});