const observableModule = require("tns-core-modules/data/observable");

function InformationViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */

        testoInformation: "Testo dal modello Information"
    });

    return viewModel;
}

module.exports = InformationViewModel;
