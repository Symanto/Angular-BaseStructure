var root = angular.module("Symanto.Root");
root.config(function($stateProvider, $urlRouterProvider) {

    //controls the whole url default behaviour of the app; childmodules should not have this
    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when("/", "/login");

    console.log("Root States");

    $stateProvider
        // Root state, where every state inherits from
        .state('root', {
            abstract:true,
            template:"<ui-view/>",
            controller: "RootController",
            resolve: {
                loadingIndicatorState: function (LoadingIndicatorService) {
                    return LoadingIndicatorService.getCurrentState();
                }
            }
        })

        // Layout with top- and sidebars
        .state('fullLayout', {
            parent: "root",
            abstract: true,
            controller: "SidebarController",
            templateUrl: "/Angular/Root/Views/full_layout.html",
            resolve: {
                currentUser: function(SessionService) {
                    return SessionService.getUser();
                },
                unreadNotificationCount: function(NotificationService) {
                    return NotificationService.getUnreadNotificationCount();
                }
            }
        })

        /* Layout with topbar only */
        .state('trimLayout', {
            parent: "root",
            abstract: true,
            templateUrl: "/Angular/Root/Views/trim_layout.html"
        })

        /*TODO Temp state, needs to be moved*/
        .state('welcome', {
            parent:"fullLayout",
            url:"/welcome",
            views: {
                "content@fullLayout": {
                    templateUrl:"/Angular/Root/Views/welcome.html",
                    controller: "WelcomeController"
                }
            }
        })
});