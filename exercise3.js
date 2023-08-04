function paintingNumbers(arr) {
    let paintingCollectionArr = arr.shift().split(' ');
    let index = 0;
    let comand = arr[index]
    while (comand !== 'END') {
        let curentComand = comand.split(' ')[0];
        switch (curentComand) {
            case 'Change':
                let paintingNumber = comand.split(' ')[1];
                let newNumber = comand.split(' ')[2];
                if (paintingCollectionArr.includes(paintingNumber)) {
                    let indexOfPaintingNumber = paintingCollectionArr.indexOf(paintingNumber);
                    paintingCollectionArr[indexOfPaintingNumber] = newNumber;
                }
                break;
            case 'Hide':
                let paintingNumberToHide = comand.split(' ')[1];
                if (paintingCollectionArr.includes(paintingNumberToHide)) {
                    let indexOfPaintingNumberToHide = paintingCollectionArr.indexOf(paintingNumberToHide);
                    paintingCollectionArr.splice(indexOfPaintingNumberToHide, 1);
                }
                break;
            case 'Switch':
                let paintingNumberToSwitch1 = comand.split(' ')[1];
                let paintingNumberToSwitch2 = comand.split(' ')[2];
                if (paintingCollectionArr.includes(paintingNumberToSwitch1) && paintingCollectionArr.includes(paintingNumberToSwitch2)) {
                    let indexOfPaintingNumberToSwitch1 = paintingCollectionArr.indexOf(paintingNumberToSwitch1);
                    let indexOfPaintingNumberToSwitch2 = paintingCollectionArr.indexOf(paintingNumberToSwitch2);
                    paintingCollectionArr.splice(indexOfPaintingNumberToSwitch1, 1, paintingNumberToSwitch2);
                    paintingCollectionArr.splice(indexOfPaintingNumberToSwitch2, 1, paintingNumberToSwitch1);
                }
                break;
            case 'Insert':
                let indexToInsert = +comand.split(' ')[1];
                let paintingNumberToInsert = comand.split(' ')[2];
                if (indexToInsert >= 0 && indexToInsert + 1 < paintingCollectionArr.length) {
                    paintingCollectionArr.splice(indexToInsert + 1, 0, paintingNumberToInsert);
                }
                break;
            case 'Reverse':
                paintingCollectionArr.reverse();
                break;
        }
        index++;
        comand = arr[index];
    }
    console.log(paintingCollectionArr.join(' '));
}
paintingNumbers(["115 101 114 73 111 116 75",
    "Insert 5 114",
    "Switch 116 73",
    "Hide 76",
    "END"])


    ;