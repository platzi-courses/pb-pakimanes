var numeros = 100;

for(var i = 1; i <= 100; i++)
{
    if(i % 3 == 0)
    {
        document.write("Fizz");
    }
    
    if(i % 5 == 0)
    {
        document.write("Buzz");
    /*}En esta sección se está usando una operación matemática para los resultados divisibles de 3 y 5, y el compuesto && significa 'y'*/
    if(i%3 != 0 && i%5 != 0)
    {
        document.write(i);
    }
    document.write("<br />");
}