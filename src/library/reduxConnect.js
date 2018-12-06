const isUI5ModelClass = obj => {
  var rt = false;

  if(obj && obj.getMetadata && obj.getMetadata()._sClassName.startsWith("sap.ui.model")){
    rt = true;
  }

  return rt;
};

export const createConnect = (UI5ModelClass, reduxStore) => {
  if (isUI5ModelClass(UI5ModelClass)) {
    return (mapper: any => any = obj => obj) => target => {
      var model = new UI5ModelClass(mapper(reduxStore.getState()));
      reduxStore.subscribe(() => {
        model.setData(mapper(reduxStore.getState()), true);
      });
      if (target.init) {
        target._init = target.init;
      } else {
        target._init = () => {};
      }

      if(target.props){
        target.props = {};
      }

      // inject redux dispatch and store

      target.init = function() {
        this.dispatch = reduxStore.dispatch;
        this.setModel(model);
        this._init();
      };

      return target;
    };
  } else {
    throw new Error(`${UI5ModelClass} not a ui5 model class`);
  }
};
