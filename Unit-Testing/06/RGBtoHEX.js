function RBGtoHEX(...rbg) {
    if(rbg.some(c => typeof c != 'number' || c < 0 || c > 255)) {
        return undefined;
    }
    
    return '#' + rbg.map(decToHex).join('').toUpperCase();

    function decToHex(n) {
        return ('00' + n.toString(16)).slice(-2);
    }
}

module.exorts = RBGtoHEX;