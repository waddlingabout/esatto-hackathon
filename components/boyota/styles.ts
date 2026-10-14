// Keyboard focus ring for React Aria controls (they set data-focus-visible).
// outline-none sets the outline style to none, so the focused state has to set it back to solid.
export const focusRing =
  "outline-none data-[focus-visible]:outline-solid data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-ink";

// The same ring for plain links and other native elements (they don't get data-focus-visible).
export const linkFocusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
