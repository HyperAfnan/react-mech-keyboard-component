import { useEffect } from "react";
import { useKeyboardStore, useKeyboardStoreApi } from "../store/keyboardStore";

export function useKeyPress(
  play: (code: string) => void,
  release: (code: string) => void,
) {
  const pressKey = useKeyboardStore((s) => s.pressKey);
  const releaseKey = useKeyboardStore((s) => s.releaseKey);
  const storeApi = useKeyboardStoreApi();

  useEffect(() => {
    const BLOCKED_KEYS = new Set([
      "Tab",
      "F1",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F10",
      "F11",
      "/",
    ]);

    const releaseAll = () => {
      storeApi.getState().activeKeys.forEach((code) => {
        storeApi.getState().releaseKey(code);
      });
    };

    const handleDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (BLOCKED_KEYS.has(e.key) || BLOCKED_KEYS.has(e.code)) {
        e.preventDefault();
      }
      if (storeApi.getState().activeKeys.has(e.code)) return;
      pressKey(e.code);
      play(e.code);
    };

    const handleUp = (e: KeyboardEvent) => {
      if (!storeApi.getState().activeKeys.has(e.code)) return;
      releaseKey(e.code);
      release(e.code);
      if (
        e.code.startsWith("Control") ||
        e.code.startsWith("Alt") ||
        e.code.startsWith("Meta")
      ) {
        releaseAll();
      }
    };

    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    window.addEventListener("blur", releaseAll);
    document.addEventListener("visibilitychange", releaseAll);

    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
      window.removeEventListener("blur", releaseAll);
      document.removeEventListener("visibilitychange", releaseAll);
    };
  }, [pressKey, releaseKey, play, release, storeApi]);
}
