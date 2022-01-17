
$(document).ready(function () {
    $('.same-height').each(function () {
        $(this).css("height", $(this).width());
    });
});


function generateImageUrl(hash = '', extension = '', kind = 'image') {

    const date = new Date(Number(hash));

    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();

    return `/storage/${kind}/${year}/${month}/${day}/${hash}.${extension}`;
}


function generateUrlFromName(value) {
    if (value) {
        let v = value + '';
        v = v.replace(/[^a-zA-Z0-9 ]/g, '');
        v = v.replace(new RegExp(' ', 'g'), '-');
    }
    return '';
}