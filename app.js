var oneOperand = 0, flOperators = 0, flComma= false,flSpan = false,count = 0,previousTarget = '', i = 0

function searchPressingNumButton() {
    let num = document.querySelectorAll('.num');
    for (let i = 0; i < num.length; i++) {
        let nums = num[i].innerText
        //console.log(num[i])
        num[i].addEventListener('click', function () {
            CreateOperand(nums)
        })
    }
}

function CreateOperand(nums) {
    const maxSizeInput = 12
    const arr = [3, 7, 11, 15, 19]
    let inputs = document.getElementById('input')
    let txt = document.getElementById('num').value
    if (txt.length <= inputs.size) {
        if (txt.length >= maxSizeInput) {
            inputs.setAttribute("style", "font-size: 1.7rem")
        }
        txt = txt + nums
        for (let number of arr) {
            if (txt.length == number && flComma == false) {
                txt = txt + ' '
            }
        }
        if (nums == '.') {
            if(inputs.value == '' || inputs.value == 0) {
                inputs.value = 0 + '.'
                document.getElementById('num').value = 0 + '.'
                flComma = true
            }else if (flComma == false) {
                inputs.value = txt
                document.getElementById('num').value = txt
                flComma = true
            }
        } else {
                inputs.value = txt
                document.getElementById('num').value = txt
        }
    }
}
function CreateSpan(target, operand){
    let inputs = document.getElementById('input')
    let prompt = document.querySelector('.span')
    if(target == document.querySelector('#equally').innerText){
        prompt.innerText = ''
    }else if(target == document.querySelector('#interest').innerText ){
        prompt.innerText += ' ' + operand
    }else if(inputs.value == ''){
        prompt.innerText += ' ' + 0 + ' ' + target
    }else if(target == 'x²'){
        prompt.innerText += ` sqr(${operand})`
    }else if(target == '√'){
        prompt.innerText += ` √(${operand})`
    }else if(target == '1/x'){
        prompt.innerText += ` 1/(${operand})`
    }else if(target == '%'){
        prompt.innerText += ' ' + target
    }else if(flSpan){
        prompt.innerText += ' ' + target
    }else{
        prompt.innerText += ' ' + operand + ' ' + target
    }

}

function getOperand(){
    let inputs = document.getElementById('input')
    let timeOperand = inputs.value
    document.getElementById('num').value = ''
    //inputs.value = ''
    flComma = false
    return timeOperand
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
    flComma = false
    let inputs = document.getElementById('input')
    let Target = e.currentTarget.innerText
    if(Target != '=' && Target != 'CE' && Target != 'C' && Target != 'DEL' &&
        Target != '±'&& Target != 'x²' && Target != '%'&& Target != '√'&& Target != '1/x'){
         previousTarget += e.currentTarget.innerText
    }else if(Target == 'C' ){
        previousTarget = ''
        count = 0
        oneOperand = 0
        i = 0
        flComma = false
    }else if(Target == 'x²' || Target == '%'|| Target == '√'|| Target == '1/x'){
        flSpan = true
    }else if(Target == '='){
        previousTarget = ''
        count = 0
        i = 0
    }
    switch (e.currentTarget.innerText){
        case '+': flOperators = 1
            if(count == 0){
                oneOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }
                flSpan = false
            } else {
                let twoOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }
                operators(twoOperand)
            }
            count++
            break
        case '−': flOperators = 2
            if(count == 0){
                oneOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }
                flSpan = false
            } else{
                let twoOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }
                operators(twoOperand)
            }
            count++
            break
        case '÷': flOperators = 3
            if(count == 0){
                oneOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }
                flSpan = false
            } else{
                let twoOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }
                operators(twoOperand)
            }
            count++
            break
        case'⨯': flOperators = 4
            if(count == 0){
                oneOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, oneOperand)
                }
                flSpan = false
            } else{
                let twoOperand = getOperand()
                if(!flSpan) {
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }else{
                    CreateSpan(e.currentTarget.innerText, twoOperand)
                }
                operators(twoOperand)
            }
            count++
            break
        case'C': removeInput()
            break
        case'CE': inputs.value = 0
            let prompt = document.querySelector('.span')
            let str = prompt.innerText.split(previousTarget[i])
            let str2 = str.pop()
            prompt.innerText = str.join(previousTarget[i]) + ' ' + previousTarget[i]
            if( prompt.innerText == 'undefined'){
                prompt.innerText = ''
            }
            flSpan = false
            flComma = false
            document.getElementById('num').value = ''
            break
        case'DEL': delChar()
            flComma = false
            break
        case'±': signOperand()
            break
        case'%': let twoOperand = getOperand()
            percent(twoOperand)
            let rez = percent(twoOperand)
            CreateSpan(e.currentTarget.innerText,rez)
            break
        case'√': let operandRoot = inputs.value
            root()
            CreateSpan(e.currentTarget.innerText,operandRoot)
            break
        case'x²':
            let operandExp = inputs.value
            exponent()
            CreateSpan(e.currentTarget.innerText,operandExp)
            break
        case'1/x': let operandFrac = inputs.value
            fraction()
            CreateSpan(e.currentTarget.innerText,operandFrac)
            break
       default: operators(Target)
           CreateSpan(e.currentTarget.innerText,oneOperand)
    }
}

