// Basic local save/load logic for offline/PWA and resume

export function saveLocalGameData(data: any) {
  localStorage.setItem('iron-soldiers-save', JSON.stringify(data));
}

export function getLocalGameData(): any | null {
  const raw = localStorage.getItem('iron-soldiers-save');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearLocalGameData() {
  localStorage.removeItem('iron-soldiers-save');
}