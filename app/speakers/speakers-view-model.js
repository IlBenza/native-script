const observableModule = require("tns-core-modules/data/observable");

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({

        name: "Mario Bianchi",
        azione: "Colazione 8:00 - 9:00",
        descrizione: "caffè cornetto amaro"
    });

    return viewModel;
}

module.exports = SpeakersViewModel;
