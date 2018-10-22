const SAVE_NEW_CHAR = 'browserpg/character/SAVE_NEW_CHAR';

export function saveNewChar(char) {
  return {
    type: SAVE_NEW_CHAR,
    char
  };
}

export default function reducer(state = {}, action) {
  switch(action.type) {
    case SAVE_NEW_CHAR:
      const char = action.char;
      return {
        ...state,
        ...char,
        hp: Math.round(char.endurance * char.level * 1.1),
        mp: Math.round(char.endurance * char.wisdom * 1.1),
        dmgRange: [Math.round(char.strength * char.level * 0.6), Math.round(char.strength * char.level * 0.8)]
      }
    default:
      return state;
  }
}