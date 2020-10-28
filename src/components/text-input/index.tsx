import React, { ChangeEvent, Component } from 'react';

interface IInputProps {
  value: string,
  onEnter?: (text: string) => void,
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
    const { text: value } = this.state;

    return (
      <input
        value={value}
        onKeyPress={this.keyPressHandler}
        onChange={this.changeHandler}
        onBlur={this.blurHandler}
      />
    );
  }
}

export default Input;
