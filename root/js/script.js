var min = new Date(),
    max = new Date(min.getFullYear(), min.getMonth() + 6, min.getDate());
                            
mobiscroll.datepicker('#dates', {
    controls: ['calendar'],
    select: 'range',
    min: min,
    max: max
})