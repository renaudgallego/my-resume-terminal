import React, { useState, useRef, useEffect } from "react";
import { CommandInput } from "./CommandInput";
import { OutputLine } from "./OutputLine";
import { useCommandHistory } from "../hooks/useCommandHistory";
import { useAutocomplete } from "../hooks/useAutocomplete";
import { executeCommand, CommandOutput } from "../commands/handlers";

interface HistoryEntry {
  command: string;
  output: CommandOutput;
  timestamp: number;
}

type Theme = "retro" | "dark" | "light";

interface TerminalProps {
  onThemeChange?: (theme: Theme) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onThemeChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const historyHook = useCommandHistory();
  const { autocomplete } = useAutocomplete();
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [entries, inputValue]);

  // Focus input on mount and when clicking terminal
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }

    const trimmed = inputValue.trim();
    const command = trimmed.startsWith("/") ? trimmed : "/" + trimmed;

    // Check for special commands
    if (command === "/clear") {
      setEntries([]);
      setInputValue("");
      historyHook.addToHistory(command);
      historyHook.reset();
      return;
    }

    if (command === "/retro") {
      onThemeChange?.("retro");
      const output = <OutputLine className="success">Theme changed to retro</OutputLine>;
      setEntries(prev => [...prev, { command, output, timestamp: Date.now() }]);
      setInputValue("");
      historyHook.addToHistory(command);
      historyHook.reset();
      return;
    }

    if (command === "/dark") {
      onThemeChange?.("dark");
      const output = <OutputLine className="success">Theme changed to dark</OutputLine>;
      setEntries(prev => [...prev, { command, output, timestamp: Date.now() }]);
      setInputValue("");
      historyHook.addToHistory(command);
      historyHook.reset();
      return;
    }

    if (command === "/light") {
      onThemeChange?.("light");
      const output = <OutputLine className="success">Theme changed to light</OutputLine>;
      setEntries(prev => [...prev, { command, output, timestamp: Date.now() }]);
      setInputValue("");
      historyHook.addToHistory(command);
      historyHook.reset();
      return;
    }

    // Execute command
    const output = executeCommand(command);

    setEntries(prev => [...prev, { command, output, timestamp: Date.now() }]);
    setInputValue("");
    historyHook.addToHistory(command);
    historyHook.reset();
  };

  const handleHistoryBack = () => {
    historyHook.goBack();
    const value = historyHook.getCurrentHistoryItem();
    setInputValue(value);
  };

  const handleHistoryForward = () => {
    historyHook.goForward();
    const value = historyHook.getCurrentHistoryItem();
    setInputValue(value);
  };

  const handleAutocomplete = () => {
    const suggestion = autocomplete(inputValue);
    if (suggestion) {
      setInputValue(suggestion);
    }
  };

  const handleBodyClick = () => {
    // Focus input when clicking terminal body
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="header-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="header-title">Terminal ~ Resume</div>
      </div>

      <div
        className="terminal-body"
        ref={bodyRef}
        onClick={handleBodyClick}
      >
        {entries.length === 0 && (
          <OutputLine className="welcome">
            <div>
              Welcome to Resume Terminal. Type <code>/help</code> to get started.
            </div>
          </OutputLine>
        )}

        {entries.map((entry, idx) => (
          <div key={idx} className="history-entry">
            <div className="command-line">
              <span className="prompt">$ </span>
              <span className="command-text">{entry.command}</span>
            </div>
            {entry.output && <div className="command-output">{entry.output}</div>}
          </div>
        ))}

        {/* Input integrated into the stream */}
        <div className="command-line current-input">
          <span className="prompt">$ </span>
          <input
            ref={inputRef}
            type="text"
            className="command-input"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                handleHistoryBack();
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                handleHistoryForward();
              } else if (e.key === "Tab") {
                e.preventDefault();
                handleAutocomplete();
              }
            }}
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};
