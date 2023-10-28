
// Function to render a part of the story
function renderStoryPart(part) {
    document.getElementById("story-text").innerHTML = part.text;
    document.getElementById("story-image").src = part.image;
    setUpButtons(part);
}

// Helper function to set up button event listeners
function setUpButtons(part) {  
    const optionAButton = document.getElementById("optionA");
    const optionBButton = document.getElementById("optionB");
    // Update button texts
    if (part.options.A) {
        optionAButton.textContent = part.options.A.text;
    }
    if (part.options.B) {
        optionBButton.textContent = part.options.B.text;
    }

    // Clear previous listeners
    optionAButton.replaceWith(optionAButton.cloneNode(true));
    optionBButton.replaceWith(optionBButton.cloneNode(true));

    document.getElementById("optionA").addEventListener("click", function () {
        currentPart = storyParts[part.options.A.nextPart];
        renderStoryPart(currentPart);
    });

    document.getElementById("optionB").addEventListener("click", function () {
        currentPart = storyParts[part.options.B.nextPart];
        renderStoryPart(currentPart);
    });
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