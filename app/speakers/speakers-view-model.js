const observableModule = require("tns-core-modules/data/observable");
const data = require('./data');
const rendata = data.map((item) => {
    item.interventocompleto = `${item.nome} - ${item.inizio} ${item.fine}`
    return item
})

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        items: rendata
    });
    return viewModel;
}

module.exports = SpeakersViewModel;
