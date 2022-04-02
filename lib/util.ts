export function isInside(target: HTMLElement | null, parent: HTMLElement): boolean {
  if (!target) {
    return false;
  }
  return target === parent || isInside(target.parentElement, parent);
}
