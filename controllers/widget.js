var args = arguments[0] || {};

var value = false;

function updateDisplay() {
	
	$.image.value = value;

	if (value) {
	    $.image.image = args.onImage || '/Toggle/checkbox-on.png';
	}
	else {
	    $.image.image = args.offImage || '/Toggle/checkbox-off.png';
	}
}
 
function setValue(val) {
	value = val;
	updateDisplay();
}


function getValue() {
	return value;
}


function clickImage(e) {
    setValue(!value);
    sendChangeEvent();
}


function sendChangeEvent() {
	$.image.fireEvent('change', { value: value });
}


// init from text attribute value
setValue(args.value);

exports.setValue = setValue;
exports.getValue = getValue;

