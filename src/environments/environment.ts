// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //#region Entorno Local
  // apiUrl: 'https://localhost:44319/api/v1',
  // apiUrlKibot: 'https://localhost:44374/api',
  // urlLogin: 'http://localhost:4201/auth-app',
  apiOdontologia: 'https://localhost:44345/api',
  //#endregion

  //#region Entorno de pruebas
  apiUrl: 'https://quiron2institucionesapi.azurewebsites.net/api/v1',
  apiUrlKibot: 'http://kibot-quiron-middleware.azurewebsites.net/api',
  urlLogin: 'https://ekisa.azurewebsites.net',
  // apiOdontologia: 'https://quiron-odontologia-api.azurewebsites.net/api',
  //#endregion

  //#region Entorno de produccion
  // apiUrl: 'https://quironinstitucionesapi.azurewebsites.net/api/v1',
  // apiUrlKibot: 'http://kibot-quiron-middleware.azurewebsites.net/api',
  // urlLogin: 'https://ekisa.com.co/auth-app',
  // apiOdontologia: 'https://quiron-odontologia-api.azurewebsites.net/api',
  //#endregion
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
