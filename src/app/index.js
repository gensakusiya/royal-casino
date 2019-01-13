// @flow

import * as React from "react";
import { Layout, Alert } from "antd";

import Api from "./api";

import Header from "./components/Header";
import Table from "./components/Table";

import "./app.css";

type AppPropsState = {
  type: "auth" | "game",
  frameSize: number,
  message: string,
  frameLink: string
};

const APP_STATE = {
  AUTH: "auth",
  GAME: "game",
  UNKNOWN: "unknown"
};

class App extends React.Component<any, AppPropsState> {
  state: AppPropsState = {
    type: APP_STATE.AUTH,
    frameSize: 0,
    message: "",
    frameLink: ""
  };

  handleClickStart = (data: {
    uid: string,
    name: string,
    size: number,
    balance: number,
    key: string
  }): void => {
    Api.auth({
      uid: data.uid,
      username: data.name,
      secret: data.key,
      balance: { balance: data.balance }
    }).then((res: any) => {
      if (res.error) {
        this.setState({
          message: res.message
        });
      }

      if (res.code) {
        this.setState({
          frameSize: data.size,
          frameLink: Api.getFrameLink(res.code)
        });
      }
    });
  };

  renderFrame = (): React.Element<any> => (
    <iframe
      title="game"
      src={this.state.frameLink}
      width={this.state.frameSize}
      height={this.state.frameSize / 2}
      align="left"
    />
  );

  render() {
    const { message, frameLink } = this.state;
    const alertHtml = message.length ? (
      <Alert type="error" message={message} />
    ) : null;

    const frameHtml = frameLink.length ? this.renderFrame() : null;

    return (
      <div className="app">
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <div className="alert">{alertHtml}</div>
          <Table onClick={this.handleClickStart} />
          {frameHtml}
        </Layout.Content>
      </div>
    );
  }
}

export default App;
