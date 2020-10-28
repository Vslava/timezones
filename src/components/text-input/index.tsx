import React, { ChangeEvent, Component } from 'react';

interface IInputProps {
  value: string,
  onEnter?: (text: string) => void,
  className?: string,
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

  private keyPressHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const { onEnter } = this.props;
    const { text } = this.state;

    if (onEnter && ev.key === 'Enter') {
      onEnter(text);
    }
  };

  private keyDownHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const { onEnter, value: oldValue } = this.props;

    if (onEnter && ev.key === 'Escape') {
      onEnter(oldValue);
    }
  };

  private changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ text: value });
  };

  private blurHandler = () => {
    const { onEnter } = this.props;
    const { text } = this.state;

    if (onEnter) { onEnter(text); }
  };

  render(): JSX.Element {
    const { className } = this.props;
    const { text: value } = this.state;

    return (
      <input
        value={value}
        onKeyPress={this.keyPressHandler}
        onKeyDown={this.keyDownHandler}
        onChange={this.changeHandler}
        onBlur={this.blurHandler}
        className={className}
      />
    );
  }
}

export default Input;
