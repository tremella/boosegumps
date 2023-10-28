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
