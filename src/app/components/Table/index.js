// @flow

import * as React from "react";
import { Input, Button } from 'antd';

type Props = {
  onClick: Function
};

type State = {
  uid: string,
  name: string,
  size: number,
  balance: number,
  key: string
};

export default class Table extends React.Component<Props, State> {
  state: State = {
    uid: '',
    name: '',
    size: 0,
    balance: 0,
    key: ''
  };
  
  handleChange = (field: string, value: string | number): void => this.setState({
    [field]: value
  });
  
  handleClick = (): void => {
    this.props.onClick(this.state);
  };

  render() {
    const { uid, name, key, size, balance } = this.state;

    return (
      <div className="form">
        <div className="row">
          <Input
            id="size"
            placeholder="frame size"
            addonBefore="frame size"
            value={size}
            onChange={(e: Object) => this.handleChange('size', Number(e.target.value))}
          />
        </div>
        <div className="row">
          <Input
            id="name"
            placeholder="name"
            addonBefore="name"
            value={name}
            onChange={(e: Object) => this.handleChange('name', e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            id="balance"
            placeholder="balance"
            addonBefore="balance"
            value={balance}
            onChange={(e: Object) => this.handleChange('balance', Number(e.target.value))}
          />
        </div>
        <div className="row">
          <Input
            id="uid"
            placeholder="uid"
            addonBefore="uid"
            value={uid}
            onChange={(e: Object) => this.handleChange('uid', e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            id="key"
            placeholder="key"
            addonBefore="key"
            value={key}
            onChange={(e: Object) => this.handleChange('key', e.target.value)}
          />
        </div>
        <Button onClick={this.handleClick}>Играть</Button>
      </div>
    );
  }
}
