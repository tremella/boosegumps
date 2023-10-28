const storyParts = {
    start: {
        text: `The twins arrive at the mansion. Alex impulsively rings the doorbell. The door opens.`,
        image: "assets/cover_house.jpg",
        options: {
            A: {
                nextPart: "option1a",
                text: "Enter mansion",
            },
            B: {
                nextPart: "option1b",
                text: "Go home",
            }
        }
    },
    option1a: {
        text: `Result of Choice A. You enter the mansion together.`,
        image: "assets/cover_house.jpg",
        options: {
            A: {
                nextPart: "option2a",
                text: "Enter library",
            },
            B: {
                nextPart: "option2b",
                text: "Follow the mysterious sound",
            }
        },
    },
    option1b: {
        text: `Susie decides they should go home, it's too spooky! But when she turns around, she notices Alex has gone into the house. She rolls her eyes and follows him into the house.`,
        image: "assets/cover_house.jpg",
        options: {
            A: {
                nextPart: "option1a",
                text: "Follow Alex (to make sure he's safe)",
            },
            B: {
                nextPart: "option1a",
                text: "Follow Alex (to yell at him)",
            }
        },
    },
    option2a: {
        text: `Wow, it's a library. NERD SHIT.`,
        image: "assets/cover_house.jpg",
        options: {
            A: {
                nextPart: "option1",
                text: "Enter mansion",
            },
            B: {
                nextPart: "option2",
                text: "Run away",
            }
        }
    },
    // ... continue structuring for all the nodes.
};

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