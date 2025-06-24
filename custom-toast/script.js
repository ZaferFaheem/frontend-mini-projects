$(document).ready(function () {
    $('#showToast').click(function (e) { 
        const toast = $(`
            <div class="toast">
                <span>Thanks for subscribing! 🎉</span>
                <span class="toast-close">&times;</span>
            </div>
        `);

        $('.toast-container').append(toast);
        setTimeout(() => toast.addClass('show'), 10);
        
        setTimeout(() =>
        {
            toast.removeClass('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);

        toast.find('.toast-close').click(() => {
            toast.removeClass('show');
            setTimeout(() => toast.remove(), 400);
        });

    });
});