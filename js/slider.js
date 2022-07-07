/**
 * Получаем все изображения из списка изображений для выбора
 * @type {NodeListOf<Element>}
 */
let images = document.querySelectorAll('.slider__img');

/**
 * Получим блок с главным изображением
 *
 * @type {Element}
 */
let mainImage = document.querySelector('.slider__main-image .slider__img');

/**
 *  Добавляем каждому изображению событие
 */
images.forEach((elem) => {
    elem.addEventListener('mousemove', (current) => {

        /**
         * Меняем ссылку главного изображения на ссылку изображения события
         */
        mainImage.src = current.target.src;

    })
});