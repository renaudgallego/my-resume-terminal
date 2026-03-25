# CLAUDE.md

## Project Overview

**my-resume-terminal** is a modern rebuild of the original `resume-terminal` project.
It's an interactive web-based terminal interface for displaying a resume, built with React 18 + TypeScript and Parcel 2.

The project provides a command-line style interface with commands like `/whoami`, `/experiences`, `/education`, `/hobbies`, `/projects`, and more.

## Architecture

The project is a Parcel-based single-page application with:
- **Entry point**: `index.html` (Parcel bundles to root with hashed filenames)
- **Runtime**: React 18 + TypeScript
- **Styling**: Plain CSS with CSS variables for theme support (dark/light)
- **Data source**: `src/data/resume.ts` contains typed resume data
- **Commands**: `src/commands/registry.ts` (command metadata) and `src/commands/handlers.tsx` (command logic)
- **Components**: Terminal UI broken into composable React components
- **Hooks**: Custom hooks for command history navigation and autocomplete logic

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (Parcel dev mode at http://localhost:1234)
npm run dev

# Build for production
npm run build

# Clean build artifacts
npm run clean
```

## Project Structure

```
my-resume-terminal/
├── package.json
├── tsconfig.json
├── .parcelrc
├── .gitignore
├── CLAUDE.md
├── index.html                    ← Parcel entry point
└── src/
    ├── main.tsx                  ← React root (ReactDOM.createRoot)
    ├── App.tsx                   ← Theme state management
    ├── data/
    │   └── resume.ts             ← Typed resume data
    ├── commands/
    │   ├── registry.ts           ← Command list & metadata
    │   └── handlers.tsx          ← Command execution & JSX output
    ├── components/
    │   ├── Terminal.tsx          ← Main terminal (history, input)
    │   ├── CommandInput.tsx      ← Input field (keyboard shortcuts)
    │   ├── OutputLine.tsx        ← Single output block
    │   └── OutputTable.tsx       ← Table rendering
    ├── hooks/
    │   ├── useCommandHistory.ts  ← Arrow key navigation
    │   └── useAutocomplete.ts    ← TAB key autocomplete
    └── styles/
        ├── index.css             ← CSS variables, reset, fonts
        ├── terminal.css          ← Terminal window styling
        └── themes.css            ← Dark/light theme overrides
```

## Key Features

- **Command execution**: Type `/help` to see all available commands
- **TAB autocomplete**: Press TAB to autocomplete command names
- **Arrow key history**: Press up/down arrows to navigate command history
- **Theme toggle**: Use `/dark` and `/light` commands to switch themes
- **Responsive design**: Works on mobile (full-screen terminal at < 768px breakpoint)
- **Table support**: Experiences, education, and projects display in scrollable tables
- **Links in output**: Project links are clickable and open in new tabs

## Commands

| Command | Behavior |
|---|---|
| `/help` or `/?` | Prints all available commands |
| `/whoami` | Renders profile info as a list |
| `/experiences` | Renders both France + abroad experience tables |
| `/education` | Renders education and training table |
| `/hobbies` | Renders hobbies list |
| `/projects` | Renders projects table with links |
| `/getcv` | Triggers PDF download |
| `/dark` | Sets dark theme |
| `/light` | Sets light theme |
| `/clear` | Clears terminal history |

## Theme System

- CSS variables on `:root` for colors: `--bg`, `--fg`, `--accent`, `--prompt-color`, `--table-border`, etc.
- `data-theme="dark"` or `data-theme="light"` attribute on `<html>` element, toggled by App.tsx state
- Default theme: dark
- Smooth transitions (0.3s) between themes

## Resume Data

Resume content is stored in `src/data/resume.ts` with TypeScript interfaces:
- `Profile` — Name, job, experience, city, languages
- `Experience` — Date, client, description, technologies
- `Education` — Date, school, description
- `Hobby` — Category, items
- `Project` — Name, description, tech, link

To update resume data, edit the exported objects in `src/data/resume.ts`.

## Mobile Support

- Terminal is 100% responsive
- On mobile (< 768px): font size increases to 16px to prevent iOS zoom
- Tables have horizontal scroll on narrow screens
- Input is always focused when user taps inside terminal body
- Full-screen terminal experience (no padding on mobile)

## Important Notes

- TypeScript strict mode is enabled in `tsconfig.json`
- No external dependencies besides React and ReactDOM
- Parcel handles all bundling and asset optimization automatically
- CSS uses a mobile-first approach with responsive breakpoints
- The `.gitignore` excludes `node_modules`, `.parcel-cache`, and `dist`

## Development Workflow

1. Edit source files in `src/`
2. Run `npm run dev` to see live changes
3. Test all commands: `/help`, `/whoami`, `/experiences`, `/education`, `/hobbies`, `/projects`
4. Test keyboard shortcuts: TAB (autocomplete), arrow up/down (history), Enter (submit)
5. Test theme toggle: `/dark` and `/light`
6. Test on mobile browser or DevTools device emulation
7. Run `npm run build` to create production build

## Common Tasks

- **Add a new command**: Add entry to `commands` array in `src/commands/registry.ts`, then add a `case` in `executeCommand()` in `src/commands/handlers.tsx`
- **Update resume data**: Edit the exported objects in `src/data/resume.ts`
- **Customize colors**: Update CSS variables in `src/styles/index.css` or `src/styles/themes.css`
- **Change fonts**: Update `font-family` in `src/styles/index.css`
