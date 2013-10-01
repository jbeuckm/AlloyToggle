var args = arguments[0] || {};

var value = false;


var onImage = args.onImage || '/Toggle/checkbox-on.png';
var offImage = args.offImage || '/Toggle/checkbox-off.png';
function setImages(on, off) {
	onImage = on;
	offImage = off;
	updateDisplay();
}


function updateDisplay() {
	
	$.image.value = value;

	if (value) {
	    $.image.image = onImage;
	}
	else {
	    $.image.image = offImage;
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
	$.view.fireEvent('change', { value: value });
}


// init from text attribute value
setValue(args.value);

exports.setImages = setImages;
exports.setValue = setValue;
exports.getValue = getValue;

