const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const itmoBornDate = new Date(ITMO_BORN_DAY, ITMO_BORN_MONTH, ITMO_BORN_YEAR);

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990