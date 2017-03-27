var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++)
{
    divisible = false;
    if(i % 3 == 0)
    {
        document.write("Fizz");
        divisible = true;
    }
    
    if(i % 5 == 0)
    {
        document.write("Buzz");
        divisible = true;
    }
    /*El signo de admiración significa negar lo que tiene por delante, en este caso está diciendo si 'no es divisible'*/
    if (!divisible)
    {
        document.write(i);
    }
    document.write("<br />");
}