let jokeIndex = 0;
let waitingForWhy = false;
const jokes = [
  ["Why did the scarecrow win an award?", "Because he was outstanding in his field."],
  ["Why don't skeletons fight each other?", "They don't have the guts."],
  ["What do you call fake spaghetti?", "An impasta."],
  ["What do you get when you cross a snowman and a vampire?", "Frostbite."],
  ["Why did the bicycle fall over?", "Because it was two-tired."],
];
const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("requestJokeButton");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);

  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

function requestJoke() {
  if (waitingForWhy) {
    appendUserMessage("I don't know, tell me.");
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    waitingForWhy = false;
    jokeButton.textContent = "Tell me a joke!";
    jokeButton.disabled = false;
  } else {
    appendUserMessage("Tell me a joke!");
    if (jokeIndex >= jokes.length) {
      appendBotMessage("Sorry, I'm out of jokes for now!");
      return;
    }
    jokeButton.disabled = true;
    setTimeout(function () {
      appendBotMessage(jokes[jokeIndex][0]);
      jokeButton.textContent = "I don't know, tell me.";
      jokeButton.disabled = false;
      waitingForWhy = true;
    }, 1000);
  }
}