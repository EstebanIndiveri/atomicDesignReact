type ButtonTypes = 'button' | 'submit' | 'reset';
export interface ButtonInterface {
  type?: ButtonTypes;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  level?: number;
}
