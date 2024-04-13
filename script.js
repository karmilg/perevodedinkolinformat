function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result;

    // Conversion logic
    switch(fromUnit) {
        case 'бит':
            switch(toUnit) {
                case 'байт':
                    result = inputValue / 8;
                    break;
                case 'килобайт':
                    result = inputValue / 8 / 1024;
                    break;
                case 'мегабайт':
                    result = inputValue / 8 / 1024 / 1024;
                    break;
                case 'гигабайт':
                    result = inputValue / 8 / 1024 / 1024 / 1024;
                    break;
                case 'терабайт':
                    result = inputValue / 8 / 1024 / 1024 / 1024 / 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 8 / 1024 / 1024 / 1024 / 1024 / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'байт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8;
                    break;
                case 'килобайт':
                    result = inputValue / 1024;
                    break;
                case 'мегабайт':
                    result = inputValue / 1024 / 1024;
                    break;
                case 'гигабайт':
                    result = inputValue / 1024 / 1024 / 1024;
                    break;
                case 'терабайт':
                    result = inputValue / 1024 / 1024 / 1024 / 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 1024 / 1024 / 1024 / 1024 / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'килобайт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8 * 1024;
                    break;
                case 'байт':
                    result = inputValue * 1024;
                    break;
                case 'мегабайт':
                    result = inputValue / 1024;
                    break;
                case 'гигабайт':
                    result = inputValue / 1024 / 1024;
                    break;
                case 'терабайт':
                    result = inputValue / 1024 / 1024 / 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 1024 / 1024 / 1024 / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'мегабайт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8 * 1024 * 1024;
                    break;
                case 'байт':
                    result = inputValue * 1024 * 1024;
                    break;
                case 'килобайт':
                    result = inputValue * 1024;
                    break;
                case 'гигабайт':
                    result = inputValue / 1024;
                    break;
                case 'терабайт':
                    result = inputValue / 1024 / 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 1024 / 1024 / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'гигабайт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8 * 1024 * 1024 * 1024;
                    break;
                case 'байт':
                    result = inputValue * 1024 * 1024 * 1024;
                    break;
                case 'килобайт':
                    result = inputValue * 1024 * 1024;
                    break;
                case 'мегабайт':
                    result = inputValue * 1024;
                    break;
                case 'терабайт':
                    result = inputValue / 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 1024 / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'терабайт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8 * 1024 * 1024 * 1024 * 1024;
                    break;
                case 'байт':
                    result = inputValue * 1024 * 1024 * 1024 * 1024;
                    break;
                case 'килобайт':
                    result = inputValue * 1024 * 1024 * 1024;
                    break;
                case 'мегабайт':
                    result = inputValue * 1024 * 1024;
                    break;
                case 'гигабайт':
                    result = inputValue * 1024;
                    break;
                case 'петабайт':
                    result = inputValue / 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        case 'петабайт':
            switch(toUnit) {
                case 'бит':
                    result = inputValue * 8 * 1024 * 1024 * 1024 * 1024 * 1024;
                    break;
                case 'байт':
                    result = inputValue * 1024 * 1024 * 1024 * 1024 * 1024;
                    break;
                case 'килобайт':
                    result = inputValue * 1024 * 1024 * 1024 * 1024;
                    break;
                case 'мегабайт':
                    result = inputValue * 1024 * 1024 * 1024;
                    break;
                case 'гигабайт':
                    result = inputValue * 1024 * 1024;
                    break;
                case 'терабайт':
                    result = inputValue * 1024;
                    break;
                default:
                    result = inputValue;
            }
            break;
        default:
            result = inputValue;
    }

    document.getElementById('result').innerText = result.toFixed(2) + ' ' + toUnit;
}
