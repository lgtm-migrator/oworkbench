import JSView from "sap/ui/core/mvc/JSView";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation from "sap/tnt/SideNavigation";
import NavigationList from "sap/tnt/NavigationList";
import NavigationListItem from "sap/tnt/NavigationListItem";
import App from "sap/m/App";
import { connect, store } from "../boot/store";

export default class Overview extends JSView {

  init() {
    this.setModel(connect(state => state.overview));

    setInterval(() => {
      store.dispatch({ type: "INC" });
    }, 1000);
  }


  createContent() {
    return (
      <ToolPage
        id="app"
        mainContents={[<App id="mainContents" />]}
        sideContent={
          <SideNavigation
            item={
              <NavigationList
                items={[
                  <NavigationListItem
                    icon="sap-icon://explorer"
                    text="{/num}"
                  />,
                  <NavigationListItem icon="sap-icon://list">
                    Log
                  </NavigationListItem>
                ]}
              />
            }
          />
        }
      />
    );
  }
}
