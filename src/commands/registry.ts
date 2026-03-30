export interface CommandMetadata {
  name: string;
  description: string;
  aliases?: string[];
}

export const commands: CommandMetadata[] = [
  {
    name: "help",
    description: "command list",
    aliases: ["?"]
  },
  {
    name: "whoami",
    description: "my profile"
  },
  {
    name: "experiences",
    description: "work history"
  },
  {
    name: "education",
    description: "education & training"
  },
  {
    name: "hobbies",
    description: "interests & activities"
  },
  {
    name: "projects",
    description: "GitHub projects"
  },
  {
    name: "linkedin",
    description: "LinkedIn profile"
  },
  {
    name: "retro",
    description: "retro theme"
  },
  {
    name: "light",
    description: "light theme"
  },
  // {
  //   name: "getresume",
  //   description: "downloads my resume"
  // },
  {
    name: "clear",
    description: "clear screen"
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
