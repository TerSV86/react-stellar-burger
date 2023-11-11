export const setCookie = (name, value, props) => {
    console.log('name :', name, 'value :', value, 'props :', props);
    props = props || {};
    console.log(props);
    let exp = props.expires;
    console.log(exp);
    console.log(typeof exp === 'number');
    if (typeof exp === 'number' && exp) {
        const d = new Date();
        console.log(d.getTime(), exp * 1000);
        d.setTime(d.getTime() + exp * 1000);
        console.log(d);
        exp = props.expires = d
        console.log(exp);
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString()
        console.log(props.expires);
    }
    value = encodeURIComponent(value);

    let updatedCookie = name + '=' + value;
    console.log(props);
    for (const propName in props) {
        console.log(propName);

        updatedCookie += '; ' + propName;

        const propValue = props[propName];
        console.log(propValue);
        if (propValue !== true) {
            updatedCookie += '=' + propValue
            console.log(updatedCookie += '=' + propValue);
        }
    }
    console.log(updatedCookie);
    document.cookie = updatedCookie;
}

export function getCookie(name) {
    console.log('getCookie');
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
} 