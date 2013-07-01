define('singleton-ich', [
        'ich'
], function () {

    var IchSingleton = (function () {
        var instance;

        return {
            getInstance: function (opt) {
                if (!instance) {
                    instance = ich;
                    instance.grabTemplates();
                } 
                return instance;
            }
        };

    })();

    return IchSingleton;

});
    