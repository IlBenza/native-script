const observableModule = require("tns-core-modules/data/observable");
const data = require('./data')
const firebase = require("nativescript-plugin-firebase/app")
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

const myObservableArray = new ObservableArray();

const firestore = firebase.firestore()
const schedule = firestore.collection("schedule")

//console.log('COLLECTION: ', schedule)
schedule.get().then((document) => {

    //console.log('DOCUMENTO: ', document)
    document.forEach((doc) => {

        const tmp = doc.data()
        tmp.name = `${tmp.nome}`
        tmp.description = `${tmp.inizio} - ${tmp.fine} ${tmp.luogo}`
        myObservableArray.push(tmp)
        console.log('PROVA: ', tmp)
    })
})

//Aggiunge un oggetto nel database
/*
schedule.add({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000
})
*/

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: myObservableArray,
        myGroupingFunc: function(item) {
            return item.group
        }
    });
    return viewModel;
}

module.exports = ScheduleItemsViewModel;
