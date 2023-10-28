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
      text: `You enter the mansion together and look around. Library or hum?.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "option2a",
              text: "Enter library",
          },
          B: {
              nextPart: "option2b",
              text: "Follow the mysterious hum",
          }
      },
  },
  option1b: {
      text: `You decide to go home, but Alex runs into the mansion. You follow him.`,
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
      text: `You find yourself in an enormous library. Read book or examine binding?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "option3a",
              text: "Read contents",
          },
          B: {
              nextPart: "option3b",
              text: "Examine binding",
          }
      }
  },
  option2b: {
      text: `You follow the hum towards a basement. You also notice a shadow in a nearby room. Basement or shadow?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "option4a",
              text: "Basement",
          },
          B: {
              nextPart: "option4b",
              text: "Shadowy room",
          }
      }
  },
  option3a: {
      text: `You read the book. You are possessed by an entity. You consume your twin.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
          B: {
              nextPart: "start",
              text: "play again",
          }
      }
  },
  option3b: {
      text: `You examine the binding while Alex checks our the rest of the library. You are suddenly kidnapped and pass out.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "option6a",
              text: "kidnapped!",
          },
          B: {
            nextPart: "option6a",
            text: "kidnapped!",
          }
      }
  },
  option4a: {
      text: `You enter the basement. TODO: Finish this path.  `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
          B: {
              nextPart: "start",
              text: "play again",
          }
      }
  },
  option4b: {
      text: `You enter the shadowy room. TODO: Finish this path.  `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
          B: {
              nextPart: "start",
              text: "play again",
          }
      }
  }
  // ... continue structuring for all the nodes.
};
