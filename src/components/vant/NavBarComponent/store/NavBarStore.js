export default {
  debug: true,
  state: {
    clickRight: function () {},
    rightText: undefined,
    showNavBar: true,
    showNavBarLeft: true,
    title: "标题",
  },
  reSetStateValue() {
    this.state.clickRight = function () {};
    this.state.rightText = undefined;
    this.state.showNavBar = true;
    this.state.showNavBarLeft = true;
    this.state.title = "标题";
  },
  setRightText(text, clickCall) {
    this.state.rightText = text;
    this.state.clickRight = clickCall;
  },
  setNavBarShow(show) {
    this.state.showNavBar = show;
  },
  setNavBarLeftShow(show) {
    this.state.showNavBarLeft = show;
  },
  setTitle(text) {
    this.state.title = text;
  },
};
