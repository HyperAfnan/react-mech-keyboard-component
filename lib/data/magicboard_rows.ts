import type { KeyRow } from "../types/keyboard";

export const APPLE_KEYBOARD_ROWS: KeyRow[] = [
  {
    id: "row-fn",
    keys: [
      { id: "key-esc", code: "Escape", label: "esc", variant: "modifier", width: 40, height: 28, centerLabel: true },
      { id: "key-f1", code: "F1", label: "F1", subLabel: "brightness-down", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f2", code: "F2", label: "F2", subLabel: "brightness-up", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f3", code: "F3", label: "F3", subLabel: "apps", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f4", code: "F4", label: "F4", subLabel: "search", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f5", code: "F5", label: "F5", subLabel: "microphone", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f6", code: "F6", label: "F6", subLabel: "moon", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f7", code: "F7", label: "F7", subLabel: "skip-back", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f8", code: "F8", label: "F8", subLabel: "play-pause", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f9", code: "F9", label: "F9", subLabel: "skip-forward", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f10", code: "F10", label: "F10", subLabel: "volume-mute", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f11", code: "F11", label: "F11", subLabel: "volume-down", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-f12", code: "F12", label: "F12", subLabel: "volume-up", variant: "modifier", width: 40, height: 28, centerLabel: false },
      { id: "key-lock", code: "F13", label: "lock", subLabel: "lock", variant: "modifier", width: 60, height: 28, centerLabel: false }
    ]
  },
  {
    id: "row-num",
    keys: [
      { id: "key-backtick", code: "Backquote", label: "`", subLabel: "~", variant: "alpha", width: 40 },
      { id: "key-1", code: "Digit1", label: "1", subLabel: "!", variant: "alpha", width: 40 },
      { id: "key-2", code: "Digit2", label: "2", subLabel: "@", variant: "alpha", width: 40 },
      { id: "key-3", code: "Digit3", label: "3", subLabel: "#", variant: "alpha", width: 40 },
      { id: "key-4", code: "Digit4", label: "4", subLabel: "$", variant: "alpha", width: 40 },
      { id: "key-5", code: "Digit5", label: "5", subLabel: "%", variant: "alpha", width: 40 },
      { id: "key-6", code: "Digit6", label: "6", subLabel: "^", variant: "alpha", width: 40 },
      { id: "key-7", code: "Digit7", label: "7", subLabel: "&", variant: "alpha", width: 40 },
      { id: "key-8", code: "Digit8", label: "8", subLabel: "*", variant: "alpha", width: 40 },
      { id: "key-9", code: "Digit9", label: "9", subLabel: "(", variant: "alpha", width: 40 },
      { id: "key-0", code: "Digit0", label: "0", subLabel: ")", variant: "alpha", width: 40 },
      { id: "key-minus", code: "Minus", label: "-", subLabel: "_", variant: "alpha", width: 40 },
      { id: "key-equal", code: "Equal", label: "=", subLabel: "+", variant: "alpha", width: 40 },
      { id: "key-delete", code: "Backspace", label: "delete", variant: "modifier", width: 60, centerLabel: true }
    ]
  },
  {
    id: "row-qwerty",
    keys: [
      { id: "key-tab", code: "Tab", label: "tab", variant: "modifier", width: 56, centerLabel: true },
      { id: "key-q", code: "KeyQ", label: "Q", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-w", code: "KeyW", label: "W", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-e", code: "KeyE", label: "E", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-r", code: "KeyR", label: "R", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-t", code: "KeyT", label: "T", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-y", code: "KeyY", label: "Y", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-u", code: "KeyU", label: "U", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-i", code: "KeyI", label: "I", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-o", code: "KeyO", label: "O", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-p", code: "KeyP", label: "P", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-lbracket", code: "BracketLeft", label: "[", subLabel: "{", variant: "alpha", width: 40 },
      { id: "key-rbracket", code: "BracketRight", label: "]", subLabel: "}", variant: "alpha", width: 40 },
      { id: "key-backslash", code: "Backslash", label: "\\", subLabel: "|", variant: "alpha", width: 44 }
    ]
  },
  {
    id: "row-home",
    keys: [
      { id: "key-capslock", code: "CapsLock", label: "caps lock", variant: "modifier", width: 75, centerLabel: true },
      { id: "key-a", code: "KeyA", label: "A", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-s", code: "KeyS", label: "S", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-d", code: "KeyD", label: "D", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-f", code: "KeyF", label: "F", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-g", code: "KeyG", label: "G", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-h", code: "KeyH", label: "H", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-j", code: "KeyJ", label: "J", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-k", code: "KeyK", label: "K", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-l", code: "KeyL", label: "L", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-semicolon", code: "Semicolon", label: ";", subLabel: ":", variant: "alpha", width: 40 },
      { id: "key-quote", code: "Quote", label: "'", subLabel: "\"", variant: "alpha", width: 40 },
      { id: "key-enter", code: "Enter", label: "return", variant: "modifier", width: 70, centerLabel: true }
    ]
  },
  {
    id: "row-shift",
    keys: [
      { id: "key-shiftl", code: "ShiftLeft", label: "shift", variant: "modifier", width: 95, centerLabel: true },
      { id: "key-z", code: "KeyZ", label: "Z", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-x", code: "KeyX", label: "X", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-c", code: "KeyC", label: "C", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-v", code: "KeyV", label: "V", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-b", code: "KeyB", label: "B", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-n", code: "KeyN", label: "N", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-m", code: "KeyM", label: "M", variant: "alpha", width: 40, centerLabel: true },
      { id: "key-comma", code: "Comma", label: ",", subLabel: "<", variant: "alpha", width: 40 },
      { id: "key-period", code: "Period", label: ".", subLabel: ">", variant: "alpha", width: 40 },
      { id: "key-slash", code: "Slash", label: "/", subLabel: "?", variant: "alpha", width: 40 },
      { id: "key-shiftr", code: "ShiftRight", label: "shift", variant: "modifier", width: 95, centerLabel: true }
    ]
  },
  {
    id: "row-bottom",
    keys: [
      { id: "key-fn", code: "Fn", label: "fn", subLabel: "globe", variant: "modifier", width: 36, centerLabel: false },
      { id: "key-ctrll", code: "ControlLeft", label: "control", symbol: "⌃", variant: "modifier", width: 36, centerLabel: false },
      { id: "key-optl", code: "AltLeft", label: "option", symbol: "⌥", variant: "modifier", width: 36, centerLabel: false },
      { id: "key-cmdl", code: "MetaLeft", label: "command", symbol: "⌘", variant: "modifier", width: 48, centerLabel: false },
      { id: "key-space", code: "Space", label: "", variant: "alpha", width: 240 },
      { id: "key-cmdr", code: "MetaRight", label: "command", symbol: "⌘", variant: "modifier", width: 48, centerLabel: false },
      { id: "key-optr", code: "AltRight", label: "option", symbol: "⌥", variant: "modifier", width: 36, centerLabel: false },
      { id: "key-arrowl", code: "ArrowLeft", label: "◀", variant: "modifier", width: 40, centerLabel: true },
      { id: "key-arrowu", code: "ArrowUp", label: "▲", variant: "modifier", width: 40, centerLabel: true },
      { id: "key-arrowd", code: "ArrowDown", label: "▼", variant: "modifier", width: 40, centerLabel: true },
      { id: "key-arrowr", code: "ArrowRight", label: "▶", variant: "modifier", width: 40, centerLabel: true }
    ]
  }
];
