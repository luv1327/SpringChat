function getRandomAvatars(numAvatars: number) {
  const avatars = [];
  const baseUrl = "https://robohash.org/";
  const setSize = "set1";
  const size = "150x150";

  for (let i = 0; i < numAvatars; i++) {
    const randomText = Math.random().toString(36).substring(7); // Generate random text
    const imageUrl = `${baseUrl}${randomText}.png?set=${setSize}&size=${size}`;

    avatars.push({ id: i + 1, url: imageUrl });
  }

  return avatars;
}

const messages = [
  { position: "left", type: "text", text: "Hey there!", title: "Title" },
  { position: "right", type: "text", text: "Hello!" },
  { position: "left", type: "text", text: "How are you?" },
  { position: "right", type: "text", text: "I'm good, thanks!" },
  { position: "left", type: "text", text: "What have you been up to?" },
  {
    position: "right",
    type: "text",
    text: "Not much, just working on some projects.",
  },
  { position: "left", type: "text", text: "Sounds interesting!" },
  {
    position: "left",
    type: "text",
    text: "It is! Do you want to see what I've been working on?",
  },
  { position: "right", type: "text", text: "Sure, I'd love to!" },
  {
    position: "left",
    type: "text",
    text: "Here's a link to my latest project: https://example.com/project",
  },
  {
    position: "right",
    type: "text",
    text: "Wow, that looks impressive! Great job!",
  },
  {
    position: "left",
    type: "text",
    text: "Thanks! I've put a lot of effort into it.",
  },
  {
    position: "right",
    type: "text",
    text: "I can tell. It's very professional.",
  },
  {
    position: "left",
    type: "text",
    text: "Would you like to collaborate on something together sometime?",
  },
  {
    position: "right",
    type: "text",
    text: "Absolutely! I think that would be a great idea.",
  },
  {
    position: "left",
    type: "text",
    text: "Awesome! Let's discuss it further over a call.",
  },
  { position: "right", type: "text", text: "Sure, when are you available?" },
  { position: "left", type: "text", text: "How about tomorrow afternoon?" },
  {
    position: "right",
    type: "text",
    text: "Sounds good to me! See you then.",
  },
  { position: "left", type: "text", text: "Hey there!", title: "Title" },
  { position: "right", type: "text", text: "Hello!" },
  { position: "left", type: "text", text: "How are you?" },
  { position: "right", type: "text", text: "I'm good, thanks!" },
  { position: "left", type: "text", text: "What have you been up to?" },
  {
    position: "right",
    type: "text",
    text: "Not much, just working on some projects.",
  },
  { position: "left", type: "text", text: "Sounds interesting!" },
  {
    position: "left",
    type: "text",
    text: "It is! Do you want to see what I've been working on?",
  },
  { position: "right", type: "text", text: "Sure, I'd love to!" },
  {
    position: "left",
    type: "text",
    text: "Here's a link to my latest project: https://example.com/project",
  },
  {
    position: "right",
    type: "text",
    text: "Wow, that looks impressive! Great job!",
  },
  {
    position: "left",
    type: "text",
    text: "Thanks! I've put a lot of effort into it.",
  },
  {
    position: "right",
    type: "text",
    text: "I can tell. It's very professional.",
  },
  {
    position: "left",
    type: "text",
    text: "Would you like to collaborate on something together sometime?",
  },
  {
    position: "right",
    type: "text",
    text: "Absolutely! I think that would be a great idea.",
  },
  {
    position: "left",
    type: "text",
    text: "Awesome! Let's discuss it further over a call.",
  },
  { position: "right", type: "text", text: "Sure, when are you available?" },
  { position: "left", type: "text", text: "How about tomorrow afternoon?" },
  {
    position: "right",
    type: "text",
    text: "Sounds good to me! See you then.",
  },
];

export { getRandomAvatars, messages };
