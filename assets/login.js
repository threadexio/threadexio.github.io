var a = "HLkT6aCBMRc+Q1G4okiAGizb5L/TwTXO2f8sXypV04tGGzYrfEmLW4JNjP9kYTOHiquv+LO/shPZ18NJd5THvw==";
function vHsx0mh(fY5FSsb) {
    var FuYTkrX = []
    for (var i = 0; i < fY5FSsb.length; i++) {
        FuYTkrX.push(fY5FSsb.charCodeAt(i));
    }
    return FuYTkrX;
}

var Gcp9W23 = [
    0x29, 0xdc, 0x2b, 0xd1, 0x94, 0xb9, 0x08, 0x2f, 0x5a, 0x22, 0x63, 0x80, 0x92, 0x7c, 0xb7, 0x2b,
    0x19, 0xea, 0x80, 0x8f, 0xb6, 0xf4, 0x03, 0xa8, 0xe1, 0x9b, 0x4f, 0x69, 0x18, 0x6c, 0xe1, 0xbc,
    0x71, 0x28, 0x00, 0x1b, 0x4f, 0x2d, 0xbb, 0x3f, 0xb4, 0x2c, 0xed, 0x9d, 0x06, 0x05, 0x57, 0xb1,
    0xb8, 0xca, 0x9e, 0xc9, 0xd6, 0xd9, 0x85, 0x21, 0xe8, 0xb3, 0xf2, 0x7c, 0x43, 0xa6, 0xa3, 0x87
];

function aaa(pXDOp2Q) {
    tfsnWi0 = atob(pXDOp2Q);
    var gtqO5Au = '';
    Bkyp5sM = vHsx0mh(tfsnWi0);
    for (var i = 0; i < tfsnWi0.length; i++) {
        gtqO5Au += String.fromCharCode(Bkyp5sM[i] ^ Gcp9W23[i]);
    }
    return gtqO5Au;
}

function aao(Y8BCQcj) {
    return (SHA256(Y8BCQcj) === aaa(a));
}

function o() {
    msgbox.hidden = false; msgbox.innerHTML = 'Incorrect username or password!';
}

document.getElementById('login').addEventListener('click', () => {
    const INAKX = document.getElementById('username').value;
    const Xbg6U = document.getElementById('password').value;
    const msgbox = document.getElementById('msgbox');
    (INAKX === "admin" && aao(Xbg6U)) ? finish(INAKX, Xbg6U) : o()
});
