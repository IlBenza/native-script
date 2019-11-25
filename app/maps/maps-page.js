const MapsViewModel = require("./maps-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
