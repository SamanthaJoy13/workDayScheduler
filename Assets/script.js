//date display on header
const header = $('<header>');
const currentDate = dayjs().format('dddd MMMM DD, YYYY');
header.text(currentDate);
$('header').append(header);

//timeblocks and save buttons
const saveBtn = $('.saveBtn');
$(saveBtn).on('click', function() {
    const timeBlock = $(this).parent().attr('id');
    const textArea = $(this).siblings('.description').val();
    localStorage.setItem(timeBlock, textArea);
});

//timeblock color change
function timeTracker() {
    const currentHour = dayjs().hour();
    $('.time-block').each(function() {
        const blockHour = parseInt($(this).attr('id').split('-')[1]);
        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
};

timeTracker();

//local storage
const hour9 = $('#hour-9 .description');
const hour10 = $('#hour-10 .description');
const hour11 = $('#hour-11 .description');
const hour12 = $('#hour-12 .description');
const hour13 = $('#hour-13 .description');
const hour14 = $('#hour-14 .description');
const hour15 = $('#hour-15 .description');
const hour16 = $('#hour-16 .description');
const hour17 = $('#hour-17 .description');

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));