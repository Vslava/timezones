import React, { Component } from 'react';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import TextInput from '../text-input';

interface IElementsStyle {
  textClassName: string,
  inputClassName: string,
  invalidZoneNameClassName: string,
}

interface IZoneNameAreaState {
  isRenameInputShown: boolean;
  isZoneNameValid: boolean;
}

interface IZoneNameAreaProps {
  zoneName: string,
  style: IElementsStyle,
  onZoneNameChange: (zoneName: string) => void,
  isZoneNameValid?: (zoneName: string) => boolean,
}

class ZoneNameArea extends Component<IZoneNameAreaProps, IZoneNameAreaState> {
  constructor(props: IZoneNameAreaProps) {
    super(props);
    this.state = {
      isRenameInputShown: false,
      isZoneNameValid: true,
    };
  }

  private handleClick = () => {
    this.setState({
      isRenameInputShown: true,
      isZoneNameValid: true,
    });
  };

  private handleZoneNameInputEnter = (text: string) => {
    const {
      onZoneNameChange,
      isZoneNameValid,
    } = this.props;

    if (onZoneNameChange) {
      if (isZoneNameValid && !isZoneNameValid(text)) {
        this.setState({ isZoneNameValid: false });
        toast.error('The zone name is invalid');
        return;
      }

      this.setState({ isRenameInputShown: false });
      onZoneNameChange(text);
    }
  };

  private handleZoneNameInputEscape = () => {
    this.setState({ isRenameInputShown: false });
  };

  private zoneNameText = (zoneName: string, className: string) => (
    <p className={className} onClick={this.handleClick} onKeyDown={this.handleClick}>
      {zoneName}
    </p>
  );

  private zoneNameInput = (zoneName: string, className: string) => (
    <div>
      <TextInput
        className={className}
        value={zoneName}
        onEnter={this.handleZoneNameInputEnter}
        onEscape={this.handleZoneNameInputEscape}
        autoFocus
      />
    </div>
  );

  render(): JSX.Element {
    const { isRenameInputShown, isZoneNameValid } = this.state;
    const { zoneName, style } = this.props;

    const inputClasses = classNames(
      style.inputClassName,
      { [style.invalidZoneNameClassName]: !isZoneNameValid },
    );

    return isRenameInputShown
      ? this.zoneNameInput(zoneName, inputClasses)
      : this.zoneNameText(zoneName, style.textClassName);
  }
}

export default ZoneNameArea;
