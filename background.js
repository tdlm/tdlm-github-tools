jQuery(document).ready(function($) {

    var init_button_group = function() {
        if (!$('#toc .tdlm-group').length && $('#toc .btn-group').length) {

            var btn_group = $('<div />').addClass('btn-group right tdlm-group'),
                a_hide_all = $('<a />').addClass('btn btn-sm').text('Minimize All').attr('id', 'hide_all'),
                a_show_all = $('<a />').addClass('btn btn-sm').text('Maximize All').attr('id', 'show_all');

            btn_group
                .append(a_hide_all)
                .append(a_show_all)
                .insertAfter('#toc .btn-group');
        }
    };

    $(document).on('click', '.file-header', function(e) {
        $(this).parent().find('div.data').toggleClass('hidden');
    });

    $(document).on('click', '#hide_all', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('div.data').addClass('hidden');
    });

    $(document).on('click', '#show_all', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('div.data').removeClass('hidden');
    });

    $(document).on('click', function(e) {
        setTimeout(init_button_group, 1);
    });

    init_button_group();
});