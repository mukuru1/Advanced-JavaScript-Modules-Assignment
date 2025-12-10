export const capitalize = (s = '') => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '');
export const truncate = (s = '', len = 20) => (s.length > len ? s.slice(0, len) + '…' : s);