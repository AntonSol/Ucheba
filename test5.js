const x=+prompt('Число от 0 до 3','')
switch(x){
    case 0:
        alert('это число ноль');break
    case 1:
        alert('это один');break    
    case 2:
    case 3:
        alert('это два или три');break 
    default:
        alert('вне зоны обработки')    

}