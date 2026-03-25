import { useState, useCallback } from "react";

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const addToHistory = useCallback((command: string) => {
    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
  }, []);

  const goBack = useCallback(() => {
    setHistoryIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex < history.length) {
        return newIndex;
      }
      return prev;
    });
  }, [history.length]);

  const goForward = useCallback(() => {
    setHistoryIndex(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return -1;
    });
  }, []);

  const getCurrentHistoryItem = useCallback(() => {
    if (historyIndex === -1) {
      return "";
    }
    return history[history.length - 1 - historyIndex];
  }, [history, historyIndex]);

  const reset = useCallback(() => {
    setHistoryIndex(-1);
  }, []);

  return {
    history,
    historyIndex,
    addToHistory,
    goBack,
    goForward,
    getCurrentHistoryItem,
    reset
  };
}
