let product = [['молоко', 'молоко'],
               ['молоко', 'паста', 'молоко',],
               ['молоко', 'картошка', 'молоко',]
]

//console.log(product[1].length)
for(let i=0;i<product.length;i++){
    for(let k=0;k<product[i].length;k++){
        console.log(product[i][k])
    }
}