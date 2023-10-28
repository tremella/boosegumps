const storyParts = {
    start: {
        text: `Start: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Tincidunt id aliquet risus feugiat in ante metus dictum. Nulla facilisi nullam vehicula ipsum a. Maecenas ultricies mi eget mauris pharetra et ultrices.
        Tincidunt praesent semper feugiat nibh sed. Et tortor at risus viverra. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
        Nisi lacus sed viverra tellus in. Nisi vitae suscipit tellus mauris. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.
        Adipiscing elit ut aliquam purus. Bibendum enim facilisis gravida neque convallis a cras. Risus feugiat in ante metus dictum at tempor commodo.
        Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum.`,
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
    option1: {
        text: `Result of Choice A.  Viverra tellus in hac habitasse. Tempor orci eu lobortis elementum nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus.
        Tempus iaculis urna id volutpat lacus laoreet non. Sem fringilla ut morbi tincidunt augue. Varius sit amet mattis vulputate enim. 
        Aliquet risus feugiat in ante. Ac turpis egestas sed tempus urna et pharetra. 
        Ut sem viverra aliquet eget sit amet tellus cras. Semper quis lectus nulla at volutpat diam ut.
        Pellentesque sit amet porttitor eget dolor morbi non. Ullamcorper malesuada proin libero nunc consequat interdum varius.
        Lacus sed viverra tellus in hac. Porttitor leo a diam sollicitudin tempor id eu nisl. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
        Diam sollicitudin tempor id eu. Vel elit scelerisque mauris pellentesque pulvinar. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.`,
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
        },
    },
    option2: {
        text: `Result of Choice B.  Viverra tellus in hac habitasse. Tempor orci eu lobortis elementum nibh. Diam volutpat commodo sed egestas egestas fringilla phasellus.
        Tempus iaculis urna id volutpat lacus laoreet non. Sem fringilla ut morbi tincidunt augue. Varius sit amet mattis vulputate enim. 
        Aliquet risus feugiat in ante. Ac turpis egestas sed tempus urna et pharetra. 
        Ut sem viverra aliquet eget sit amet tellus cras. Semper quis lectus nulla at volutpat diam ut.
        Pellentesque sit amet porttitor eget dolor morbi non. Ullamcorper malesuada proin libero nunc consequat interdum varius.
        Lacus sed viverra tellus in hac. Porttitor leo a diam sollicitudin tempor id eu nisl. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
        Diam sollicitudin tempor id eu. Vel elit scelerisque mauris pellentesque pulvinar. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.`,
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

let currentPart = storyParts.start; // Start with the initial story part

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

document.getElementById("restart").addEventListener("click", function () {
    restartStory();
});

// On first load
renderStoryPart(currentPart);