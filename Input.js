
    let time = prompt("Введіть час:");
    if (time > 17) {
        alert("Добрий вечір")
    } else {
        alert("Добрий день")
    }


    let name = prompt("Введіть ім'я:");
    if (name == "John") {
        alert("Привіт John");
    } else {
        alert("Я вас не знаю");
    }
    
    let name1 = prompt("Введіть ім'я:");
    let password = prompt("Введіть пароль:");
    if (name1 == "ivan" && password == "333ssss666gibs0000") {
    alert("Ласкаво просимо");
    } else {
    alert("Корситувач не знайдений");
    }


    let first = prompt("Введіть перше число:");
    let second = prompt("Введіть друге число:");
    let third = prompt("Введіть третє число:");
    
    if (first > second && first > third) {
        alert("Найбільше перше число");
    } else if (second > first && second > third) {
        alert("Найбільше друге число");
    } else if (third > first && third > second) {
        alert("Найбільше третє число");
    } else if (first == second && first == third) {
        alert("Усі числа рівні між собою");
    } else {
        alert("Неможливо вирахувати");
    }
    
    