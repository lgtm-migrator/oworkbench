import JSView from "sap/ui/core/mvc/JSView";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation from "sap/tnt/SideNavigation";
import NavigationList from "sap/tnt/NavigationList";
import NavigationListItem from "sap/tnt/NavigationListItem";
import App from "sap/m/App";
import { connect } from "../boot/store";

@connect(state => state.overview)
class Overview extends JSView {
  init() {
    setInterval(() => {
      this.dispatch({ type: "INC" });
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

export default Overview;
