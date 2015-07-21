var root = angular.module("Symanto.Root");
root.factory('BasePathInterceptor', function ($injector) {

    var baseOrigin = "localhost:44300";
    //var baseOrigin = "emetest.symanto.net";

    return {
        'request': function (config) {

            if (config.url.indexOf("/api/") != -1) {

                var parser = document.createElement('a');
                parser.href = config.url;

                var result = {};
                result.protocol = "https:"; //parser.protocol; // => "https:"
                result.pathname = parser.pathname; // => "/pathname/"

                // Fix for Internet Explorer
                // IE does not prepend a / to the pathname. All other browsers do.
                if (result.pathname.indexOf("/") != 0) {
                    result.pathname = "/".concat(result.pathname);
                }

                config.url = result.protocol + "//" + baseOrigin + result.pathname;
            }

            return config;
        }
    }
});
