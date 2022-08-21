function ForMethod()
{
    let forPrompt = prompt("Ingrese una cantidad de numeros");

    for (let i = 0; i < forPrompt; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i + " es par");
        }else
        {
            console.log(i + " es impar");
        }
    }
}

function WhileMethod()
{
    let whilePrompt = prompt("Ingrese un numero mayor a 10");

    while(whilePrompt < 10)
    {
        whilePrompt = prompt("Error, ingrese un numero mayor a 10");
    }

    console.log("Su numero es " + whilePrompt);
}

