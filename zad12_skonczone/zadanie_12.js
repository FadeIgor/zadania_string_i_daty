const btn = document.getElementById('convertBtn')
const results = document.getElementById('results')

const day = document.getElementById('day').value
const month = document.getElementById('month').value
const year = document.getElementById('year').value

const format1 = document.getElementById('format1')
const format2 = document.getElementById('format2')
const formatFull = document.getElementById('formatFull')
const dayOfWeek = document.getElementById('dayOfWeek')
const daysDifference = document.getElementById('daysDifference')
const timeRelation = document.getElementById('timeRelation')
const message = document.getElementById('message')

const tydzien = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
const miesiac = ["styczen", 'luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien']

btn.addEventListener('click', function(){
    results.style.display = 'block'
    
    data = new Date()

    nowa_data = new Date()
    nowa_data.setYear(year);
    nowa_data.setMonth(month-1);
    nowa_data.setDate(day);

    format1.innerText = `${nowa_data.getDate()}.${nowa_data.getMonth()+1}.${nowa_data.getFullYear()}`
    format2.innerText = `${nowa_data.getFullYear()}.${nowa_data.getMonth()+1}.${nowa_data.getDate()}`
    formatFull.innerText = `${nowa_data.getDate()} ${miesiac[nowa_data.getMonth()]} ${nowa_data.getFullYear()}`
    dayOfWeek.innerText = `${tydzien[nowa_data.getDay()]}`

    let roznica = 0;
    if(data > nowa_data) roznica = Math.floor((data - nowa_data)/86400000); 
    else roznica = Math.floor((nowa_data - data)/86400000);
    daysDifference.innerText = `${roznica}`

    if(data>nowa_data) timeRelation.innerText = 'przeszlosc';
    else timeRelation.innerText = 'przyszlosc';

    if(data>nowa_data) message.innerText = `Minelo ${roznica} dni`;
    else message.innerText = `Pozostalo ${roznica} dni`;
    
        
})
