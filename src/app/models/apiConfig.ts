import { InjectionToken } from "@angular/core";

// Configuracion de la api de express 
interface appConfig {
    endPoint: String;
}
const APP_CONFIG_VALUE:appConfig = {
    endPoint:'http://localhost:3000'
}; 

// new injection token
const APP_CONFIG =  new InjectionToken<appConfig>('app.config'); 


export { appConfig, APP_CONFIG_VALUE, APP_CONFIG };