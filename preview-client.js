// Local/static review forms never submit, including when Enter is pressed.
document.addEventListener('submit',event=>{if(event.target.matches('[data-preview-form], [data-demo-form]'))event.preventDefault();},true);
