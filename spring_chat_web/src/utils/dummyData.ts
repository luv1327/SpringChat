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

const dummyMessages = [
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

const chats = [
  {
    avatar: "https://robohash.org/1",
    alt: "Avatar",
    id: 2,
    title: "John",
    subtitle: "Hey there!",
    date: "2024-05-03T12:00:00.000Z",
  },
  {
    avatar: "https://robohash.org/2",
    alt: "Avatar",
    title: "Emily",
    id: 3,
    subtitle: "How are you?",
    date: "2024-05-03T11:30:00.000Z",
  },
  {
    avatar: "https://robohash.org/3",
    alt: "Avatar",
    title: "Alex",
    subtitle: "What's up?",
    date: "2024-05-03T11:15:00.000Z",
  },
  {
    avatar: "https://robohash.org/4",
    alt: "Avatar",
    title: "Sarah",
    subtitle: "Ready for the meeting?",
    date: "2024-05-02T15:20:00.000Z",
  },
  {
    avatar: "https://robohash.org/5",
    alt: "Avatar",
    title: "Mike",
    subtitle: "Let's catch up later.",
    date: "2024-05-02T14:45:00.000Z",
  },
  {
    avatar: "https://robohash.org/6",
    alt: "Avatar",
    title: "Anna",
    subtitle: "Don't forget to bring the files.",
    date: "2024-05-02T10:10:00.000Z",
  },
  {
    avatar: "https://robohash.org/7",
    alt: "Avatar",
    title: "David",
    subtitle: "See you tomorrow!",
    date: "2024-05-01T17:30:00.000Z",
  },
  {
    avatar: "https://robohash.org/8",
    alt: "Avatar",
    title: "Rachel",
    subtitle: "Have you seen the latest report?",
    date: "2024-05-01T16:45:00.000Z",
  },
  {
    avatar: "https://robohash.org/9",
    alt: "Avatar",
    title: "Mark",
    subtitle: "I'll be out of town next week.",
    date: "2024-04-30T13:20:00.000Z",
  },
  {
    avatar: "https://robohash.org/10",
    alt: "Avatar",
    title: "Sophie",
    subtitle: "Let's grab lunch.",
    date: "2024-04-30T11:50:00.000Z",
  },
  {
    avatar: "https://robohash.org/11",
    alt: "Avatar",
    title: "Chris",
    subtitle: "Can you send me the presentation?",
    date: "2024-04-30T10:15:00.000Z",
  },
  {
    avatar: "https://robohash.org/12",
    alt: "Avatar",
    title: "Emma",
    subtitle: "Happy Friday!",
    date: "2024-04-29T14:30:00.000Z",
  },
  {
    avatar: "https://robohash.org/13",
    alt: "Avatar",
    title: "Daniel",
    subtitle: "Let's discuss the project.",
    date: "2024-04-29T13:00:00.000Z",
  },
  {
    avatar: "https://robohash.org/14",
    alt: "Avatar",
    title: "Julia",
    subtitle: "Do you have time for a quick call?",
    date: "2024-04-29T11:20:00.000Z",
  },
  {
    avatar: "https://robohash.org/15",
    alt: "Avatar",
    title: "Max",
    subtitle: "Let's meet at 2 PM.",
    date: "2024-04-28T15:40:00.000Z",
  },
  {
    avatar: "https://robohash.org/16",
    alt: "Avatar",
    title: "Natalie",
    subtitle: "Reminder: Team lunch today.",
    date: "2024-04-28T12:15:00.000Z",
  },
  {
    avatar: "https://robohash.org/17",
    alt: "Avatar",
    title: "Tom",
    subtitle: "Can you review this document?",
    date: "2024-04-28T10:30:00.000Z",
  },
  {
    avatar: "https://robohash.org/18",
    alt: "Avatar",
    title: "Olivia",
    subtitle: "Let's finalize the budget.",
    date: "2024-04-27T16:00:00.000Z",
  },
  {
    avatar: "https://robohash.org/19",
    alt: "Avatar",
    title: "Jack",
    subtitle: "I'll send you the details.",
    date: "2024-04-27T14:20:00.000Z",
  },
  {
    avatar: "https://robohash.org/20",
    alt: "Avatar",
    title: "Lily",
    subtitle: "Great job on the presentation!",
    date: "2024-04-27T11:45:00.000Z",
  },
];

export { getRandomAvatars, dummyMessages, chats };
