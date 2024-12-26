export interface GameOverProps {
  numberOfRounds: number;
  userNumber: number | undefined;
  onRestart: () => void;
}

export interface GameScreenProps {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

export interface StartGameProps {
  onPickNumber: (pickedNumber: number) => void;
}

export interface CardProps {
  children: any;
}

export interface GameOverProps {
  numberOfRounds: number;
  userNumber: number | undefined;
  onRestart: () => void;
}
