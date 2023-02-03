// tady je místo pro náš program

/*
Domácí úkol - Lekce 3
1. Vytvoř program, který se zeptá uživatele ("vstup"), na jeho Jméno, Příjmení a rok narození. 
Na výstupu vypiš jeho Jméno Příjmení a Věk. 
Filip Procházka 30 - ukázkový výstup 
 
2. Přidej do programu "vstup" uživatele s jeho oblíbenou barvou ("anglicky") 
s tím, že celý výpis s úkolu č.1. obarvíš danou barvou, ze vstupu uživatele.

Mezi výsledek 1

let firstName = prompt('What is your first name?');
let surname = prompt('What is your surname name?');
let birthYear = Number(prompt('What year were you born in?'));

let age = 2023 - birthYear

let output = document.querySelector('.output')
output.innerHTML = firstName + ' ' + surname + ' ' + age;
*/

let firstName = prompt('What is your first name?');
let surname = prompt('What is your surname name?');
let birthYear = Number(prompt('What year were you born in?'));
let age = 2023 - birthYear;
let color = prompt('Enter color of website text:');

let output = document.querySelector('.output');
output.style.color = color;
output.innerHTML = firstName + ' ' + surname + ' ' + age;
