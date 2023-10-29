
let historyStack = [];

// Function to render a part of the story
function renderStoryPart(part) {
    if (part.name != "welcome")
        historyStack.push(part)
    if (part.name == "start")
        historyStack = []
    document.getElementById("story-text").innerHTML = part.text;
    document.getElementById("story-image").src = part.image;
    // Replace \n in text with <br> in HTML.
    document.querySelector('.story-section p').innerHTML = part.text.replace(/\n/g, '<br>');

    const optionsSection = document.querySelector('.options-section');
    
    // Clear current options
    optionsSection.innerHTML = "";
    
    const options = ['A', 'B'];
    for (let opt of options) {
        if (part.options[opt]) {
            let button = document.createElement('button');
            button.textContent = part.options[opt].text || `Choose Option ${opt}`;
            button.id = `option${opt}`;
            button.className = 'custom-button'
            button.onclick = () => renderStoryPart(part.options[opt].nextPart);
            optionsSection.appendChild(button);
        }
    }
    
    // If there's only one button, center it.
    if (optionsSection.querySelectorAll('button').length === 1) {
        const singleButton = optionsSection.querySelector('button');
        singleButton.style.margin = "0 auto";
        singleButton.style.display = "block";
    }
    setUpAboutPage();
    setUpButtons(part);
}

function setUpAboutPage(){
    document.getElementById('about').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('.about-section').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    });
    
    document.getElementById('closeAbout').addEventListener('click', function() {
        document.querySelector('.about-section').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    });
    document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.about-section').style.display = 'none';
    this.style.display = 'none';
});
}

// Helper function to set up button event listeners
function setUpButtons(part) {  
    const options = ['A', 'B'];

    options.forEach(option => {
        const button = document.getElementById(`option${option}`);

        if (button) {
            // Clear previous listeners
            button.replaceWith(button.cloneNode(true));
            document.getElementById(`option${option}`).addEventListener("click", function () {
                currentPart = storyParts[part.options[option].nextPart];
                renderStoryPart(currentPart);

                // Scroll to top
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
}

function restartStory() {
    historyStack = []
    currentPart = storyParts.start;
    renderStoryPart(currentPart);}

function undo() {
    if (historyStack.length > 1) {  // The first part is the starting point, so don't pop it.
        historyStack.pop();  // Remove the current part
        const lastPart = historyStack.pop();
        if (lastPart){
            currentPart = lastPart;
            renderStoryPart(lastPart);  // Render the previous part\
        }
    }
}


// On first load
let currentPart = storyParts.welcome; // Start with the welcome page.
renderStoryPart(currentPart);

document.getElementById("restart").addEventListener("click", function () {
    restartStory();
});

document.getElementById('undo-button').addEventListener('click', function(event) {
    event.preventDefault();
    if (historyStack.length > 1) {  // The first part is the starting point, so don't pop it.
        historyStack.pop();  // Remove the current part
        const lastPart = historyStack.pop();
        if (lastPart){
            currentPart = lastPart;
            renderStoryPart(lastPart);  // Render the previous part\
        }
    }
});