var c = 0,sum = 0, flag = 0, fl= false,i = 1, j= 2,k = 0,l = 1, m= 2, count = 0
function numButton() {
    let num = document.querySelectorAll('.num');
    for (let i = 0; i < num.length; i++) {
        let nums = num[i].innerText
        //console.log(num[i])
        num[i].addEventListener('click', function () {
           inputNum(nums)
        })
    }
}

function inputNum(nums) {
    const maxSizeInput = 12
    const arr = [3, 7, 11, 16, 20]
    let inputs = document.getElementById('input')
    let txt = document.getElementById('num').value
    if (txt.length <= inputs.size) {
        if (txt.length >= maxSizeInput) {
            inputs.setAttribute("style", "font-size: 1.7rem")
        }
         txt = txt + nums
        for(let number of arr){
            if(txt.length == number)
            {
                txt = txt + ' '
            }
        }
        // txt = "12345"
        // txt = txt[1]+' '
        //
        // console.log(txt)
        // console.log(txt[0] + ' '.split(''))
        // console.log(txt)
        // if (txt.length == 8){
        //     console.log(txt.length)
        //     let txt1 = txt.split('')
        //     let txt2 = txt1.splice(1, 0, ' ')
        //     txt = txt1.join('')
        //     console.log(txt)
        // }
        // else if(txt.length > 5 && txt.length < 21) {
        //     let txt1 = txt.split('')
        //     let txt2 = txt1[i]
        //     txt1[i] = txt1[j]
        //     txt1[j] = txt2
        //     txt = txt1.join('')
        //     i++
        //     j++
        //
        //     if(txt.length == 7){
        //         k++
        //     }
        //
        // } else if(txt.length > 8 && txt.length < 21) {
        //     let txt1 = txt.split('')
        //     //console.log(txt1,'gg')
        //     let txt2 = txt1[l]
        //     txt1[l] = txt1[m]
        //     txt1[m] = txt2
        //     txt = txt1.join('')
        // }

        //     if (nums == ',') {
        //         fl = true
        //         if (count == 0) {
        //             if (inputs.value == 0) {
        //                 inputs.value = 0 + ','
        //                 document.getElementById('num').value = 0 + ','
        //                 count++
        //             } else {
        //                 inputs.value = txt
        //                 document.getElementById('num').value = txt
        //                 count++
        //             }
        //         }
        //     }else {
        //             inputs.value = txt
        //             document.getElementById('num').value = txt
        //         }
        // }

        inputs.value = txt
        document.getElementById('num').value = txt
    }
}

function searchPressingFuncButton() {
    let func = document.querySelectorAll('.func');
    for (let i = 0; i < func.length; i++) {
        console.log(func[i])
        let button = func[i].innerText
        func[i].onclick = allFunctionsButtons
    }
}
function allFunctionsButtons(e){
    let inputs = document.getElementById('input')
    let func = e.target
    switch (func.innerText){
        case '+': flag = 1
            c = oneOperand()
            break
        case '−': flag = 2
            c = oneOperand()
            break
        case '÷': flag = 3
            c = oneOperand()
            break
        case'⨯': flag = 4
            c = oneOperand()
            break
        case'C': removeInput()
            break
        case'CE': inputs.value = 0
            document.getElementById('num').value = ''
            break
        case'DEL': delChar()
            break
        case'±': signOperand()
            break
        case'%': percent()
            break
        case'√': root()
            break
        case'x²': exponent()
            count++

            break
        case'1/x': fraction()
            break



       default: operators()
    }
}

function operators() {
    let inputs = document.getElementById('input')
    if (flag == 1) {
        let d = oneOperand()
        addNumbers(c,d)
        flag = 0
    } else if (flag == 2) {
        let d = oneOperand()
        subNumbers(c,d)
        flag = 0
    } else if (flag == 3) {
        let d = oneOperand()
        delNumbers(c,d)
        flag = 0
    } else if (flag == 4) {
        let d = oneOperand()
        mulNumbers(c,d)
        flag = 0
    }

}

function fraction(){
    let inputs = document.getElementById('input')
    let a = oneOperand()
    let per = 1 / a
    inputs.value = per
    document.getElementById('num').value = ''
}

function root(){
    let inputs = document.getElementById('input')
    let a = oneOperand()
    let per = Math.sqrt(a)
    inputs.value = per
    document.getElementById('num').value = ''
}

function exponent(){
    let inputs = document.getElementById('input')
    let a = oneOperand()
    let per = +a * +a
    // if(Number.isInteger(per) == false){
    //     if(count == 0){
    //         inputs.value = per.toFixed(2)
    //     }
    //     if(count == 1){
    //         inputs.value = per.toFixed(4)
    //     }
    //     if(count == 2){
    //         inputs.value = per.toFixed(8)
    //     }
    //     if(count == 3){
    //         inputs.value = per.toFixed(16)
    //
    //     }
    //     if(count == 4){
    //         inputs.value = 'Переполнение'
    //     }


    // }
    // else {
    //     inputs.value = per
    // }
    inputs.value = per
    document.getElementById('num').value = ''
}

function percent(){
    let inputs = document.getElementById('input')
    let a = oneOperand()
    let per = +a / 100
    inputs.value = per
    document.getElementById('num').value = ''
}

function signOperand(){
    let inputs = document.getElementById('input')
    inputs.value =  -inputs.value
}

function oneOperand(){
    let inputs = document.getElementById('input')
    let c = inputs.value
    document.getElementById('num').value = ''
    inputs.value = ''
    return c
}

function delChar(){
    let inputs = document.getElementById('input')
    let str = inputs.value
    if(str.slice(str.length - 1)== ' '){
        inputs.value = str.substring(0, str.length - 2)
        document.getElementById('num').value = ''
    }else {
        inputs.value = str.substring(0, str.length - 1)
        document.getElementById('num').value = ''
    }

}

 function removeInput(){
     let inputs = document.getElementById('input')
     inputs.value = ""
     document.getElementById('num').value = ''
}

function mulNumbers(a,b){
    let inputs = document.getElementById('input')
    let mul = +a * +b
    inputs.value = mul
    document.getElementById('num').value = ''
}

function delNumbers(a,b){
    let inputs = document.getElementById('input')
    let del = +a / +b
    inputs.value = del
    document.getElementById('num').value = ''
}

function subNumbers(a, b){
    let inputs = document.getElementById('input')
    let sub = +a - +b
    inputs.value = sub
    document.getElementById('num').value = ''
}


function addNumbers(a, b){
    let inputs = document.getElementById('input')
        let sum = +a + +b
        inputs.value = sum
        document.getElementById('num').value = ''
}

numButton()
searchPressingFuncButton()