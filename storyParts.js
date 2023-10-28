const storyParts = {
  start: {
      text: `The twins arrive at the mansion. Alex impulsively rings the doorbell. The door opens.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "enter_together",
              text: "Enter mansion",
          },
          B: {
              nextPart: "go_home",
              text: "Go home",
          }
      }
  },
  enter_together: {
      text: `You enter the mansion together and look around. Library or hum?.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "enter_library",
              text: "Enter library",
          },
          B: {
              nextPart: "follow_hum",
              text: "Follow the mysterious hum",
          }
      },
  },
  go_home: {
      text: `You decide to go home, but Alex runs into the mansion. You follow him.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "enter_together",
              text: "Follow Alex (to make sure he's safe)",
          },
          B: {
              nextPart: "enter_together",
              text: "Follow Alex (to yell at him)",
          }
      },
  },
  enter_library: {
      text: `You find yourself in an enormous library. Read book or examine binding?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "read_contents",
              text: "Read contents",
          },
          B: {
              nextPart: "examine_binding",
              text: "Examine binding",
          }
      }
  },
  follow_hum: {
      text: `You follow the hum towards a basement. You also notice a shadow in a nearby room. Basement or shadow?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "inspect_basement",
              text: "Basement",
          },
          B: {
              nextPart: "inspect_shadowy_room",
              text: "Shadowy room",
          }
      }
  },
  read_contents: {
      text: `You read the book. You are possessed by an entity. You consume your twin.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  },
  examine_binding: {
      text: `You examine the binding while Alex checks our the rest of the library. You are suddenly kidnapped and pass out.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "library_kidnap",
              text: "kidnapped!",
          }
      }
  },
  inspect_basement: {
      text: `You enter the basement. TODO: Finish this path.  `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  },
  inspect_shadowy_room: {
      text: `You enter the shadowy room. You are accosted by a shadowy creature! run or fight?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "run_from_shadowy",
              text: "run",
          },
          B: {
              nextPart: "fight_shadowy",
              text: "fight",
          }
      }
  },
  option5a: {
      text: `TODO: Finish this path.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  },
  option5b: {
      text: `TODO: Finish this path.  `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  },
  library_kidnap: {
      text: `you've been kidnapped! you wake up in a dank, drippy basement. This seems bad. `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  }
  // ... continue structuring for all the nodes.
};