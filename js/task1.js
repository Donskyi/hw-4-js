// <!-- Завдання 2. Напиши функцію slugify(string) яка отримує рядок та повертає
// URL-slug Рядок складається лише з букв та пробілів

// Для перевірки використовуйте

function slugify(string) {
    const lowercased = string.toLowerCase();
    let urlSlug = '';

    for (let i = 0; i < lowercased.length; i++) {
        const dash = lowercased[i];
        if (dash === ' ') {
            urlSlug += '-';
        } else {
            urlSlug += dash;
        }
    }

    return urlSlug.replace('10', '');
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
