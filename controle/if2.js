function teste1(num){
    if(num > 7)
    console.log(num)
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { //cuidado com o ;
        console.log(num)
    }
}

teste1(6)
teste1(8)