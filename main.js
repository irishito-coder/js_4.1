function calculateAge(name, birthYear, currentYear) {
    let age = currentYear - birthYear;
    return `${name}, Ваш возраст ${age}`;
}

// Запрашиваем у пользователя имя, год рождения и текущий год
let name = prompt("Введите ваше имя:");
let birthYear = parseInt(prompt("Введите ваш год рождения:"));
let currentYear = parseInt(prompt("Введите нынешний год:"));

// Вызываем функцию и выводим результат
let result = calculateAge(name, birthYear, currentYear);
alert(result);
