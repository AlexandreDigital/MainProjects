function calc()

{
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const oper = document.getElementById('operator').value;

    if(oper === '+') 
    {
        document.getElementById('result').value = n1 + n2;
    }
}



