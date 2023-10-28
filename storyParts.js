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
              nextPart: "kidnapped",
              text: "kidnapped!",
          }
      }
  },
  inspect_basement: {
      text: `You enter the basement. The humming is very loud now: you realise it's chanting. Do you creep forward in the dark, or investigate with your torch? `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "creep_in_dark",
              text: "play it safe, keep the torch off",
          },
          B: {
            nextPart: "use_torch",
            text: "use torch to investigate",
        }
      }
  },
  inspect_shadowy_room: {
      text: `You enter the shadowy room. You are accosted by a shadowy creature! run or fight?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "run_from_shadowy",
              text: "run!",
          },
          B: {
              nextPart: "fight_shadowy",
              text: "fight",
          },
      }
  },
  creep_in_dark: {
      text: `You creep forward in the dark. The basement is lit only by the sinister glow of the bottles. You trip - you knock over a bottle! the humming is broken, you are discovered!`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "sacrifice_time",
              text: "uh oh.",
          },
      }
  },
  use_torch: {
      text: `you use your torch to make your way across the room. The bottles glow silently. Creeping to a doorway, you look through. You see dozens of robed figures in a candle-lit room. They're conducting a ritual. Listen or run home?`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "listen_in",
              text: "eavesdrop",
          },
          B: {
              nextPart: "flee_and_fail",
              text: "go home!",
          },
      }
  },
  kidnapped: {
      text: `you've been kidnapped! you wake up in a dank, drippy basement. This seems bad. `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "play again",
          },
      }
  },
  flee_and_fail: {
      text: `You whisper to Alex that you've had enough- you're going home. Silence - you turn and he's not there. Suddenly, gloved hands close over your mouth and everything goes black. You've been kidnapped!`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "kidnapped",
              text: "uh oh.",
          },
      }
  },
  listen_in: {
    text: `You listen in. You hear the cultists chanting. They're summoning a demon! You're terrified, but you've got to do something`,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "record_ritual",
            text: "record the ritual",
        },
        B: {
            nextPart: "commit_arson",
            text: "molotov time, baby!",
        },
    }
  }
  // ... continue structuring for all the nodes.
};