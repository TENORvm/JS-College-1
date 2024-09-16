function Complete() {
    let element = `Прізвище: ${document.sel.family.value}\n Ім'я: ${document.sel.name.value}\n Рік: ${document.sel.age.value}\n Телефон: ${document.sel.phone.value}`;
    alert(element);
}

function checkAge(age) {
    if (Number(age) < 18) {
        return document.sel.age.innerHTML = 18;
    }
    return age;
}


function btnClick()
{
if(document.test1.sex[0].checked) {
document.test1.sex[1].click();
}else{
document.test1.sex[0].click();
}
}

function btnClick2()
{
let sI=document.test2.item.selectedIndex;
console.log(sI)
let txt="";
txt="Запропоновано"+document.test2.item.length+" напоїв"+
"\n Вибраний "+document.test2.item.options[sI].text+
" (value="+document.test2.item.options[sI].value+
", index="+document.test2.item.options[sI].index+")";
if(document.test2.item.options[sI].defaultSelected)
{
txt+="\nЦей напій вибирається за замовчуванням."
alert(txt);
}
}
for(i=0;i<document.links.length;i++) {
// Створення i-елемента списку та запис до нього посилання
document.sel.listOfLinks.options[i] =new Option(
document.links[i],
i,
false,
false
);
}
// Виділення першого елемента у списку
document.sel.listOfLinks.selectedIndex=0;