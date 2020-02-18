

exports.openingCheck = function(open_hours) {
    var date = new Date();
    var day = date.toDateString().split(" ")[0];
    var before_day;
    var time ;
    var hour;
    var minute;
    var dayList = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var opening_hours = JSON.parse(open_hours);

    console.log(date + "오늘 날짜")
    //구글에서아예 서치를 못해 온 경우
    if (opening_hours == null){
        console.log("정보없음")
        return "정보없음";
    }else{
        //오늘 날짜에 대한 정보 초기화
        var close_time;
        var open_time;
        var close_nextday_flag;

        //이전 날짜에 대한 정보 초기화
        var before_nextday_flag;
        var before_close_time;

        //이전 날짜 확인
        if(day == "Mon"){
            before_day = dayList[dayList.indexOf(day)+6];
        }else {
            before_day = dayList[dayList.indexOf(day)-1];
        }

        //오늘 날짜 체크를위한 데이터 추가
        close_time = opening_hours[day].close;
        open_time = opening_hours[day].open;
        close_nextday_flag = opening_hours[day].close_nextday;

        //이전 날짜 체크를위한 데이터 추가
        before_nextday_flag =  opening_hours[before_day].close_nextday;
        before_close_time = opening_hours[before_day].close;


        //현재의 시간 세팅
        if(date.getHours().toString().length == 1){
            hour = "0" + date.getHours().toString();
        }else{
            hour = date.getHours().toString();
        }
        if(date.getMinutes().toString().length == 1){
            minute = "0" + date.getMinutes().toString();
        }else {
            minute = date.getMinutes().toString();
        }
        time = hour + minute; //접속 된 현재 시간 체크

        if(before_nextday_flag == 'Y'){
            if(time < before_close_time){
                console.log("영업중");
                return "영업중";
            }else{
                if(open_time == ""){
                    console.log("휴무");
                    return "휴무"
                }else{
                    if(close_nextday_flag == 'Y'){
                        close_time = parseInt(close_time) + 2400;
                    }
                    console.log(open_time)
                    console.log(close_time)
                    if(time < open_time ){
                        console.log('영업종료')
                        return "영업종료"
                    }else{
                        if(time > close_time){
                            console.log('영업종료');
                            return "영업종료"
                        }else{
                            console.log('영업중');
                            return "영업중"
                        }
                    }
                }
            }
        }else{
            if(open_time == ""){
                console.log("영업종료");
                return "영업종료"
            }else{
                if(close_nextday_flag == 'Y'){
                    close_time = parseInt(close_time) + 2400;
                }
                console.log(open_time)
                console.log(close_time)
                if(time < open_time ){
                    console.log('영업종료')
                    return "영업종료"
                }else{
                    if(time > close_time){
                        console.log('영업종료');
                        return "영업종료"
                    }else{
                        console.log('영업중');
                        return "영업중"
                    }
                }
            }
        }
    }
}
