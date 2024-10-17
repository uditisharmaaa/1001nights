const storyElement = document.getElementById('story');
const choice1Element = document.getElementById('choice1');
const choice2Element = document.getElementById('choice2');

// Define story content and choices
const storyNodes = {
    1: {
        story: "As a humble porter, you've been hired by a beautiful woman to carry goods to her home. Along the way, your knowledge of exotic spices and far-off lands makes the women curious about who you are. What will you do?",
        choices: {
            1: { text: "Reveal that you are Sinbad the Voyager", nextNode: 2 },
            2: { text: "Keep acting as a simple porter", nextNode: 3 }
        }
    },
    2: {
        story: "You reveal your identity as Sinbad the Voyager. The women are shocked and intrigued. They offer you greater hospitality, but the atmosphere becomes cautious as they now realize you are no ordinary guest. The evening unfolds with growing respect and heightened awareness. When the visitors (three dervishes and the caliph in disguise) arrive, the tension rises, and everyone is conscious of your presence. The game ends here for now.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
        }
    },
    3: {
        story: "You continue to act as a simple porter. The women remain casual and unaware of your true identity. The evening progresses, but you keenly observe them, gathering clues about their secrets. Suddenly, you witness one of the women disciplining two black dogs and crying. What will you do?",
        choices: {
            1: { text: "Stay silent and observe", nextNode: 4 },
            2: { text: "Ask the women about the strange events", nextNode: 6 }
        }
    },
    4: {
        story: "You stay silent and observe the strange events. The women appreciate your discretion and trust you more, but the mystery of the house deepens. The feast continues, and you quietly try to piece together the connections between the characters. The caliph in disguise also grows suspicious of the events unfolding in the house. Everyone leaves at dawn with many questions on their minds, but the women’s secrets remain untold. The game ends here.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
        }
    },
    5: {
        story: "The guests, including three dervishes and the caliph in disguise, arrive. You observe them closely, and the evening unfolds with everyone telling stories. The women grow more suspicious as the night progresses, but no one reveals their secrets. The game ends here for now.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
        }
    },
    6: {
        story: "You ask about the women’s secrets. Angered, they reveal you have broken the rules. They summon their slaves to punish the guests. However, they offer to spare you if you share a compelling story. What will you do?",
        choices: {
            1: { text: "Reveal you are Sinbad the Voyager", nextNode: 7 },
            2: { text: "Continue pretending to be the porter", nextNode: 9 }
        }
    },
    7: {
        story: "You reveal yourself as Sinbad the Voyager. The room goes silent as you recount your seven voyages, filled with danger, adventure, and lessons learned. The dervishes and the women recognize the legendary tales and realize they are in the presence of a true adventurer. This shifts the power dynamics in the room, as Sinbad is no longer seen as a mere servant but as an equal, if not superior, to the others. The caliph, still in disguise, also begins to realize the significance of Sinbad’s presence. The following day, after everyone shares their stories and the caliph reveals his true identity, he calls upon the women to reveal their secrets. The caliph then declares it is time to settle the fates of everyone present. Traditionally, the three women would be paired with the three dervishes. However, with Sinbad now included, an imbalance has been created. The caliph subtly suggests that marriage might resolve this situation. What will you do next?",
        choices: {
            1: { text: "Choose to marry one of the women", nextNode: 10 },
            2: { text: "Reject marriage and continue your journey", nextNode: 11 }
        }
    },
    8: {
        story: "Thanks for playing!",
        choices: {}
    },
    9: {
        story: "You continue to pretend to be the porter. The women remain unaware of your true identity, and the evening continues with little suspicion. You have survived, but no secrets have been revealed. The game ends here.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
        }
    },
    10: {
        story: "You choose to marry one of the women. The youngest woman is fascinated by your tales of adventure and expresses interest in marrying you. However, this decision causes a rift, as the other women now face choices about their own futures. The caliph approves the marriage, but there is underlying tension about what will happen to the others. The caliph must still resolve the issue of the remaining guests and women. The game ends here for now.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
        }
    },
    11: {
        story: "You reject the offer of marriage and continue your journey. The caliph respects your decision, and the story concludes. However, the caliph decrees that the youngest sister will marry him, and the three dervishes will marry the other two sisters (who were previously dogs). His son will marry the sister who was tricked into marrying him earlier. The game ends here as the caliph’s decision remains unchanged.",
        choices: {
            1: { text: "Restart", nextNode: 1 },
            2: { text: "Exit", nextNode: 8 }
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

// Start the game at node 1
updateStory(1);
