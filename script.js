const storyElement = document.getElementById('story');
const choice1Element = document.getElementById('choice1');
const choice2Element = document.getElementById('choice2');

// Define story content and choices
const storyNodes = {

    // Game Point 1
    1: {
        story: "You have been hired as a humble porter by a beautiful woman to carry goods to her mysterious home. Along the journey, your knowledge of exotic spices and far-off lands sparks curiosity among the women. Do you reveal your true identity as Sinbad the Voyager, or continue to play the role of a simple porter? The choice is yours, but each decision carries its own risks and rewards.",
        choices: {
            1: { text: "Reveal your identity as Sinbad the Voyager", nextNode: 2 },
            2: { text: "Keep acting as a simple porter", nextNode: 200 },
        },
    },
    // Game Point 2
    2: {
        story: "The women exchange surprised glances as you reveal your identity as the legendary Sinbad. They offer you warm hospitality but remain wary of your intentions. To test your trustworthiness, they assign you an unusual task: assist them in preparing a feast using exotic animals from far-off lands. Will you accept their challenge or refuse?",
        choices: {
            1: { text: "Accept the task willingly", nextNode: 3 },
            2: { text: "Say you are vegan", nextNode: 21 },
        },
    },
    21: {
        story: "The women pause, visibly confused by your response. After a brief, awkward silence, they ask you to leave their home, muttering about 'porters with peculiar excuses.' As you walk away, you wonder what mysteries you might have uncovered. The story ends here.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 },
        },
    },
    // Game Point 3
    3: {
        story: "As the evening progresses and the feast preparations near completion, a sudden knock at the door interrupts your work. The women exchange nervous glances before opening it to reveal three dervishes with strange scars, accompanied by the disguised Caliph Harun al-Rashid and his vizier Jaffar. You sense an air of tension and mystery among the guests.",
        choices: {
            1: { text: "Gawk at the dervishes’ scars", nextNode: 4 },
            2: { text: "Respectfully greet everyone and sit down", nextNode: 5 },
        },
    },
    4: {
        story: "Unable to contain your curiosity, you lean in closer, trying to examine the dervishes' scars. They bristle at your boldness, their eyes narrowing as they demand an explanation. The women watch silently, their expressions unreadable. The atmosphere grows tense as the dervishes challenge you to a fight.",
        choices: {
            1: { text: "Chicken out and run", nextNode: 22 },
            2: { text: "Agree to fight in the morning", nextNode: 6 },
        },
    },
    22: {
        story: "Overwhelmed by the hostility, you decide discretion is the better part of valor and retreat from the house. As you leave, the sound of laughter follows you into the night. The mysteries of the house remain unsolved, and your story ends here.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 },
        },
    },
    // Game Point 4
    5: {
        story: "You join the group at the table, offering polite greetings and observing the tension in the room. Despite your attempts to blend in, your curiosity about the dervishes' scars gnaws at you. The evening unfolds with cryptic remarks exchanged, and you must decide whether to press the dervishes or let the matter rest.",
        choices: {
            1: { text: "Press further about the scars", nextNode: 6 },
            2: { text: "Let them be", nextNode: 41 },
        },
    },
    6: {
        story: "Ignoring the warnings in their sharp glares, you question the dervishes about their scars. Their tempers flare, and a heated argument breaks out. The women rise, their patience exhausted. 'Enough!' they cry, ordering everyone to be executed for breaking the house rules.",
        choices: {
            1: { text: "Do nothing", nextNode: 51 },
            2: { text: "Plead for forgiveness", nextNode: 7 },
        },
    },
    41: {
        story: "Sensing the growing tension, you choose restraint and remain silent. The women, impressed by your self-control, announce a test. Two black dogs are brought forward, and the women command them to perform a sorrowful, haunting ritual. You must decide whether to inquire about the dogs' origin or stay silent and show compassion.",
        choices: {
            1: { text: "Ask about the dogs’ origin", nextNode: 42 },
            2: { text: "Show compassion to the dogs", nextNode: 43 },
        },
    },
    42: {
        story: "Curiosity gets the better of you, and you question the women about the dogs. Their faces harden with anger, and they declare that your insolence has sealed your fate. The executioner is summoned as you realize your mistake too late.",
        choices: {
            1: { text: "Accept your fate", nextNode: 51 },
            2: { text: "Plead for your life", nextNode: 7 },
        },
    },
    43: {
        story: "Moved by the dogs' plight, you kneel before them and whisper kind words. The women, touched by your empathy, decide to share their secrets without you having to ask. By morning, all mysteries are laid bare, and the Caliph invites everyone to his court.",
        choices: {
            1: { text: "Proceed to the court", nextNode: 9 },
        },
    },
    // Game Point 5
    51: {
        story: "Resigned to your fate, you close your eyes as the executioner approaches. The last thing you hear is the sound of steel cutting through the air. Your story ends here.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 },
        },
    },
    // Game Point 6
    7: {
        story: "Falling to your knees, you beg the women for forgiveness and offer to share a story in exchange for your life. After a long, tense silence, they relent. 'Very well,' one says, 'but your tale must be extraordinary.'",
        choices: {
            1: { text: "Be humble and keep it short", nextNode: 61 },
            2: { text: "Recall all your seven voyages", nextNode: 8 },
        },
    },
    61: {
        story: "You choose to remain humble, sharing only a brief story. Unfortunately, the women find it underwhelming. As the executioner steps forward, you realize you should have revealed the full extent of your adventures. Your story ends here.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 },
        },
    },
    8: {
        story: "You recount your seven voyages in vivid detail, mesmerizing everyone in the room. Tales of danger, bravery, and wisdom captivate the audience. The Caliph himself listens intently and, by morning, invites everyone to his palace to discuss the future.",
        choices: {
            1: { text: "Go to the Caliph’s court", nextNode: 9 },
        },
    },
