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
  setClickRight(newValue) {
    this.state.clickRight = newValue;
  },
  setRightText(newValue, clickCall) {
    this.state.rightText = newValue;
    this.state.clickRight = clickCall;
  },
  setShowNavBar(newValue) {
    this.state.showNavBar = newValue;
  },
  setShowNavBarLeft(newValue) {
    this.state.showNavBarLeft = newValue;
  },
  setTitle(newValue) {
    this.state.title = newValue;
  },
};
