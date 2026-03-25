import { useCallback } from "react";
import { getAvailableCommands } from "../commands/registry";

export function useAutocomplete() {
  const autocomplete = useCallback((input: string): string | null => {
    const trimmed = input.trim();

    if (!trimmed.startsWith("/")) {
      return null;
    }

    const partial = trimmed.toLowerCase();
    const available = getAvailableCommands();

    // Find commands that start with the partial input
    const matches = available.filter(cmd => cmd.toLowerCase().startsWith(partial));

    if (matches.length === 1) {
      return matches[0];
    }

    // If multiple matches and we're looking for exact match, return null
    if (matches.length > 1) {
      return null;
    }

    // No matches
    return null;
  }, []);

  return { autocomplete };
}
