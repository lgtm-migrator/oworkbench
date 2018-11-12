import JSView from "sap/ui/core/mvc/JSView";
import ObjectPageLayout from "sap/uxap/ObjectPageLayout";
import ObjectPageHeader from "sap/uxap/ObjectPageHeader";

export default class App extends JSView {

  createContent() {
    return (
      <ObjectPageLayout
        headerContent={<ObjectPageHeader />}
      />
    );
  }

}
