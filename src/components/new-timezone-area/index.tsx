import React, { Component } from 'react';
import { toast } from 'react-toastify';

import Modal from '../modal';
import TextInput from '../text-input';

import { isZoneNameValid } from '../../lib/util';

import style from './style.scss';

interface INewTimeZoneAreaProps {
  onNewTimezoneName?: (zoneName: string) => void,
}

interface INewTimeZoneAreaState {
  isModalShow: boolean;
}

class NewTimeZoneArea extends Component<INewTimeZoneAreaProps, INewTimeZoneAreaState> {
  constructor(props: INewTimeZoneAreaProps) {
    super(props);

    this.state = {
      isModalShow: false,
    };
  }

  private handleNewTimezoneLinkClick = () => {
    this.setState({ isModalShow: true });
  };

  private handleZonenameEnter = (zoneName: string) => {
    const { onNewTimezoneName } = this.props;

    if (isZoneNameValid(zoneName)) {
      this.setState({ isModalShow: false });
      if (onNewTimezoneName) { onNewTimezoneName(zoneName); }
    } else {
      toast.error('The zone name is invalid');
    }
  };

  private handleZonenameEscape = () => {
    this.setState({ isModalShow: false });
  };

  render(): JSX.Element {
    const { isModalShow } = this.state;

    return (
      <div className={style.newTimezoneArea}>
        <button type="button" onClick={this.handleNewTimezoneLinkClick}>
          Add a new timezone
        </button>
        <Modal isOpen={isModalShow}>
          <div className={style.modalContent}>
            <h2>Enter a timezone name</h2>
            <TextInput
              value=""
              autoFocus
              onEnter={this.handleZonenameEnter}
              onEscape={this.handleZonenameEscape}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewTimeZoneArea;
