import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import Device from "sap/ui/Device";
import { manifest } from "./manifest";

export default class Component extends UIComponent {

  metadata = {
    manifest
  }

  init() {
    super.init(this, arguments);

    // set device model
    var oDeviceModel = new JSONModel(Device);
    oDeviceModel.setDefaultBindingMode("OneWay");
    this.setModel(oDeviceModel, "device");

    // create the views based on the url/hash
    this.getRouter().initialize();

  }


}