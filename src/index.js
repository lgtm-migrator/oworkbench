import Page from "sap/m/Page";
import ComponentContainer from "sap/ui/core/ComponentContainer";
import Component from "./Component";

sap.ui.getCore().boot();

var container = new Page({
  showHeader: false,
  enableScrolling: false,
  content: new ComponentContainer({ component: new Component() })
});

container.placeAt("content");