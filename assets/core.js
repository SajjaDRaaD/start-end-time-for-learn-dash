var $ = jQuery;

var phpNowTime = QuizTimeInfo.nowTime.split(" ");
var quizDate = QuizTimeInfo.quizStartDate;
var quizTime = QuizTimeInfo.quizStartTime;
var enterTime = QuizTimeInfo.quizEnterTime;

console.log(QuizTimeInfo);
console.log(quizTime);
console.log(phpNowTime);

var todayJalali = moment(phpNowTime[0]).format("jYYYY/jMM/jDD");

var quizStartTime = moment.utc(moment(quizTime,"HH:mm:ss"));
var quizEnterTime = moment.utc(moment(enterTime,"HH:mm:ss"));
var nowTimeMS = moment.utc(moment(phpNowTime[1],"HH:mm:ss"));
var startEnterDif = quizEnterTime - quizStartTime;

if(todayJalali == quizDate && quizStartTime <= nowTimeMS){

    if(quizEnterTime >= nowTimeMS){
        // File learndash.min-rtl.css Edit Shavad (Display : None)
        $('input[name="startQuiz"]').css("display","flex");

    } else{
        
        $(".wpProQuiz_text").append(`<div class="not-yet"><i class="fas fa-exclamation-triangle"></i><h4>مهلت ورود به آزمون به پایان رسیده است.</h4><span>لطفا در تاریخ و ساعت اعلام شده وارد آزمون شوید.</span></div>`)

    }

} else{

    $(".wpProQuiz_text").append(`<div class="not-yet"><i class="fas fa-exclamation-triangle"></i><h4>زمان آزمون فرا نرسیده است!</h4><span>لطفا در تاریخ ${quizDate} در ساعت ${quizTime} وارد آزمون شوید.</span></div>`)

}

