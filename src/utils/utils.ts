export const createUUID = () =>
    substr((Math.random() * 10000000).toString(16), 0, 4) +
    '-' +
    new Date().getTime() +
    '-' +
    substr(Math.random().toString(), 2, 5);

export const trunc = <T extends number>(x: T) =>
    Math.trunc(x) ||
    (function (x) {
        let n = +x;
        return (n > 0 ? Math.floor : Math.ceil)(x);
    })(x);

export const isString = <T>(v: T) => typeof v === 'string';
export const toIntOrInf = <T>(x: T) => {
    let n = +x;
    return n !== n || n === 0 ? 0 : trunc(n);
};
export const substr = (str: string, s: number, l: number) => {
    if (!isString(str)) {
        str = String(str);
    }
    const size = str.length;
    let intStart = toIntOrInf(s);
    let intLength, intEnd;
    if (intStart === Infinity) intStart = 0;
    if (intStart < 0) intStart = Math.max(size + intStart, 0);
    intLength = l === undefined ? size : toIntOrInf(l);
    if (intLength <= 0 || intLength === Infinity) return '';
    intEnd = Math.min(intStart + intLength, size);
    return intStart >= intEnd
        ? ''
        : String.prototype.slice.call(str, intStart, intEnd);
};
