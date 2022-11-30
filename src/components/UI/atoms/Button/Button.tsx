import { ButtonInterface } from 'interfaces/buttonInterface';

import './styles.scss';

export default function Button({
  type,
  disabled,
  className,
  children,
  onClick
}: ButtonInterface) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}
