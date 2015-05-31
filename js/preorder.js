$(function() {
    var YANDEX_PREORDER_IFRAME_TEMPLATE = '<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/embed/shop.xml?account=41001486135704&quickpay=shop&payment-type-choice=on&writer=seller&targets=Предоплата за {title}&targets-hint=&default-sum={price}&button-text=01&comment=on&hint=&fio=on&mail=on&phone=on&successURL=" width="450" height="253"></iframe>';

    function buildPreorderIframeForButton(button) {
        var price = button.attr('data-price');
        var title = button.siblings('.preorder-title').text().toLowerCase();
        $('.yandex-payment-iframe-target').html(
            $(YANDEX_PREORDER_IFRAME_TEMPLATE.replace('{title}', title).replace('{price}', price))
        );
    }

    $('.goto-preorder').click(function(event) {
        var button = $(event.target);
        buildPreorderIframeForButton(button);
    });

    buildPreorderIframeForButton($('.goto-preorder:last'));
});
