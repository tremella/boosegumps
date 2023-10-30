storyParts = {
  welcome: 
      A: nextPart: "start",

  start: 
      A: nextPart: "the_dare",
      the_dare: 
          A: nextPart: "enter_together",
          enter_together: 
              A: nextPart: "enter_library",
              enter_library: 
                A: nextPart: "read_contents",              
                  read_contents: 
                    A: nextPart: "play_again",
                      play_again: 
                      A: nextPart: "start",
                B: nextPart: "examine_binding",                    
                  examine_binding: 
                      A: nextPart: "kidnapped",        
              B: nextPart: "hum_or_shadow",
              hum_or_shadow: 
                  A: nextPart: "inspect_basement",
                  inspect_basement: 
                      A: nextPart: "creep_in_dark",
                        creep_in_dark: 
                            A: nextPart: "kidnapped",
                
                      B: nextPart: "use_torch",
            
                  B: nextPart: "inspect_shadowy_room",
                  inspect_shadowy_room: 
                    A: nextPart: "inspect_shadowy_room_part_two",
                    inspect_shadowy_room_part_two: 
                      A: nextPart: "run_from_shadowy",
                      run_from_shadowy:
                        A: nextPart: "play_again",
                    B: nextPart: "fight_shadowy",
                    fight_shadowy: 
                        A: nextPart: "play_again",
                        play_again: 
                          A: nextPart: "start",
                    
          B: nextPart: "go_home",                    
            go_home: 
                A: nextPart: "enter_together",
          
                B: nextPart: "enter_together",



  use_torch: 
      A: nextPart: "listen_in",

      B: nextPart: "flee_and_fail",

  kidnapped: 
      A: nextPart: "rescue",

  rescue: 
      A: nextPart: "rescue_complete",

  rescue_complete: 
      A: nextPart: "play_again",

  flee_and_fail: 
      A: nextPart: "kidnapped",

  listen_in: 
      A: nextPart: "record_ritual",

      B: nextPart: "cause_chaos",

  record_ritual: 
      A: nextPart: "play_again",

  cause_chaos: 
      A: nextPart: "chaos_continued",

  chaos_continued: 
      A: nextPart: "chaos_complete",

  chaos_complete: 
      A: nextPart: "play_again",

  play_again: 
      A: nextPart: "start",

  // ... continue structuring for all the nodes.
};
