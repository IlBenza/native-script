const ScheduleItemsViewModel = require("./schedule-items-view-model");
const firebase = require("nativescript-plugin-firebase")
var dialogs = require("tns-core-modules/ui/dialogs")

//Prendo i dati dal scheduleViewModel nel model.js
const viewModel = new ScheduleItemsViewModel();

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = viewModel;
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "schedule/schedule-item-detail/schedule-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function showDialog(){
    console.log('ShowDialog')

    /*
        //credenziali accesso
        email: 'prova@gmail.com',
        password: 'password'
    */

    dialogs.login({
        title: "Login",
        message: "Enter credential",
        okButtonText: "Go",
        cancelButtonText: "Cancel",
        //neutralButtonText: "Neutral",
        userName: "prova@gmail.com",
        password: "password",
        inputType: dialogs.inputType.password
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", password: " + r.password);
        if(r.result){
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: r.userName,
                    password: r.password
                }
            }).then(result => {
                console.log('Utente loggato con successo', result)
                viewModel.set('isLogin', true)
                alert({
                    title: 'Autenticazione ok',
                    message: `Ciao, ${result.email}`,
                    okButtonText: 'ok'
                })
            }).catch(error => {
                viewModel.set('isLogin', false)
                alert({
                    title: 'Autenticazione fallita',
                    message: `Email o password non esistente/i ${error}`,
                    okButtonText: 'ok'
                })
                console.error(error)
            });
        } else {

        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;
