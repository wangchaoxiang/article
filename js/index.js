$(document).ready(function () {
    initLabels();
    initBackToTop();
    init();
});

function initLabels() {
    $('a.cat-label').click(function () {
        var category = $(this).attr('category'); //get category's name
        $('.sidebar-list-item[category]').not('[category*=\"' + category + '\"]').find('input')
            .prop('checked', false).trigger("change");
        $('.sidebar-list-item[category*=\"' + category + '\"] > input')
            .prop('checked', true).trigger("change");
    });
    $('a.tag-label').click(function () {
        var tag = $(this).attr('tag');
        $('.sidebar-list-item[tag]').not('[tag*=\"' + tag + '\"]').find('input')
            .prop('checked', false).trigger("change");
        $('.sidebar-list-item[tag*=\"' + tag + '\"] > input')
            .prop('checked', true).trigger("change");
    });
}

function initBackToTop() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    $("#top").click(function () {
        window.scrollTo(0, 0);
    });
}

function init() {
    $('[data-toggle="tooltip"]').tooltip();
    $("h2, h3, h4, h5, h6").each(function (i, el) {
        var $el, icon, id;
        $el = $(el);
        id = $el.attr('id');
        icon = '<i class="fa fa-link"></i>';
        if (id) {
            return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
        }
    });
}