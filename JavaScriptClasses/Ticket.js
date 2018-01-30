let processTickets = (function processTickets (input, orderBy) {
    class Ticket {

        constructor (destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return function(input, orderBy) {
        let tickets = [];

        for (let i = 0; i < input.length; i++) {
            [destination, price, status] = input[i].split('|');
            tickets.push(new Ticket(destination, price, status));
        }

        tickets.sort(function (a, b) {
            switch (orderBy) {
                case 'destination':
                    if (a.destination < b.destination) {
                        return -1;
                    } else if (a.destination > b.destination) {
                        return 1;
                    } else {
                        return 0;
                    }
                    break;
                case 'price':
                    return a.price - b.price;
                    break;
                case 'status':
                    if (a.status < b.status) {
                        return -1;
                    } else if (a.status > b.status) {
                        return 1;
                    } else {
                        return 0;
                    }
                    break;
                default:
                    throw new Error('Invalid order by parameter');
            }
        });

        return tickets;
    }
})();

let input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

console.log(processTickets(input, 'destination'));

input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

console.log(processTickets(input, 'status'));