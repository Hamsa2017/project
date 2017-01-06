app.directive('myTimepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
			var data = element.wickedpicker;
            element.wickedpicker({
           // now: today.getHours() + ':' + today.getMinutes(),
            twentyFour: false,
            upArrow: 'wickedpicker__controls__control-up',
            downArrow: 'wickedpicker__controls__control-down',
            close: 'wickedpicker__close',
            hoverState: 'hover-state',
            title: 'Timepicker',
            showSeconds: false,
            secondsInterval: 1,
            minutesInterval: 1,
            beforeShow: null,
            show: null,
            clearable: true,
                onSelect:function (timeText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });
    }
});