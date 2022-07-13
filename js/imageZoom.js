{
    /**
     * Получаем главное изображение
     *
     * @type {*|jQuery|HTMLElement}
     */
    let mainImage = $('.slider .slider__main-image img');

    /**
     * Сохраняем значение ширины изображения по умолчанию
     */
    let defaultImageWidth = mainImage.width();

    /**
     * Сохраняем значение высоты изображения по умолчанию
     */
    let defaultImageHeight = mainImage.height();

    /**
     * При наведении на изображение увеличиваем его ширину и высоту
     */
    mainImage.mousemove((e) => {
        mainImage.width(defaultImageWidth + 200);
        mainImage.height(defaultImageHeight + 200);
    });

    /**
     * При выводе курсора с изображения возвращаем значение ширины и высоты к исходным значениям
     */
    mainImage.mouseout((e) => {
        mainImage.width(defaultImageWidth);
        mainImage.height(defaultImageHeight);
    });

}