const storyParts = {
  start: {
      text: `It's the end of Autumn, and you and your twin brother Alex are riding your bikes home from school. The sun is setting, casting long shadows across the road. You're pedalling your bike, feeling the cool wind against your face. 
      
      Up ahead, an old mansion stands tall and foreboding. Its darkened windows seem to stare back at you, and the twisted trees surrounding it add to its eerie charm. For as long as you can remember, it's been the subject of countless rumours and ghost stories. But you've never seen anyone go in or out of it. It's been abandoned for years, and you've always wondered what secrets it holds.

      Any other day, you'd have ignored it and gone home. But today, something about the mansion seems different. The air feels charged, almost electric, and you can't shake off the feeling that something is about to happen. Almost against your will, you find yourself slowing down, your bike coming to a stop. Alex stops beside you, his curious gaze mirroring your own.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "the_dare",
              text: "continue",
          },
      }
  },
  the_dare: {
    text: `He throws you a challenging glance.

    "Bet you wouldn't ring the doorbell," he teases.

    "Oh, grow up" you snap, unable to pull your gaze from the mansion. 

    Without waiting for your response, Alex speeds up, his bike coming to a halt right in front of the mansion's entrance. He hops off, marches up the steps, and impulsively presses the doorbell. The chime echoes eerily, and after a tense and silent minute... nothing happens. 
    
    Alex turns to you, a smug grin on his face. "See? Nothing to be afraid of. I bet it's not even locked." 

    He reaches for the door handle, and it swings open with a loud creak. You stare at him, wide-eyed. "Are you crazy? We can't just go in there!"

    "Who would know? Besides, it's not like we're stealing anything. We're just looking around. Now, are you coming or not?"
    
    Do you follow Alex into the abandoned mansion? Or do you call it quits and head home?`,
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
      text: `As you step through the grand entrance, the first thing you notice is the dim lighting. The mansion's interior is illuminated by ornate chandeliers, their candles casting flickering shadows on the walls. The air is thick with a mix of dust and age.

      The main hall is expansive, with a grand staircase leading to the upper floors. On either side, there are doors leading to various rooms, their dark wooden frames intricately carved with designs that seem to move if you stare too long.
      
      The floor, made of polished marble, reflects the candlelight, and the walls are adorned with faded portraits of people who must've lived here ages ago. Their stern expressions make you uneasy, and you can't shake off the feeling that they're watching you.
      
      As you're taking in the surroundings, a soft humming sound reaches your ears. It's distant, almost melodic, and seems to be coming from a corridor to your left.
      
      To your right, there's a shadowed door revealing a glimpse of a vast library. Rows upon rows of shelves filled with ancient books, their spines worn out from time. A soft glow emanates from the room, likely from a fireplace, casting a warm, inviting light.
      
      Torn between the two, you hesitate. Do you follow the mysterious humming? Or do you investigate the library, hoping to find answers among the old tomes?
      `,
      image: "assets/foyer.jpg",
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
      text: `"Nope, no way. This place could fall apart at any moment," you say, shaking your head. "Besides, it's getting late. We should head home." 
      
      You turn and start walking back to your bike, but Alex calls back, 
      
      "Suit yourself! I'm going in!". 
      
      You keep walking, hoping to call his bluff, but when you glance back he's nowhere to be seen. Rolling your eyes, you wait a few seconds... then a few more. But he doesn't reappear. 
      
      Ugh. You know you're going to regret this..."`,
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
      text: `Choosing the safer option, you say, "Let's check out the library."

      You and Alex head towards the door and step into the vast library. Rows upon rows of ancient books line the shelves, their spines worn and faded from time. The room is warmly lit by a fireplace, casting dancing shadows on the walls. But what immediately catches your attention is a single book displayed on a pedestal in the centre of the room.
      
      Approaching it, you see that the book is ancient, its pages yellowed and fragile. It's open to a particular page, and a passage is highlighted with a strange, glowing ink. The book's binding, however, is even more intriguing. It's made of an unfamiliar material, dark and leathery, with an odd texture that seems almost... alive.
      
      Alex leans in closer, squinting at the highlighted passage. "This looks important. Should we read it?"
      
      You hesitate, torn between the mysterious passage and the book's peculiar binding. "I don't know... Something about that binding gives me the creeps."
      
      Alex nods in agreement. "Yeah, it's definitely weird. But that passage... it might tell us something about this place."
      
      Now faced with another decision, do you choose to read the glowing passage out loud, hoping it provides answers? Or do you investigate the strange material of the book's binding, looking for clues about its origins?
      `,
      image: "assets/tome.jpg",
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
      text: `As you stand there, taking in the sights and sounds, Alex nudges you, pointing towards the corridor from where the humming is coming. "Hey, you hear that?" he whispers, his voice filled with a mix of excitement and apprehension.

      "Yeah," you reply, listening intently. "It's... strange, isn't it?"
      
      Alex nods. "Wanna check it out? Could be a clue about this place."
      
      You hesitate for a moment, glancing towards the inviting library. "I don't know... The library seems safer."
      
      Alex grins, a spark in his eyes. "Come on, Susie. Where's your sense of adventure? Besides, it might just be the radio or something."
      
      You roll your eyes but can't help but smile. "Alright, alright. Let's follow the humming. But if we get into trouble, I'm blaming you."
      
      Alex winks. "Deal."
      
      With that, the two of you cautiously make your way towards the source of the humming, the sound growing louder with each step.
      `,
      image: "assets/foyer.jpg",
      options: {
          A: {
              nextPart: "hum_or_shadow",
              text: "Keep going...",
          },
      }
  },
  hum_or_shadow: {
    text: `
    As you and Alex continue down the corridor, the humming becomes more pronounced, echoing through the cold, draughty halls. But just as you're getting lost in its hypnotic rhythm, a swift movement catches your eye. A shadow, fleeting and elusive, darts into a room just off the corridor.
      
      Alex, noticing your distraction, follows your gaze. "Did you see that?" he asks, a hint of trepidation in his voice.
      
      You nod, heart racing. "Yeah. A shadow... or something. It went into that room."
      
      He glances at the door, then back at you, torn. "What do you think? Should we check it out, or stick to the humming?"
      
      You pause, weighing the options. On one hand, the shadow could be a clue, or perhaps someone who can help. On the other, the humming has an almost magnetic pull, beckoning you forward.
      
      "It might be nothing," you muse, "but what if it's important? Then again, the humming..."
      
      "Your call, Susie."
      
      Now faced with a decision, do you choose to investigate the mysterious shadow, or do you continue on, drawn by the humming?
    `,
    image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "inspect_basement",
              text: "Continue on...",
          },
          B: {
              nextPart: "inspect_shadowy_room",
              text: "Shadowy room",
          }
      }
  },
  read_contents: {
      text: `Taking a deep breath, you start reciting the highlighted words. As you do, the room begins to grow colder, and an oppressive weight settles around you. The words don’t just echo in your ears, but in your very soul. A malevolent force, ancient and powerful, seeps into you from the book.

      Your vision blurs and you feel yourself being pushed to the back of your own mind, a dark presence taking over. A demonic entity, awakened by the words you read, now possesses your body. An insatiable hunger consumes every fiber of your being.
      
      Your mouth stretches impossibly wide, revealing countless rows of sharp, jagged teeth. Alex, horror evident in his eyes, stammers, "Susie? What... What have you done?"
      
      But there's no Susie anymore. Only the demon and its hunger.
      
      With a swift, ravenous movement, you close the distance between you and Alex. His screams echo in the room, but are quickly silenced.
      
      The mansion, with its countless mysteries and shadows, now has a new, malevolent denizen. And within you, where Susie once stood, there remains only an endless, insatiable hunger.
      `,
      image: "assets/tome.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "THE END.",
          },
      }
  },
  examine_binding: {
      text: `You say, "Let's take a closer look at the binding first."

      You reach out and gently touch the book's cover. The texture is unlike anything you've felt before, rough yet oddly familiar. The chilling realisation hits you: it's human skin.
      
      Your heart races, and a cold dread settles in your stomach. "Alex," you whisper, pulling your hand back as if burned, "This... this is skin."
      
      But there's no reply. You glance around, searching for your sibling. "Alex?" you call out, your voice trembling.
      
      He seems to have wandered deeper into the library, perhaps looking for another exit. You're about to call out to him again when suddenly, a strong hand covers your mouth from behind, stifling your scream. Panic surges through you as you try to struggle, but the grip is too strong, and darkness quickly envelops you as you succumb to unconsciousness.
      
      The last thing you remember is the faint scent of old books and the cold touch of the leather-bound tome.
      `,
      image: "assets/tome.jpg",
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
      text: `Taking a deep breath, you decide, "Let's check out that shadow. It could be a clue."

      Alex nods, and together, you both cautiously approach the door and step into the room. The atmosphere inside is heavy, and a chill runs down your spine. The room appears to be an old study, with a large oak desk in the center and bookshelves lining the walls. But what captures your attention is the shadow on the floor.
      
      There's no discernible source for it. No person, no object casting it. Yet, there it is, dark and ominous. Before you can process this, the shadow starts to grow, stretching and distorting. It looms larger, taking on a more menacing form as it advances toward you.
      
      Alex's eyes widen in alarm. "What the...?"
      
      You take a step back, heart pounding in your chest.
      
      He clenches his fists, looking equally frightened and determined. "I don't even know how to fight a shadow, but if we run, where do we go?"
      
      The shadow continues its relentless approach, the room growing colder.
      
      "It's now or never," you say, trying to muster courage. "Stay and confront this... thing, or make a break for it."
      
      The choice is clear: Do you stand your ground against the shadow, or do you trust your instincts and run for safety?
      `,
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
  fight_shadowy: {
    text: `With a burst of courage, you ball your fists and swing at the shadow and... miss.

    The shadow surges forward, its formless shape swirling and twisting. You try to fend it off, swinging and kicking at it, but it's like battling smoke. The more you move, the more it seems to envelop you.
    
    Suddenly, you feel a coldness seep into you, starting from your feet and rising. You glance down in horror to see your own shadow merging with the dark entity. It's consuming you, pulling you in. The coldness spreads, numbing your senses.
    
    "Alex!" you call out, reaching for your brother. He's frozen in place, petrified. But your voice is distant, echoing as if you're at the bottom of a deep well.
    
    The world fades to black, the cold deepening, and you feel yourself sinking, the weight of the darkness pressing down.
    
    Then, nothingness.
    `,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "start",
            text: "THE END."
        }
    }
  },
  run_from_shadowy: {
    text: `Heart pounding, you shout, "Run!" and bolt towards the door, with Alex right behind you.

    As you dash down the corridor, the humming now drowned by your own frantic heartbeat, an awful scream pierces the air. Glancing over your shoulder, you see the shadow enveloping Alex. It's pulling him in, his form merging with the darkness.
    
    "No!" you cry, reaching out for him. But the distance between you grows, and in a moment, Alex is gone, consumed entirely. The shadow, now larger and even more menacing, continues its relentless pursuit.
    
    Desperation fuels your steps, but it's in vain. The shadow catches up, and you feel the same coldness that took Alex start to seep into you. It begins at your feet, climbing, consuming, until darkness takes over.
    
    The corridor, the humming, the mansion - all fade away, leaving behind only the echoing memory of your brother's scream.
    `,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "start",
            text: "THE END."
        }
    }
  },
  creep_in_dark: {
      text: `You creep forward in the dark. The basement is lit only by the glow of the next room. You trip - you knock over a bottle! the humming is broken, and you scramble to hide yourself beneath a workbench, but it's too late - a hand grabs you and you're dragged into the next room.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "kidnapped",
              text: "uh oh.",
          },
      }
  },
  use_torch: {
      text: `You use your torch to make your way across the room. Creeping to a doorway, you look through. You see dozens of robed figures in a candle-lit room. They're conducting a ritual. Listen or run home?`,
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
      text: `You awake to the chill of stone against your back, and the sonorous drone of a dozen voices - maybe more. You glimpse robed figures surrounding you in a well lit room. 
      
      "Our Dark Brother, we offer unto you an innocent soul, that you may grant us your power," the robed figured chant. "We offer unto you this sacrifice, that you may grant us your presence." 
      
      You close your eyes barely and will yourself to breathe slowly and deeply, as if asleep. 

      "In the name of the Serpent, the Tempter, and the Beast Below, we offer unto you this sacrifice that you may rise and bring us our dues."

      You ignore their inane chanting. It's so unscientific. But wait - you notice one of the cultists is much smaller than the others. You look at him carefully and the hooded face quickly lifts and ... winks? Alex!
      `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "rescue",
              text: "What will Alex do?",
          },
      }
  },
  rescue: {
    text: `Alex seems to have a plan. He knocks over a couple of braziers filled with hot coals and rushes forward. Some of the coals land on the cultist's robes, which catch fire! In the ensuing chaos, he deftly works your bindings free.
    
    "We have to go.", he whispers.
    
    "Let's get out of here before they realise."

    You run out of the room, before the cultists realise what's going on. Then you keep running until you're out of the front door of the mansion. You've escaped!
    `,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "start",
            text: "THE END."
        }
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
    text: `You listen in. You hear the cultists chanting. They're summoning a demon! You're not sure if demons exist, but you really don't want to find out. 
    
    You've got to do something! Do you record the ritual so you can report them to the police, or do you cause some chaos?`,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "record_ritual",
            text: "record the ritual",
        },
        B: {
            nextPart: "cause_chaos",
            text: "cause some chaos!",
        },
    }
  },
  record_ritual: {
    text: `You record the ritual. You've got evidence! You can report them to the police and get them arrested. 
    
    Unfortunately, these cultists aren't bored teens: they're the real deal. You don't have words to decribe the thing they summon, but it's not a demon. It's a god, or something worse. 

    You don't have to worry for much longer, though. 
    
    "You have done well, my children. I have always rewarded those loyal to me, and reward you I will". 

    You feel the terrible weight of the god's sudden gaze upon you. Your phone slips from your hand.
    
    It hisses, "but first, I must feed."`,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "start",
            text: "THE END."
        }
    }
  },
  cause_chaos: {
    text: `You don't have much time, but you're sure there must be something in this basement you can use to ruin their ritual. You and Alex sneak around the room, and your fist closes around a box of matches. Alex holds up a bottle: it's full of some kind of liquid. In the other hand, he's found some rags.
    
    "Petrol!" he whispers. "We start a fire, and then we run, and we don't stop running until we're home."
    
    "You're kidding, right?" you whisper back. "We can't just burn down the house!"

    "We can't just let them summon a demon, either." he replies. "We have to do something. If they're smart, they'll have a fire extinguisher. If they're not, they'll just have to run for it. Either way, we ruin their ritual."

    You nod. "Let's do it."`,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "chaos_continued",
            text: "burn baby burn!"
        }
    }
  },
  chaos_continued: {
    text: `You and Alex start a fire. The cultists panic, and you run. You run until you're out of the front door of the mansion. You've escaped!
    `,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "start",
            text: "THE END."
        }
    }
  }
  // ... continue structuring for all the nodes.
};