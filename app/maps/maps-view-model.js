const observableModule = require("tns-core-modules/data/observable");

function MapsViewModel() {
    const viewModel = observableModule.fromObject({

        cognome: "",
        nome: ""
    });

    return viewModel;
}

module.exports = MapsViewModel;
