const storyElement = document.getElementById('story');
const choice1Element = document.getElementById('choice1');
const choice2Element = document.getElementById('choice2');

// Define story content and choices
const storyNodes = {
    // Game Point 1: Initial Decision
    1: {
        story: "As a humble porter, you've been hired by a beautiful woman to carry goods to her home. Along the way, your knowledge of exotic spices and far-off lands makes the women curious about who you are. What will you do?",
        choices: {
            1: { text: "Reveal that you are Sinbad the Voyager", nextNode: 2 },
            2: { text: "Keep acting as a simple porter", nextNode: 20 }
        }
    },

    // Branch 1: Revealing Identity
    2: {
        story: "You reveal your identity as Sinbad the Voyager. The women are shocked and intrigued. They offer you great hospitality, but their wariness grows as they know you are no ordinary guest. They test your trustworthiness by assigning you a task: assist them in preparing a special feast of exotic animals.",
        choices: {
            1: { text: "Accept the task willingly", nextNode: 3 },
            2: { text: "Say you are vegan", nextNode: 21 }
        }
    },
    3: {
        story: "You gain their trust, but the women remain watchful as they teach you how to prepare the feast. As the evening progresses, a knock on the door interrupts the meal preparations. The three dervishes, the Caliph Harun al-Rashid, and Jaffar (in disguise) arrive. You notice strange scars on the dervishes and the caliph’s peculiar behavior.",
        choices: {
            1: { text: "Gawk at the dervishes’ scars and try to poke them", nextNode: 4 },
            2: { text: "Respectfully greet everyone and sit down", nextNode: 5 }
        }
    },
    4: {
        story: "The dervishes get angry and invite you to fight them. The women exchange knowing looks but do not stop you. They explain the house rules: no one must ask questions about their affairs. The atmosphere grows intense.",
        choices: {
            1: { text: "Chicken out and run home", nextNode: 22 },
            2: { text: "Agree to fight the dervishes in the morning", nextNode: 6 }
        }
    },
    5: {
        story: "You respectfully greet everyone and sit down. The women explain the house rules: no one must ask questions about their affairs. The atmosphere grows more intense as the guests trade cryptic remarks, but you cannot contain your curiosity about the dervishes.",
        choices: {
            1: { text: "Press the dervishes about their scars", nextNode: 7 },
            2: { text: "Let them be and follow house rules", nextNode: 8 }
        }
    },
    6: {
        story: "The dervishes are angry. As the fight begins, the women intervene, and their anger grows. They command everyone to be beheaded. What will you do?",
        choices: {
            1: { text: "Accept your fate and do nothing", nextNode: 23 },
            2: { text: "Beg for forgiveness and offer to tell a story", nextNode: 9 }
        }
    },
    7: {
        story: "You press the dervishes about their scars. They start to get annoyed, and the women intervene to prevent a fight. However, the atmosphere becomes hostile, and everyone watches you closely.",
        choices: {
            1: { text: "Keep questioning them about their scars", nextNode: 6 },
            2: { text: "Let it go and follow house rules", nextNode: 8 }
        }
    },
    8: {
        story: "You show restraint and compassion for the dogs, kneeling before them and whispering kind words. The women are impressed by your empathy and decide to open up without you asking. Everyone's true identities are shared, and the Caliph invites you to his palace the next morning.",
        choices: {
            1: { text: "Go to the Caliph's court", nextNode: 12 },
            2: { text: "Refuse and leave quietly", nextNode: 24 }
        }
    },

    // At the Caliph's Court
    9: {
        story: "At the Caliph’s court, everyone gathers with worrisome looks. The three women share their sorrowful stories to save themselves. The Caliph decides to marry the women to the men present at court.",
        choices: {
            1: { text: "Reject the idea of marriage", nextNode: 13 },
            2: { text: "Accept the idea of marriage", nextNode: 14 }
        }
    },

    // Branch 2: Continuing as a Porter
    20: {
        story: "You continue acting as a simple porter. The women remain oblivious to your true identity but decide to test your trustworthiness by assigning you a task: assist them in preparing a special feast of exotic animals.",
        choices: {
            1: { text: "Accept the task willingly", nextNode: 3 },
            2: { text: "Say you are vegan", nextNode: 21 }
        }
    },

    // Endings
    21: {
        story: "The women look at each other, confused, and kick you out of the house. You are left on the street, pondering your life choices.",
        choices: {
            1: { text: "Cry and leave", nextNode: 22 },
            2: { text: "Start the game again", nextNode: 1 }
        }
    },
    22: {
        story: "You chicken out and run home, leaving behind all the excitement and mystery. You never find out what could have been.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 }
        }
    },
    23: {
        story: "You accept your fate and do nothing. The executioner swings his blade, and your story ends here.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 }
        }
    },
    24: {
        story: "You politely decline the invitation to the Caliph’s court. You return to your simple life, forever wondering about what might have been.",
        choices: {
            1: { text: "Restart the game", nextNode: 1 }
        }
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
