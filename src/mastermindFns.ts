export const colours: string[] = [
  "yellow",
  "blue",
  "green",
  "pink",
  "orange",
  "purple",
];

export function createCode(): string[] {
  const shuffledColours = [...colours];
  for (let i = shuffledColours.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColours[i], shuffledColours[j]] = [
      shuffledColours[j],
      shuffledColours[i],
    ];
  }
  const code = shuffledColours.slice(0, 4);
  return code;
}

export function checkCombo(guess: string[], code: string[]): string[] {
  const output: string[] = [];
  for (let i = 0; i < 4; i++) {
    if (guess[i] === code[i]) {
      output.push("red");
    } else if (code.includes(guess[i])) {
      output.push("white");
    } else {
      output.push("black");
    }
  }
  return output;
}

export const guessesBoard = [
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]},
  {row: ["", "", "", ""], pegs: ["", "", "", ""]}
];
