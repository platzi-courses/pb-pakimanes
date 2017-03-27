var numeros = 100;
for(var i = 1; i <= 100; i++)
{
    if(i % 3 == 0)
    {
        document.write("Fizz");
    }/*En esta línea se coloca un else if para que este if no sea independiente con el anterior*/
    else if(i % 5 == 0)
    {
        document.write("Buzz");
    }
    else
    {
        document.write(i);
    }
    document.write("<br />");
}