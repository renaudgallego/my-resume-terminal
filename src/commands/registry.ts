export interface CommandMetadata {
  name: string;
  description: string;
  aliases?: string[];
}

export const commands: CommandMetadata[] = [
  {
    name: "help",
    description: "displays command list",
    aliases: ["?"]
  },
  {
    name: "whoami",
    description: "gets information about me"
  },
  {
    name: "experiences",
    description: "lists my experiences (France and abroad)"
  },
  {
    name: "education",
    description: "displays education and trainings"
  },
  {
    name: "hobbies",
    description: "lists my hobbies"
  },
  {
    name: "projects",
    description: "lists my projects"
  },
  {
    name: "linkedin",
    description: "opens my LinkedIn profile"
  },
  {
    name: "retro",
    description: "switches to retro theme"
  },
  {
    name: "light",
    description: "switches to light theme"
  },
  // {
  //   name: "getresume",
  //   description: "downloads my resume"
  // },
  {
    name: "clear",
    description: "clears terminal"
  }
];

export function getCommandByName(input: string): CommandMetadata | undefined {
  const normalized = input.toLowerCase().trim();
  return commands.find(
    cmd =>
      cmd.name === normalized ||
      (cmd.aliases && cmd.aliases.includes(normalized))
  );
}

export function getAvailableCommands(): string[] {
  return commands.map(cmd => `/${cmd.name}`);
}
