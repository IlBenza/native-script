const observableModule = require("tns-core-modules/data/observable");

function MapsViewModel() {
    const viewModel = observableModule.fromObject({

        latitude: 45.649268385921395,
        longitude: 13.762092590332031,
        zoom: 14
    });

    return viewModel;
}

module.exports = MapsViewModel;
