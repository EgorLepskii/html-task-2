/**
 * Получаем элемент input с текущим значением количества
 *
 * @type {*|jQuery|HTMLElement}
 */
const countInput = $('.description__product-count-block .description__product-count');

/**
 * Получаем кнопку уменьшения количества товаров
 *
 * @type {*|jQuery|HTMLElement}
 */
let decreaseDescriptionButton = $('.description__decrease');

/**
 * Получаем кнопку увеличения количества товаров
 *
 * @type {*|jQuery|HTMLElement}
 */
let increaseDescriptionButton = $('.description__increase');

/**
 * Максимальное количество товара
 *
 * @type {number}
 */
const maxProductsCount = 10;

/**
 * Минимальное количество товара
 *
 * @type {number}
 */
const minProductsCount = 0;

/**
 * Добавляем событие для кнопки уменьшения количества
 */
$('.description__product-count-block .description__decrease').click((e) => {

    /**
     * Получаем текущее количество товаров
     */
    let currentCount = countInput.attr('value');


    /**
     * Если текущее число товаров больше минимального допустимого, уменьшаем количество товара в форме
     */
    if (currentCount > minProductsCount) {
        countInput.attr('value', currentCount - 1);
        currentCount--;
    }

    /**
     * Если текущее количество товара достигло минимума, меняем значение цвета текста в кнопке уменьшения
     */
    if (currentCount == minProductsCount) {
        decreaseDescriptionButton.css('color', '#cacaca');
    }


    /**
     * Если цвет текста в кнопке увеличения был изменен из-за достижения количеством товара
     * максимального значения, изменим цвет на первоначальный
     */
    increaseDescriptionButton.css('color', 'black');


});

$('.description__product-count-block .description__increase').click((e) => {

    /**
     * Получаем текущее количество товаров
     */
    let currentCount = countInput.attr('value');

    /**
     * Если текущее число товаров меньше максимального допустимого, увеличиваем количество товара в форме
     */
    if (currentCount < maxProductsCount) {
        countInput.attr('value', +currentCount + 1);
        currentCount++;
    }

    /**
     * Если текущее количество товара достигло максимума, меняем значение цвета текста в кнопке увеличения
     */
    if (currentCount == maxProductsCount) {
        increaseDescriptionButton.css('color', '#cacaca');
    }

    /**
     * Если цвет текста в кнопке уменьшения был изменен из-за достижения количеством товара
     * минимального значения, изменим цвет на первоначальный
     */
    decreaseDescriptionButton.css('color', 'black');
});