/**
 * Dynamically loads a CSS or JavaScript file.
 * @param {string} path - The URL to the asset.
 * @param {string} type - The type of asset ('js' or 'css').
 * @param {string} location - Where to inject the asset ('head' or 'body').
 */
function loadAsset(path, type, location = 'head') {
  if (type === 'js') {
    const script = document.createElement('script');
    script.src = path;
    script.async = true;
    if (location === 'body') {
      document.body.appendChild(script);
    } else {
      document.head.appendChild(script);
    }
  } else if (type === 'css') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    if (location === 'body') {
      document.body.appendChild(link);
    } else {
      document.head.appendChild(link);
    }
  }
}

/**
 * Dynamically loads an inline JavaScript block.
 * @param {string} code - The JavaScript code to execute.
 * @param {string} location - Where to inject the script ('head' or 'body').
 */
function loadInlineScript(code, location = 'head') {
  const script = document.createElement('script');
  script.innerHTML = code;
  if (location === 'body') {
    document.body.appendChild(script);
  } else {
    document.head.appendChild(script);
  }
}
