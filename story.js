
// Function to render a part of the story
function renderStoryPart(part) {
    document.getElementById("story-text").innerHTML = part.text;
    document.getElementById("story-image").src = part.image;
    // Replace \n in text with <br> in HTML.
    document.querySelector('.story-section p').innerHTML = part.text.replace(/\n/g, '<br>');

    const optionsSection = document.querySelector('.options-section');
    
    // Clear current options
    optionsSection.innerHTML = "";

    if (part.options.A) {
        let optionAButton = document.createElement('button');
        optionAButton.textContent = part.options.A.text || "Choose Option A";
        optionAButton.id = "optionA";
        optionAButton.onclick = () => renderStoryPart(part.options.A.nextPart);
        optionsSection.appendChild(optionAButton);
    }

    if (part.options.B) {
        let optionBButton = document.createElement('button');
        optionBButton.textContent = part.options.B.text || "Choose Option B";
        optionBButton.id = "optionB";
        optionBButton.onclick = () => renderStoryPart(part.options.B.nextPart);
        optionsSection.appendChild(optionBButton);
    }

    // If there's only one button, center it.
    if ((part.options.A && !part.options.B) || (!part.options.A && part.options.B)) {
        const singleButton = optionsSection.querySelector('button');
        singleButton.style.margin = "0 auto";
        singleButton.style.display = "block";
    }
    setUpButtons(part);
}

// Helper function to set up button event listeners
function setUpButtons(part) {  
    const optionAButton = document.getElementById("optionA");
    const optionBButton = document.getElementById("optionB");

    // Clear previous listeners
    if (optionAButton) {
        optionAButton.replaceWith(optionAButton.cloneNode(true));
        document.getElementById("optionA").addEventListener("click", function () {
            currentPart = storyParts[part.options.A.nextPart];
            renderStoryPart(currentPart);
        });
    }
    if (optionBButton) {
        optionBButton.replaceWith(optionBButton.cloneNode(true));
        document.getElementById("optionB").addEventListener("click", function () {
            currentPart = storyParts[part.options.B.nextPart];
            renderStoryPart(currentPart);
        });
    }
}

function restartStory() {
    currentPart = storyParts.start;
    renderStoryPart(currentPart);
}


// On first load
let currentPart = storyParts.start; // Start with the initial story part
renderStoryPart(currentPart);

document.getElementById("restart").addEventListener("click", function () {
    restartStory();
});