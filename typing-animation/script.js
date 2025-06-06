document.addEventListener('DOMContentLoaded', function()
{
    const titleElement = document.getElementById('typing-title');
    const titleText = "Web Development";

    let index = 0;
    function typeEffect()
    {
        if(index < titleText.length)
        {
            titleElement.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    
    setTimeout(typeEffect, 500);
});