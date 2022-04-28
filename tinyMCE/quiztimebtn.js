jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.wpse72394_plugin', {
        init : function(ed, url){
            ed.addButton('QuizStartShortcodeBTN', {
                title : 'تاریخ و ساعت آزمون',
                onclick : function() {
                    var options = {
                        startDate : "",
                        startTime : "",
                        enterTime : "",
                    }
                    
                    options.startDate = prompt("لطفا تاریخ شروع آزمون را به این شکل وارد کنید: 1400/05/03",'');

                    options.startTime = prompt("لطفا ساعت شروع آزمون را به این شکل وارد کنید : 13:00:00",'');

                    options.enterTime = prompt("لطفا مهلت ورود به آزمون را به این شکل وارد کنید: 13:15:00",'');

					if( options ){
						//ed.selection.setContent('[aparat id="'+ ed.selection.getContent() +'"]');
						ed.selection.setContent(`[QuizTime startdate="${options.startDate}" starttime="${options.startTime}" entertime="${options.enterTime}"]`);
					}
                },
                image: url + "/icon.png"
            });
        },
        getInfo : function() {
            return {
                longname : 'Aparat Shrotcut',
                author : 'Nima Saberi',
                authorurl : 'http://ideyeno.ir/',
                infourl : 'https://wordpress.org/plugins/aparat/',
                version : "1.6"
            };
        }
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('QuizStartShortcodeBTN', tinymce.plugins.wpse72394_plugin);
});