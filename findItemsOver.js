function totalPhoneBill(data) {
    var items = data.split(', ');

    var callCount = 0;
    var smsCount = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            callCount++; 
        } else if (items[i] === 'sms') {
            smsCount++;
        }
    }

    var totalBill = (callCount * 2.75) + (smsCount * 0.65);

    return 'R' + totalBill.toFixed(2);
}