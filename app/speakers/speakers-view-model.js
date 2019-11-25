const observableModule = require("tns-core-modules/data/observable");

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */

        testoSpeakers: "Testo dal modello Speakers"
    });

    return viewModel;
}

module.exports = SpeakersViewModel;
