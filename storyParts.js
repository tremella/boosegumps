const storyParts = {
  welcome: {
    text: `Welcome to our playable project for Halloween 2023: BOOSEGUMPS. 

    This is a tribute to a well-known choose-your-own-adventure series from yesteryear. 

    To start your terrifying adventure, click the button below.... <b>if you dare</b>.`,
    image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "start",
              text: "START",
          },
      }
  },
  start: {
      text: `It's the end of Autumn, and you and your twin brother Alex are riding your bikes home from school. The sun is setting, casting long shadows across the road. You're pedalling your bike, feeling the cool wind against your face. 
      
      Up ahead, the old mansion stands tall and foreboding. Its darkened windows seem to stare back at you.
      
      For as long as you can remember, it's been the subject of countless rumours and ghost stories. But you've never seen anyone go in or out of it. It's been abandoned for years, and you've always wondered why.

      Any other day, you'd have ignored it and gone home. But today, something about the mansion seems different. Your bike slows, and you come to a stop. The air is still, and there's a silence which feels... expectant. You can't shake off the feeling that something is about to happen. 
      
      Alex stops beside you.
      
      "Susie?" he asks, "What's up?"`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "the_dare",
              text: "continue",
          },
      }
  },
  the_dare: {
    text: `
    'Is it just me, or does something seem off?' you ask, glancing at Alex.

    "That place has always been creepy," he replies, unfazed. A beat passes, and he adds, "Dare me to ring the doorbell?" 
    
    "Oh, grow up" you snap, unable to pull your gaze from the mansion. He's always been like this, making up stupid dares and challenges, always pushing things too far. Most of the time he follows through whether you dare him or not, and then you both end up in trouble. 

    True to form, Alex starts pedalling again, his bike coming to a halt right in front of the mansion's entrance.
    
    "Alex, don't!" you call out, but he's already off his bike. He bounds up the steps, and rings the doorbell. The chime echoes and after a tense and silent minute... nothing happens. 
    
    Alex turns to you. "See? Nothing to be afraid of. I bet it's not even locked." 

    On impulse he reaches for the door handle, and it swings open with a loud creak. You stare at him. "Are you crazy? We can't just go in there!"

    "Who'd know? Besides, it's not like we're stealing anything. We're just looking around. Now, are you coming or not?"
    
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
      text: `As you step through the entrance, the first thing you notice is the smell. The air is thick with dust, but there's a strange metallic taste to the air you can't identify. In the dim light, you can barely make out the details of the foyer, but you can tell it must have been beautiful once. 

      The main hall is dominated by a a grand ruin of a staircase. Some of its steps are missing, and the banister is broken in places. On either side, there are doors leading to various rooms, but one catches your eye - it's ajar, with a faint glow emanating from within. 

      "Alex", you say. "If this place is abandoned, then why is there a light on in that room?". Your voice echoes around the room, and you lower it instinctively.

      He isn't listening to you. Instead, he's squinting past the staircase, deeper into the foyer. "Can you hear that?" he murmurs, his voice barely audible. "It sounds like... humming?"
            
      As you pause to listen, a soft humming sound reaches your ears. It's distant, almost melodic, and seems to be coming from deeper within the house. It's puzzling - but so is the light coming from the room.
      
      Torn between the two, you hesitate. Do you investigate the lit room, or the mysterious humming?`,
      image: "assets/foyer.jpg",
      options: {
          A: {
              nextPart: "enter_library",
              text: "Investigate the room",
          },
          B: {
              nextPart: "hum_or_shadow",
              text: "Investigate the humming",
          }
      },
  },
  go_home: {
      text: `"Nope, no way. That place could fall apart at any moment," you say, shaking your head. "Besides, it's getting late. We should head home" 

      You turn your bike away, but Alex calls back, 
      
      "Susie! I'm going in with or without you!". 
      
      You start pedalling slowly, hoping to call his bluff, but when you glance back he's nowhere to be seen. Rolling your eyes, you wait a few seconds... then a few more. But he doesn't reappear. 
      
      Ugh. You know you're going to regret this...`,
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
      text: `"If someone's here, we'd better figure that out first", you reason. "Let's check out that room."

      You and Alex head towards the door and step into a small library. The room is cluttered, and books line the shelves, their spines worn and faded from time. There's a fireplace, the glow of coals warming the room. Someone must have been here, you realise with a thrill.

      But what immediately catches your attention is a single book displayed on a pedestal in the centre of the room.

      Approaching it, you see that the book is ancient, its pages yellowed and fragile. It's open to a particular page, and a circular diagram is highlighted with a strange, glowing ink. The book's binding, however, is even more intriguing. It's made of an unfamiliar material, pale and leathery, with an odd texture that seems almost... alive. Familiar, somehow.

      Alex leans in closer, squinting at the glowing circle.

      You hesitate, torn between the mysterious image and the book's peculiar binding. 

      Do you choose to inspect the glowing glyphs closer? Or do you investigate the strange material of the book's binding, looking for clues about its origins?
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
  hum_or_shadow: {
    text: `
      "You're curious about the source of the light, but the hum is strangely irresistible. As one, you and Alex make your way deeper into the house, the sound growing louder with each step.

      As you and Alex continue down the corridor, the humming becomes more pronounced, echoing through the cold, draughty halls. But just as you're getting lost in its hypnotic rhythm, a swift movement catches your eye. A shadow, fleeting and elusive, darts into a room just off the corridor.
      
      Alex, noticing your distraction, follows your gaze. "Did you see that?" he asks, a hint of trepidation in his voice.
      
      You nod, heart racing. "Yeah. A shadow... or something. It went into that room."
      
      He glances at the door, then back at you, torn. "What do you think? Should we check it out?"
      
      You pause, weighing the options. On one hand, the shadow doesn't seem like something you can afford to ignore. On the other, the humming has an almost magnetic pull, beckoning you forward.
                  
      Now faced with a decision, do you choose to investigate the mysterious shadow, or do you continue on, drawn by the humming?
    `,
    image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "inspect_basement",
              text: "Continue on....",
          },
          B: {
              nextPart: "inspect_shadowy_room",
              text: "Investigate shadowy room",
          }
      }
  },
  read_contents: {
      text: `
      Taking a deep breath, you peer closer at the highlighted glyphs. Upon closer inspection, there's a jagged quality to them, a sort of circular symmetry. Did it look like that before?

      As your fingers trace over them, the room begins to grow colder, and an oppressive weight settles around you. You begin to feel hungry - starving, in fact. The book glows brighter. The glyphs are shifting before your eyes, multiplying, until you feel as though you're looking into the maw of something enormous.

      Your vision blurs and you feel yourself sinking somehow, your thoughts being crowded out and a dark presence taking over. An entity flows from the book and now possesses your body. An insatiable hunger consumes every fiber of your being.

      You turn to look at your prey.

      Your mouth stretches impossibly wide, revealing countless rows of sharp, jagged teeth. Alex, horror evident in his eyes, stammers, "Susie? What... What's going on?"

      But there's no Susie anymore. There's only hunger.

      With a swift, ravenous movement, you close the distance between you and Alex. His screams echo in the room, but are quickly silenced. The mansion, with its countless mysteries and shadows, now has a new, malevolent denizen. And within you, where Susie once stood, there remains only an endless, insatiable hunger.
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

      You reach out and gently touch the book's cover. The texture is unlike anything you've felt on a book before, yet it's oddly familiar. Faintly spotted, just lightly. Your eyes drift to your own lightly freckled arm and the chilling realisation hits you: it's human skin.
      
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
      text: `

      Behind the staircase, there's a door leading to a basement, where the humming is loudest. You tread carefully down the stairs.

      The echo of chanting reverberates through the darkness. You pause at the base of the staircase, peering ahead. You can barely see anything - it's cluttered with crates, bottles, some glowing dimly. Odd metal implements hang from the walls, but you're pretty sure they're not gardening tools. 

      You strain your ears, trying to make out any words, but the it's not in any language you recognise. It's a low, sonorous drone, and it's coming from the next room, which is throwing out a dim red light - the only thing casting any light into the basement at all. 

      You dig your phone out of your pocket. If you use the flashlight, you might see what's going on - maybe you can find something to defend yourself with. Just in case. 
      
      But it could also draw attention. Your hands tremble. Maybe it's better to inch forward slowly in the dark. You turn to Alex, but of course he's already moved ahead of you, no trace of fear in his expression. Reckless as always.
      `,
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
      text: `
      Taking a deep breath, you nod towards the shadow. "We can't leave it unchecked. If someone's here, we need to know."

      Alex nods, and together, you both cautiously approach the door and step into the room. The atmosphere inside is heavy, and a chill runs down your spine. The room appears to be an old study, with a large oak desk in the center and bookshelves lining the walls. But what captures your attention is the shadow on the floor.
      
      There's no discernible source for it. No person, no object casting it. Yet, there it is, dark and ominous. Before you can process this, the shadow starts to spread across the floor, stretching and distorting. Then, it begins to flow upwards, forming a column, taking on a more human form as it flows toward you.
      
      Alex's eyes widen in alarm. "What the...?"
      
      You take a step back, heart pounding in your chest.

      "What <i>is</i> that?" Alex asks, his voice trembling.
      
      The shadow continues its relentless approach, the room growing colder.
      
      "I don't know. But I don't think it likes us," you manage.

      The choice is clear: Do you stand your ground against the shadow, or do you run?
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
      text: `You creep forward in the dark. The basement is lit only by the glow of the next room. 

      Alex is a little ways behind you, and you can hear him breathing heavily. You're not sure if he's scared or excited. For your part, you're definitely scared.
      
      Suddenly, you trip - you knock over a bottle! It shatters and instantly, the humming is broken.
      
      You need to get out of here <i>now</i>. You head for the basement stairs, glancing wildly about for Alex but you can't see him in the darkness. A floorboard creaks behind you. Before you can turn, leather-gloved hands clamp over your mouth, muffling your scream. You thrash and kick but your attacker is too strong. "Found you," a rough voice rasps.

      Fingers dig into your cheeks. The stench of cloves and mildew fills your nose. You try to wrench free but their grip is like iron. Dark spots swarm your vision. The foyer tilts, and everything goes black.
      `,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "kidnapped",
              text: "uh oh.",
          },
      }
  },
  use_torch: {
      text: `You use your torch to make your way across the debris-strewn room. Old furniture lies smashed and fabrics hang in moth-eaten shreds. 

      Approaching a doorway, you peer inside. Your breath catches in your throat. Dozens of robed figures stand within a vast chamber lit by flickering candles. Strange symbols cover the walls and floor.

      The cultists sway in unison, chanting in a strange, guttural language. You feel a frightening, primal energy in the air. Like a coming storm. 
      
      Do you continue to listen, or run home?`,
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
      text: `You awake to the chill of stone against your back, and the sonorous drone of a dozen voices - maybe more. You glimpse robed figures surrounding you in a well lit room. Enormous braziers line the walls, casting flickering shadows.
      
      "Our Dark Brother, we offer unto you an innocent soul, that you may grant us your power," the robed figures chant. "We offer unto you this sacrifice, that you may grant us your presence." 
      
      You're tied to a stone altar, and a robed figure approaches you with a knife. You're wide awake now, but gripped with fear. You can't speak. You can't move. You can't scream. 

      "In the name of the Serpent, the Tempter, and the Beast Below, we offer unto you this sacrifice that you may rise and bring us our dues" the figure intones.

      You're surrounded and totally powerless. You can see your own petrified face in the reflection of the knife.
      
      But wait - you notice one of the cultists is much smaller than the others. You look at him carefully and the hooded face quickly lifts and... winks? Alex!
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
    text: `
    Alex seems to have a plan - for once, you're thankful for your brother's impulsiveness. The figure raises the knife above you. 
    
    On cue, Alex kicks over a flaming brazier, scattering embers across the floor! The cultists shriek as their clothes catch fire, and the room descends into chaos.

    Alex rushes over and saws at your bindings with his pocketknife. In the ensuing mayhem, he deftly works you free. You hold still, pulse thundering, as the ropes fall away. The cultists flail about in panic around you, oblivious.

    "We have to go.", he whispers. "Let's get out of here before they realise."

    Alex squeezes your hand tightly and pulls you towards the stairs. Away from the flames, the wailing cultists.

    Up the stairs, through shadowy corridors. Bursting outside into cool night air. The cult's furious shouts echo inside.

    Alex grins, eyes bright with exhilaration. You manage a shaky smile in return. As one, you grab you bikes, pedalling wildly, down the road, unseen. Away from the nightmare.

    Together.
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
      text: `
      "I want to get out of here," you hiss to Alex, throat tight with fear. No response... you realise you've lost sight of him in the dark. Your heart skips a beat.

      "Alex?" you rasp, a little louder. The chanting drones on somewhere nearby. Still no sign of him. Panic rises in your chest. Something brushes your arm and you yelp before you realise - it's just a cobweb.

      "Alex, come on!" you raise your voice to speaking level. 
      
      You need to get out of here <i>now</i>. You head for the basement stairs, glancing wildly about for any sign of Alex. A floorboard creaks behind you. Before you can turn, leather-gloved hands clamp over your mouth, muffling your scream. You thrash and kick but your attacker is too strong. "Found you," a rough voice rasps.

      Fingers dig into your cheeks. The stench of cloves and mildew fills your nose. You try to wrench free but their grip is like iron. Dark spots swarm your vision. The foyer tilts, and everything goes black.`,
      image: "assets/cover_house.jpg",
      options: {
          A: {
              nextPart: "kidnapped",
              text: "uh oh.",
          },
      }
  },
  listen_in: {
    text: `The cultists' chanting rises to a frenzied pace. You press yourself against the cold stone wall, straining to understand the strange guttural words.

    An enormous pentagram is etched into the floor, strange symbols scrawled at each point. The robed figures sway, arms raised towards a towering onyx idol in the center. Its monstrous visage seems to leer in the flickering light.
    
    Alex cranes his neck to see past you, utterly fascinated. Don't these people realize how dangerous this is? You exchange an anxious glance. The candlelit chamber feels primal, terrifying.
    
    The cadence builds, and an acrid wind kicks up, making the candles gutter. Alex shivers, eyes bright. He mimes recording on his phone. Not a bad idea - video proof could help stop these people. But every instinct screams disrupt this immediately, by any means necessary. Before it goes too far.
    
    Your palms sweat as you weigh your options. Causing a ruckus might work, but you're outnumbered and unarmed. But doing nothing? Unthinkable. Your legs quiver, poised to run. Shadows leap and twist on the walls. The chanting reaches a thunderous crescendo. 
    
    What do you do?`,
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
    
    Unfortunately, these cultists aren't delusional, they're the real thing. You don't have words to decribe the thing they summon, but it's not a demon. It's a god, or something worse. 

    You don't have to worry for much longer, though. A voice like smoke fills the room, and the cultists fall silent.
    
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
    text: `You don't have much time, but you're sure there must be something in this basement you can use to disrupt their ritual. You and Alex sneak around the room, and your fist closes around a box of matches. Alex holds up a bottle: it's full of some kind of liquid.
    
    "Petrol!" he whispers. "We start a fire, and then we run, and we don't stop running until we're home."
    
    "You're kidding, right?" you whisper back. "We can't just burn down the house!"

    "We can't just let them summon a demon, either." he replies. "We have to do something. If they're smart, they'll have a fire extinguisher. If they're not, they'll just have to run for it. Either way, it buys us time to get help."

    You glance into the room and spy the mouldering drapes on the wall, and nod. 
    
    "Let's do it."`,
    image: "assets/cover_house.jpg",
    options: {
        A: {
            nextPart: "chaos_continued",
            text: "burn baby burn!"
        }
    }
  },
  chaos_continued: {
    text: `
    [TODO: finish this section]
    In a burst of adrenaline, you grab the borrle from Alex and sneak into the room, him trailing behind oyu. You grab at a decrepit old drape and yank it down, soaking it with fluid. Alex catches on instantly, pulling out his lighter and setting the moth-eaten fabric ablaze. You hurl the flaming fabric onto the altar amidst the stricken cultists.

    Chaos erupts. Robed figures scream and scramble over each other to get away from the growing flames.
    
    "Now!" Alex yells. He's already bolting up the basement stairs. You race after him through the smoke, flames licking at your heels. The cultists' angry shouts echo behind you.
    
    You burst out of the front door gulping mouthfuls of fresh night air. Alex whoops excitedly, but you don't stop running until you've sprinted all the way down the long driveway and out the iron gates, now standing open.
    
    You pause to look back, panting. Cult members pour out of the mansion, smoke beginning to pour from inside. They don't seem to see you in the darkness. You watch as they flee into the surrounding woods, their infernal ritual interrupted.
    
    You shudder with relief. The chanting has stopped, the night gone silent except for the growing, distant roar of flames. The mansion will be reduced to embers by sunrise. You're just grateful to have escaped with your lives.`,
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