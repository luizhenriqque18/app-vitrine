import App from './app';

async function startApp(){
    try{
        await App.init();
        await App.startDependencies();
        await App.startServer();
    }catch(error){
        
    }
}

startApp();
