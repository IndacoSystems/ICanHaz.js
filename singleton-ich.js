define('singleton-ich', [
        'i18n!nls/indaco-resx',
        'ich',
        'text!commonTemplates.html'
], function (Resources, i, common) {

    var IchSingleton = (function () {
        var instance;

        var buildCommon = function (html) {
            
            var $wrapper = $('<div></div>').append(common),
				scripts = $wrapper.find('script[type="text/html"], script[type="text/x-icanhaz"], script[type="text/mustache"]');


            scripts.each(function(idx,script) {
                ich.addTemplate(script.id, script.innerHTML.trim());
            });
            
        };

        return {
            getInstance: function (opt) {
                if (!instance) {
                    instance = ich;

                    buildCommon();
                    
                    instance.setResources(Resources);
                    instance.grabTemplates();
                }
                return instance;
            }
        };

    })();

    return IchSingleton;

});
