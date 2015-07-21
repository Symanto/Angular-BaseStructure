angular.module("Symanto.Root", [
    "ui.router",
    "ui.bootstrap",
    "LocalStorageModule",
    "Symanto.Http",
    "Symanto.LoadingIndicator",
    "Symanto.SessionManagement",
    "Symanto.Message"
]).config(function($httpProvider, localStorageServiceProvider) {

    $httpProvider.interceptors.push("BasePathInterceptor");
    localStorageServiceProvider.setPrefix("symanto.olm");
    localStorageServiceProvider.setStorageType('localStorage');
}).run(function(editableOptions, httpServiceOptions, sessionManagementOptions, LoadingIndicatorService, MessageService) {

    // Add the Symanto Loading Indicator Service to the Http Service
    httpServiceOptions.loadingIndicatorService = LoadingIndicatorService;
    httpServiceOptions.messageService = MessageService;

    // Configure the session management module
    sessionManagementOptions.loginEndpoint = "/api/account/login";
    sessionManagementOptions.clientId = "testWeb";
    sessionManagementOptions.loadingIndicatorService = LoadingIndicatorService;
});