function operators(operand) {
    let inputs = document.getElementById('input')
    if(document.querySelector('#equally').innerText == operand) {
        if (flOperators == 1) {
            let twoOperand = getOperand()
            addNumbers(oneOperand, twoOperand)
            flOperators = 0
        } else if (flOperators == 2) {
            let twoOperand = getOperand()
            subNumbers(oneOperand, twoOperand)
            flOperators = 0
        } else if (flOperators == 3) {
            let twoOperand = getOperand()
            delNumbers(oneOperand, twoOperand)
            flOperators = 0
        } else if (flOperators == 4) {
            let twoOperand = getOperand()
            mulNumbers(oneOperand, twoOperand)
            flOperators = 0
        }

    }else{
        flSpan = false
        if (previousTarget[i] == '+') {
            oneOperand = addNumbers(oneOperand, operand)
            i++
        } else if (previousTarget[i] == '−') {
            oneOperand = subNumbers(oneOperand, operand)
            i++
        } else if (previousTarget[i] == '⨯') {
            oneOperand = mulNumbers(oneOperand, operand)
            i++
        } else if (previousTarget[i] == '÷') {
            oneOperand = delNumbers(oneOperand, operand)
            i++
        }
    }
}

function fraction(){
    let inputs = document.getElementById('input')
    let operand = getOperand()
    let rez = 1 / operand
    inputs.value = rez
    document.getElementById('num').value = ''
}

function root(){
    let inputs = document.getElementById('input')
    let operand = getOperand()
    let rez = Math.sqrt(operand)
    inputs.value = rez
    document.getElementById('num').value = ''
}

function exponent(){
    let inputs = document.getElementById('input')
    let operand = getOperand()
    let exp = +operand * +operand
    inputs.value = exp
    document.getElementById('num').value = ''
}

function percent(twoOperand){
    let inputs = document.getElementById('input')
    let operand = getOperand()
    let per = (+oneOperand * +twoOperand)/ 100
    inputs.value = per
    document.getElementById('num').value = ''
    return per
}

function signOperand(){
    let inputs = document.getElementById('input')
    inputs.value = -inputs.value
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
     let span = document.querySelector('.span')
     inputs.value = ""
     document.getElementById('num').value = ''
     span.innerText = ''
}

function mulNumbers(oneOperand,twoOperand){
    let inputs = document.getElementById('input')
    let mul = +oneOperand * +twoOperand
    inputs.value = mul
    document.getElementById('num').value = ''
    return mul
}

function delNumbers(oneOperand,twoOperand){
    let inputs = document.getElementById('input')
    let del = +oneOperand / +twoOperand
    inputs.value = del
    document.getElementById('num').value = ''
    return del
}

function subNumbers(oneOperand, twoOperand){
    let inputs = document.getElementById('input')
    let sub = +oneOperand - +twoOperand
    inputs.value = sub
    document.getElementById('num').value = ''
    return sub
}


function addNumbers(oneOperand, twoOperand){
    let inputs = document.getElementById('input')
    let sum = +oneOperand + +twoOperand
    inputs.value = sum
    document.getElementById('num').value = ''
    return sum
}

searchPressingNumButton()
searchPressingFuncButton()