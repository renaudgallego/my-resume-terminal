# My Resume Terminal

An interactive web-based terminal interface for displaying a resume. Built with React 18, TypeScript, and Parcel.

## 🌐 Live Demo

**https://renaudgallego.github.io/my-resume-terminal/**

## ✨ Features

- **Interactive Terminal UI** - Type commands just like a real terminal
- **Retro Green Aesthetic** - Softened CRT-style terminal look with customizable themes
- **Commands**:
  - `/whoami` - Profile information
  - `/experiences` - Work history (France & abroad)
  - `/education` - Education and training
  - `/hobbies` - Personal interests
  - `/projects` - GitHub projects
  - `/linkedin` - Open LinkedIn profile
  - `/dark`, `/light`, `/retro` - Theme switching
  - `/clear` - Clear terminal history
  - `/help` - Show all commands

- **Keyboard Shortcuts**:
  - **TAB** - Autocomplete commands
  - **Arrow Up/Down** - Navigate command history
  - **Enter** - Execute command

- **Three Themes**:
  - Retro (default) - Softened green terminal
  - Dark - Brighter green terminal
  - Light - Light background with green text

- **Mobile Responsive** - Full-screen terminal on mobile devices

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (opens http://localhost:1234)
npm run dev

# Build for production
npm run build
```

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Bundler**: Parcel 2
- **Styling**: Plain CSS with CSS variables
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 Project Structure

```
src/
├── App.tsx                    # Theme management
├── main.tsx                   # React entry point
├── data/
│   └── resume.ts             # Structured resume data
├── commands/
│   ├── registry.ts           # Available commands list
│   └── handlers.tsx          # Command execution logic
├── components/
│   ├── Terminal.tsx          # Main terminal component
│   ├── CommandInput.tsx      # Input field
│   ├── OutputLine.tsx        # Output renderer
│   └── OutputTable.tsx       # Table renderer
├── hooks/
│   ├── useCommandHistory.ts  # Arrow key navigation
│   └── useAutocomplete.ts    # TAB completion
└── styles/
    ├── index.css             # Base styles & variables
    ├── terminal.css          # Terminal styling
    └── themes.css            # Theme definitions
```

## 🔧 Customization

### Update Resume Data

Edit `src/data/resume.ts` to customize:
- Profile information
- Work experiences
- Education
- Hobbies
- Projects

### Change Colors

Modify CSS variables in `src/styles/index.css`:
- `--bg` - Background color
- `--fg` - Foreground color
- `--accent` - Accent color
- `--prompt-color` - Prompt color

### Add New Commands

1. Add to `src/commands/registry.ts`
2. Add handler in `src/commands/handlers.tsx`
3. Update Terminal.tsx if needed

## 🚀 Deployment

### GitHub Pages (Automatic)

The project uses GitHub Actions to automatically build and deploy on every push to `master`:

```bash
# Just push your changes
git push origin master

# GitHub Actions will:
# 1. Install dependencies
# 2. Build the project
# 3. Commit /docs folder
# 4. Deploy to GitHub Pages
```

### Manual Build

```bash
npm run build
git add docs/
git commit -m "Update docs"
git push
```

## 📄 License

MIT

## 👤 About

Interactive resume terminal for Renaud Gallego

- **GitHub**: https://github.com/renaudgallego
- **LinkedIn**: https://www.linkedin.com/in/renaud-gallego/
