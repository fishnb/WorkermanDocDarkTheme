document.body.classList.add("webman-dark-style");

fetch(chrome.runtime.getURL("style.css"))
  .then(response => response.text())
  .then(css => {
    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.id = "webman-dark-style";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
    const existingStyle = document.getElementById("workerman-doc-dark-style");
    if (existingStyle) {
      existingStyle.innerHTML = css;
    }
  })
  .catch(error => {
    console.error("Failed to load and inject CSS:", error);
  });