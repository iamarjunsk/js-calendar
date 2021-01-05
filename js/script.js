function genMonth(y,m,month){
    firstDay = (new Date(y, m)).getDay();
    lastday = new Date(y,m+1,0).getDate()
    mon = document.querySelector('#'+month)
    i=firstDay
    k=1
    for(j=0;j<firstDay;++j){
        mon.innerHTML+=`<div></div>`
    }
    while(k<=lastday){
        mon.innerHTML+=`<div class="day">`+k+`</div>`
        k=k+1
    }
}
function dispCal(yr){
    document.querySelector('#year').innerHTML=yr
    ms = document.getElementsByClassName('months')
    for(i=0;i<12;++i){
        ms[i].innerHTML = `<div class="s">Sun</div>
        <div class="d">Mon</div>
        <div class="d">Tue</div>
        <div class="d">Wed</div>
        <div class="d">Thu</div>
        <div class="d">Fri</div>
        <div class="d">Sat</div>`
    }
    months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    for(a=0;a<12;++a){
        genMonth(yr,a,months[a])
    }
}
