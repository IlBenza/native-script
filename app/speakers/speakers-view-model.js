const observableModule = require("tns-core-modules/data/observable");
const data = require('./data');
const firebase = require("nativescript-plugin-firebase/app")

const firestore = firebase.firestore()
const speakers = firestore.collection("speakers")

const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const datiDaCaricare = new ObservableArray();

/*
data.forEach((d) => {
    speakers.add(d).then(documentRef => {
        const doc = speakers.doc(documentRef.id)
        doc.update({
            //Non è completo
        })
    })
})
*/


speakers.get().then((document) => {

    document.forEach((doc) => {

        const tmp = doc.data()
        tmp.interventocompleto = `${tmp.nome} - ${tmp.inizio} ${tmp.fine}`
        datiDaCaricare.push(tmp)
    })
})

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
        items: datiDaCaricare
    });
    return viewModel;
}


module.exports = SpeakersViewModel;
