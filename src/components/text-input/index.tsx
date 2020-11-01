import React, { ChangeEvent, Component } from 'react';

interface IInputProps {
  value: string,
  onEnter?: (text: string) => void,
  onEscape?: () => void,
  className?: string,
  autoFocus?: boolean,
}

interface IInputState {
  text: string;
}

class Input extends Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);

    this.state = {
      text: props.value,
    };
  }

  private handleKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const { onEnter } = this.props;
    const { text } = this.state;

    if (ev.key === 'Enter') {
      if (onEnter) { onEnter(text); }
    }
  };

  private handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const { onEscape } = this.props;

    if (ev.key === 'Escape') {
      if (onEscape) { onEscape(); }
    }
  };

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ text: value });
  };

  private handleBlur = () => {
    const { onEscape } = this.props;

    if (onEscape) { onEscape(); }
  };

  render(): JSX.Element {
    const { className, autoFocus } = this.props;
    const { text: value } = this.state;

    return (
      <input
        value={value}
        onKeyPress={this.handleKeyPress}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        className={className}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
      />
    );
  }
}

export default Input;
