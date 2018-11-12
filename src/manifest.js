export const manifest = {
  "_version": "1.1.0",
  "sap.app": {
    "_version": "1.1.0",
    "id": "org.fornever.odata.workbench",
    "type": "application",
    "i18n": "i18n/i18n.properties",
    "title": "{{appTitle}}",
    "description": "{{appDescription}}",
    "applicationVersion": {
      "version": "1.0.0"
    }
  },
  "sap.ui": {
    "_version": "1.1.0",
    "technology": "UI5",
    "deviceTypes": {
      "desktop": true,
      "tablet": true,
      "phone": true
    },
    "supportedThemes": ["sap_bluecrystal"]
  },
  "sap.ui5": {
    "_version": "1.1.0",
    "rootView": {
      "viewName": "org.fornever.odata.workbench.views.Overview",
      "type": "JS",
      "id": "app"
    },
    "dependencies": {
      "minUI5Version": "1.30",
      "libs": {
        "sap.m": {},
        "sap.tnt": {},
        "sap.uxap": {}
      }
    },
    "models": {
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "org.fornever.odata.workbench.i18n.i18n"
        }
      }
    },
    "resources": {
      "css": [
        {
          "uri": "css/style.css"
        }
      ]
    },
    "routing": {
      "config": {
        "routerClass": "sap.ui.core.routing.Router",
        "viewType": "JS",
        "viewPath": "org.fornever.odata.workbench.views",
        "controlId": "mainContents",
        "controlAggregation": "pages"
      },
      "routes": [
        {
          "pattern": "",
          "name": "services",
          "target": "services"
        }
      ],
      "targets": {
        "services": {
          "viewName": "Services"
        }
      }
    }
  }
};
