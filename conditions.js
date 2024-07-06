function fun() {
    var productPrice = 100;
    console.log(productPrice)

    let existingAmount = document.getElementById("enter").value

console.log(existingAmount)
    if (existingAmount >= productPrice) {
        // let val = document.getElementById("con")
        document.getElementById("con").innerHTML = "you can buy the product"

    }
    else {
    document.getElementById("con").innerHTML = "you can not buy the product cause amount is lesser"
        
    }
}
function forloop(){
    
    for (let i = 0; i < 5; i++) {
        let val2=document.getElementById("funcall")
        val2.innerHTML += i +"<br>"
      }
    
}
function whileloop(){
    let i = 0;
    let val3;
    while (i < 5) {

        val3=document.getElementById("funcall2")
        val3.innerHTML += i +"<br>"
      i++;
      
    }
    console.log(val3.innerHTML)
    alert(val3.innerHTML)
}
function switchcase(){
    let grade = document.getElementById("enter2").value
    let show = document.getElementById("switchshow")
    switch (grade) {
        case ('A' &&'a'):
            show.innerHTML = "Excellent!"
            break;
        case ('B' && 'b'):
            show.innerHTML = "good"
            break;
        case ('C' && 'b'):
            show.innerHTML = "Average"
            break;
        case ('D' && 'd'):
            show.innerHTML = " below Average"
            break;
        case ('F' && 'f'):
            show.innerHTML = " fail"
            break;
        default:
            show.innerHTML = " invalid input"
            break;
    }
}




