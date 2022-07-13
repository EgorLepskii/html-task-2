{
    const maxProductsCount = 10;
    const minProductsCount = 1;

    /**
     * Получим кнопку для покупки
     *
     * @type {*|jQuery|HTMLElement}
     */
    let buyButton = $('.description__button-basket');

    /**
     * Получаем элемент input с текущим значением количества
     *
     * @type {*|jQuery|HTMLElement}
     */
    const countInput = $('.description__product-count-block .description__product-count');

    /**
     * Создадим событие для кнопки покупки
     */
    buyButton.click((e) => {
        let currentCount = +countInput.attr('value');

        if (Number.isInteger(currentCount) && currentCount >= minProductsCount && currentCount <= maxProductsCount)
            $.notify(`В корзину добавлено ${currentCount} товаров`, "success");

    });

}