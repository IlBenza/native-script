const observableModule = require("tns-core-modules/data/observable");

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({

        testoSpeakers: "Testo dal modello Speakers",
        subtitle: ""
    });

    setTimeout(() => {

        viewModel.subtitle = "Mario Rossi";
    }, 700);

    return viewModel;
}

module.exports = SpeakersViewModel;
