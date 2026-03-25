import React, { useRef, useEffect } from "react";
import { useAutocomplete } from "../hooks/useAutocomplete";

interface CommandInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryBack: () => void;
  onHistoryForward: () => void;
  onAutocomplete: () => void;
  historyValue?: string;
}

export const CommandInput: React.FC<CommandInputProps> = ({
  value,
  onChange,
  onSubmit,
  onHistoryBack,
  onHistoryForward,
  onAutocomplete,
  historyValue
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { autocomplete } = useAutocomplete();

  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Update input when history changes
    if (historyValue !== undefined) {
      onChange(historyValue);
    }
  }, [historyValue, onChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onHistoryBack();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onHistoryForward();
    } else if (e.key === "Tab") {
      e.preventDefault();
      const suggestion = autocomplete(value);
      if (suggestion) {
        onChange(suggestion);
        onAutocomplete();
      }
    }
  };

  return (
    <div className="command-input-wrapper">
      <span className="prompt">$ </span>
      <input
        ref={inputRef}
        type="text"
        className="command-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a command (e.g., /help)"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};
