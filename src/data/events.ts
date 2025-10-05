type EventOrganizer = 'CC' | 'GFG' | 'GDSC';

const EVENTS = [
  {
    id: '1',
    title: 'COC 3.0 Clash of coders',
    date: '2024-11-18',
    description: 'Face coding tasks and compete to earn points for your \"House\" and claim the Hogwarts Coding Cup! Whether you\'re a Gryffindor, Hufflepuff, Ravenclaw, or Slytherin – show your skills and prove your coding prowess! Sharpen your wands (and your coding skills) and get ready to cast some spells on your keyboards!',
    shortDescription: 'A Hogwarts-themed coding competition where houses compete for the Coding Cup.',
    images: ['https://i.ibb.co/nqm4Fkjw/Slice-2.png'],
    category: 'Competitive Programming',
    organizer: 'CC' as EventOrganizer
  },
  {
    id: '2',
    title: 'PULL \'N\' MERGE',
    date: '2024-10-16',
    description: '𝐂𝐨𝐝𝐞, 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬, 𝐚𝐧𝐝 𝐜𝐨𝐦𝐦𝐢𝐭𝐬 Ready to level up your 𝐆𝐢𝐭𝐇𝐮𝐛 skills?',
    shortDescription: 'Master Git and GitHub in this hands-on workshop.',
    images: ['https://i.ibb.co/KGLr01J/pull-n-merge.png'],
    category: 'Workshop',
    organizer: 'GFG' as EventOrganizer
  },
  {
    id: '3',
    title: 'Aurora',
    date: '2024-10-04',
    description: 'A dynamic hackathon designed to immerse students in the world of Web3 technologies. Experience a unique blend of creativity and cutting-edge tech, and help shape the future of the decentralized web with the Elixir Tech community.',
    shortDescription: 'Web3 hackathon exploring decentralized technologies.',
    images: ['https://i.ibb.co/94xwZc1/Aurora.jpg'],
    category: 'Hackathon',
    organizer: 'GFG' as EventOrganizer
  },
  {
    id: '4',
    title: 'Rust-Ed',
    date: '2024-07-08',
    description: 'Rust-Ed was an event focused on the Rust programming language, gathering developers and enthusiasts to share knowledge, discuss best practices, and explore Rust\'s applications in software development.',
    shortDescription: 'Deep dive into Rust programming language.',
    images: ['https://i.ibb.co/PT5S9LW/Whats-App-Image-2024-07-04-at-23-32-37-f248b4f9.jpg'],
    category: 'Workshop',
    organizer: 'CC' as EventOrganizer
  },
  {
    id: '5',
    title: 'Branch & Beyond',
    date: '2024-07-05',
    description: 'Get ready to branch out and go beyond with 𝘽𝙧𝙖𝙣𝙘𝙝 𝙖𝙣𝙙 𝘽𝙚𝙮𝙤𝙣𝙙 Uncover 𝙂𝙞𝙩 𝙚𝙨𝙨𝙚𝙣𝙩𝙞𝙖𝙡𝙨 on 𝙅𝙪𝙡𝙮 3 & delve into 𝙎𝙤𝙡𝙖𝙣𝙖 development on 𝙅𝙪𝙡𝙮 5 with us.',
    shortDescription: 'Two-day event combining Git essentials and Solana development.',
    images: ['https://i.ibb.co/p33ZhGk/Branch-Beyond.jpg'],
    category: 'Workshop',
    organizer: 'GDSC' as EventOrganizer
  },
] as unknown as Array<any>;

export const CATEGORIES = [
  'Competitive Programming',
  'Workshop',
  'Hackathon',
  'Design',
  'Tech Talk',
  'CTF'
] as const;

export default EVENTS;