const observableModule = require("tns-core-modules/data/observable");

function MapsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */

        testoMaps: "Testo dal modello Maps"
    });

    return viewModel;
}

module.exports = MapsViewModel;