// Game Point 7
9: {
    story: "The Caliph’s court is a grand and imposing hall filled with a mix of awe-inspiring splendor and palpable tension. As you and the women stand before the Caliph, the room falls silent. One by one, the three women begin to recount their sorrowful tales, each story heavier than the last, painting vivid pictures of loss, betrayal, and resilience. The court listens intently, their expressions a blend of pity and admiration for the women’s courage. After what feels like hours, the Caliph finally speaks, his voice commanding yet measured. 'I have heard your tales and weighed the balance of justice,' he declares. 'To bring order and stability, I propose marriages between the women and the men present here.' His words ripple through the room like a shockwave, leaving you to grapple with your feelings about his decision.",
    choices: {
        1: { text: "Reject the idea of marriage", nextNode: 10 },
        2: { text: "Accept the idea of marriage", nextNode: 100 },
    },
},

// Game Point 7, Decision 1
10: {
    story: "You take a deep breath and step forward, your voice firm as you reject the Caliph's proposition. The room stirs with murmurs of surprise and disapproval, but the Caliph raises a hand to silence them. 'Your choice is yours alone,' he says with an inscrutable expression. 'However, you must now decide if you wish to stay and hear my final verdict or leave and remove yourself from these affairs.' The weight of his words presses down on you, forcing you to consider the implications of both choices.",
    choices: {
        1: { text: "Leave without hearing the verdict", nextNode: 81 },
        2: { text: "Stay back to hear the verdict", nextNode: 12 },
    },
},

// Game Point 8
81: {
    story: "Without another word, you turn and walk out of the grand hall, the heavy doors closing behind you with a resounding thud. The path back to your life feels strangely hollow as you reflect on what you’ve left behind. Meanwhile, inside the court, the Caliph continues with his decision: the youngest sister is married to him, the other women are paired with the dervishes, and all disputes are resolved in what he deems a fitting end. The weight of the mysteries and sorrows you witnessed lingers in your mind, but you choose to let them fade as you return to your lavish life, detached from the drama you left behind.",
    choices: {
        1: { text: "Restart the game", nextNode: 1 },
    },
},

// Game Point 8, Decision 2
12: {
    story: "You decide to remain, determined to witness the outcome of the Caliph’s ruling. As he delivers his verdict, a gnawing sense of injustice stirs within you. The women’s faces betray a mix of resignation and quiet defiance, while the dervishes shift uncomfortably under the weight of the decision. Unable to contain yourself, you consider taking matters into your own hands. Will you challenge the Caliph directly, risking everything, or appeal to the women’s resourcefulness for a more strategic solution?",
    choices: {
        1: { text: "Challenge the Caliph to a duel", nextNode: 91 },
        2: { text: "Ask the women to intervene", nextNode: 92 },
    },
},

// Game Point 9
91: {
    story: "With fire in your veins, you step forward and challenge the Caliph to a duel, your voice echoing through the hall. A hush falls over the room as the Caliph narrows his eyes, accepting your challenge with a subtle nod. The duel begins swiftly, and you find yourself outmatched by his skill and strength. Despite your determination, the reality of your limits as a sailor rather than a warrior becomes painfully clear. The duel ends in moments, and you are subdued and dragged away to meet your fate. As you are led out, you realize that courage alone was not enough to best the ruler of Baghdad.",
    choices: {
        1: { text: "Restart the game", nextNode: 1 },
    },
},

92: {
    story: "Recognizing the futility of direct confrontation, you turn to the women and quietly urge them to act. With a glance of understanding, one of them summons a jinni from the depths of the unseen world. The jinni materializes in a whirlwind of smoke and light, towering over the court. Gasps of terror and awe ripple through the crowd as the jinni seizes the Caliph, forcing him to agree to the women’s demands. 'You shall not trouble us again,' the women declare. With the Caliph’s reluctant promise to leave them in peace, the jinni releases him, and a sense of justice prevails. The court erupts in cheers as you leave, your heart light with triumph.",
    choices: {
        1: { text: "Celebrate your victory", nextNode: 1 },
    },
},

