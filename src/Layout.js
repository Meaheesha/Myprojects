import SlidePanel from "terra-slide-panel";
import "./Layout.css";
import React, { Component } from "react";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
export default class Layout extends Component {
  renderPanelContent = () => (
    <div>
      <LeftPage />
    </div>
  );
  renderMainContent = () => (
    <div>
      <RightPage />
    </div>
  );
  render() {
    return (
      <SlidePanel
        className="panel"
        fill
        panelBehavior="squish"
        panelPosition="start"
        panelSize="small"
        isOpen="true"
        panelContent={this.renderPanelContent()}
        mainContent={this.renderMainContent()}
        size="huge"
      />
    );
  }
}
