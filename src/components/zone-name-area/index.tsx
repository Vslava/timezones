import React, { Component } from 'react';

import TextInput from '../text-input';

interface IElementsStyle {
  textClassName: string,
  inputClassName: string,
}

interface IZoneNameAreaState {
  isRenameInputShown: boolean;
}

interface IZoneNameAreaProps {
  zoneName: string,
  style: IElementsStyle,
  onZoneNameChange: (zoneName: string) => void,
}

class ZoneNameArea extends Component<IZoneNameAreaProps, IZoneNameAreaState> {
  constructor(props: IZoneNameAreaProps) {
    super(props);
    this.state = {
      isRenameInputShown: false,
    };
  }

  private clickHandler = () => {
    this.setState({ isRenameInputShown: true });
  };

  private zoneNameInputEnterHandler = (text: string) => {
    const { onZoneNameChange } = this.props;

    if (onZoneNameChange) {
      this.setState({ isRenameInputShown: false });
      onZoneNameChange(text);
    }
  };

  private zoneNameText = (zoneName: string, className: string) => (
    <p className={className} onClick={this.clickHandler} onKeyDown={this.clickHandler}>
      {zoneName}
    </p>
  );

  private zoneNameInput = (zoneName: string) => (
    <div>
      <TextInput
        value={zoneName}
        onEnter={this.zoneNameInputEnterHandler}
        autoFocus
      />
    </div>
  );

  render(): JSX.Element {
    const { isRenameInputShown } = this.state;
    const { zoneName, style } = this.props;

    return isRenameInputShown
      ? this.zoneNameInput(zoneName)
      : this.zoneNameText(zoneName, style.textClassName);
  }
}

export default ZoneNameArea;