// Branch 3: Accept Marriage
100: {
    story: "You agree to the Caliph’s proposal, though uncertainty gnaws at you. The women, each with their own unique allure and history, stand before you. The court watches with bated breath as you ponder your next move. Will you make a bold and controversial proposal, or carefully choose one of the women to wed?",
    choices: {
        1: { text: "Propose to marry all the women", nextNode: 101 },
        2: { text: "Choose a single woman to marry", nextNode: 102 },
    },
},

101: {
    story: "The court falls into stunned silence as you propose to marry all three women. The sisters exchange incredulous glances before stepping forward, their voices sharp and scornful as they chastise your arrogance. The Caliph, visibly displeased, orders you to leave the court immediately. Humiliated and alone, you are escorted out, your boldness costing you everything. The laughter of the court echoes in your ears as the doors close behind you.",
    choices: {
        1: { text: "Restart the game", nextNode: 1 },
    },
},

102: {
    story: "The Caliph nods as you declare your intention to marry a single woman. Each sister steps forward, presenting herself with grace and poise. The eldest offers wisdom, the middle promises loyalty, and the youngest captivates with her beauty and fiery spirit. The court watches as you prepare to make your decision, knowing that each choice will shape the rest of your life.",
    choices: {
        1: { text: "Choose the eldest or middle sister", nextNode: 104 },
        2: { text: "Choose the youngest sister", nextNode: 105 },
    },
},

104: {
    story: "You choose one of the elder sisters, impressed by her maturity and composed demeanor. The Caliph nods approvingly, and the court settles into a sense of calm resolution. The youngest sister, though disappointed, accepts the Caliph’s proposal. As the celebrations commence, you and your chosen bride leave the court, ready to begin a new chapter together.",
    choices: {
        1: { text: "End the game", nextNode: 1 },
    },
},

105: {
    story: "You declare your choice of the youngest sister, and the room erupts into whispers. The Caliph’s face darkens as he steps forward, his voice cold and commanding. 'You dare to take what is mine?' he challenges. Realizing the gravity of your decision, you must prepare for the inevitable confrontation. Will you face the Caliph in combat, or turn to the women for aid?",
    choices: {
        1: { text: "Accept the duel", nextNode: 91 },
        2: { text: "Ask the women to intervene", nextNode: 92 },
    },
},

// Branch 4: Acting as a Porter
200: {
    story: "Determined to keep up the guise of a simple porter, you nod respectfully as the women assign you a seemingly innocuous yet curious task: preparing a feast of exotic animals. The creatures, brought in from far-off lands, include species you've only heard of in legends. The women watch you closely as you handle each delicacy, their expressions unreadable. The air feels charged with unspoken tension, as if they are waiting for you to reveal something about yourself. Do you accept the task with eagerness, or deflect with an unusual excuse?",
    choices: {
        1: { text: "Accept the task willingly", nextNode: 3 },
        2: { text: "Say you are vegan", nextNode: 21 },
    },
},
201: {
    story: "You remain steadfast in your role as a porter, carrying out your duties with diligence but offering little else to intrigue the women. However, their patience with your unremarkable persona begins to wear thin. 'Surely there is more to you than this,' one of them remarks, her tone laced with suspicion. The others nod in agreement, their eyes narrowing. 'Perhaps it is time to uncover the truth,' another suggests ominously. Before you can react, they call for your execution, leaving you with only two options: reveal your true identity or resign yourself to your fate.",
    choices: {
        1: { text: "Reveal your identity as Sinbad", nextNode: 8 },
        2: { text: "Do nothing and accept your fate", nextNode: 51 },
    },
}

};

// Function to update the story and choices
function updateStory(node) {
    const currentNode = storyNodes[node];
    storyElement.innerHTML = `<p>${currentNode.story}</p>`;

    if (currentNode.choices[1]) {
        choice1Element.textContent = currentNode.choices[1].text;
        choice1Element.style.display = "inline-block";
    } else {
        choice1Element.style.display = "none";
    }

    if (currentNode.choices[2]) {
        choice2Element.textContent = currentNode.choices[2].text;
        choice2Element.style.display = "inline-block";
    } else {
        choice2Element.style.display = "none";
    }

    choice1Element.onclick = () => {
        if (currentNode.choices[1]) {
            makeChoice(currentNode.choices[1].nextNode);
        }
    };
    choice2Element.onclick = () => {
        if (currentNode.choices[2]) {
            makeChoice(currentNode.choices[2].nextNode);
        }
    };
}
// Initialize the game
function makeChoice(choice) {
    updateStory(choice);
}
const backgroundMusic = document.getElementById('background-music');
const toggleMusicButton = document.getElementById('toggle-music');
const musicIcon = document.getElementById('music-icon');

toggleMusicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicButton.textContent = 'Pause';
        musicIcon.className = 'fas fa-pause'; // Change icon to pause
    } else {
        backgroundMusic.pause();
        toggleMusicButton.textContent = 'Play';
        musicIcon.className = 'fas fa-play'; // Change icon to play
    }
});


window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5; // Adjust the volume as needed
    backgroundMusic.play().catch((error) => {
        console.log('Autoplay blocked. Attempting fallback:', error);
    });
});


// Start the game at node 1
updateStory(1);
