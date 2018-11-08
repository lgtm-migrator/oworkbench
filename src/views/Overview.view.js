import JSView from "sap/ui/core/mvc/JSView";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation from "sap/tnt/SideNavigation";
import NavigationList from "sap/tnt/NavigationList";
import NavigationListItem from "sap/tnt/NavigationListItem";
import App from "sap/m/App";


export default class Overview extends JSView {

  createContent() {
    return (
      <ToolPage
        id="app"
        mainContents={[
          <App id="mainContents" />
        ]}
        sideContent={
          <SideNavigation
            item={<NavigationList
              items={[
                <NavigationListItem icon="sap-icon://explorer">
                  OData Services
                </NavigationListItem>,
                <NavigationListItem icon="sap-icon://explorer">
                  OData Services 2
                </NavigationListItem>
              ]}
            />}
          />
        }
      />
    );
  }

}
