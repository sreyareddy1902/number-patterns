

/*----pattern1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write(j)
    }
    document.write("<br>")
}
    ----*/

/*-----pattern1
let star=1;
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write(j)
    }
    document.write("<br>")
    star++
}
-----*/

/*---pattern2
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write(i)
    }
    document.write("<br>")
    star++
}
    -----*/

/*---pattern2
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write(i)
    }
    document.write("<br>")
}
-----*/

/*----pattern3
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=4;j++)
    {
        document.write(j)
    }
    document.write("<br>")
}
----*/

/*---pattern4
let star=1,n=1
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write("&nbsp;",n)
        n++
    }
    document.write("<br>")
    star++
}
----*/


/*----pattern5
let n=1
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=4;j++)
    {
        document.write("&nbsp;&nbsp;",n)
        n++
    }
    document.write("<br>")
}
----*/

/*----pattern6
let star=1,n=1
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write(n)
        n=n*2
    }
    document.write("<br>")
    star++
}
----*/

/*----pattern7
let star=5,n=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write(j)
        n--
    }
    document.write("<br>")
    star--
}
----*/

/*----pattern8
let star=1,space=2
for(let i=1;i<=5;i++)
{
    let n=1
    for(let j=1;j<=space;j++)
    {
        document.write("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        if(j<star/2)
        {
            document.write(n++)
        }
        else
        {
            document.write(n--)
        }
    }
    if(i<3)
    {
        star=star+2
        space--
    }else{
        star=star-2
        space++
    }
    document.write("<br>")
}
----*/

/*----left arrow pattern
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=3;j++)
    {
        if(i>=2 && i<=4)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star++
    }
    else
    {
        star--
    }
    document.write("<br>")
}
-----*/
