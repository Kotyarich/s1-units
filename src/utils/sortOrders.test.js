import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames, sortOrders, sortTypes} from './sortOrders';
import {fakeOrders} from "../mock/fakeOrders";

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(0);
	});

	it('not items in orders', () => {
		const order1 = {
			name: 'item1',
		};

		const order2 = {
			name: 'item2',
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(0);
	});

	it('first item count smaller', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(-1);
	});

	it('second item count smaller', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(1);
	});

	it('first order is not object', () => {
		const order1 = 'order';

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(0);
	});

	it('second order is not object', () => {
		const order1 = {
			items: ['1', '2', '3'],
		};

		const order2 = 'order';

		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(0);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('no date field in orders', () => {
		const order1 = {
			name: 'name1'
		};

		const order2 = {
			name: 'name2'
		};

    const result = sortByDate(order1, order2);

    expect(result).toEqual(0);
	});

	it('same data', () => {
    const order1 = {
      date: 1552481120000
    };

    const order2 = {
      date: 1552481120000
    };

		const result = sortByDate(order1, order2);

		expect(result).toEqual(0);
	});

	it('first data smaller', () => {
    const order1 = {
      date: 1552481110000
    };

    const order2 = {
      date: 1552481120000
    };

    const result = sortByDate(order1, order2);

    expect(result).toEqual(1);
	});

	it('second data smaller', () => {
    const order1 = {
      date: 1552481120000
    };

    const order2 = {
      date: 1552481020000
    };

    const result = sortByDate(order1, order2);

    expect(result).toEqual(-1);
	});

	it('first order is not object', () => {
		const order1 = 'order';

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByDate(order1, order2);

		expect(result).toEqual(0);
	});

	it('second order is not object', () => {
		const order1 = {
			items: ['1', '2', '3'],
		};

		const order2 = 'order';

		const result = sortByDate(order1, order2);

		expect(result).toEqual(0);
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('no items field in orders', () => {
		const order1 = {
			name: 'name1'
		};

		const order2 = {
			name: 'name2'
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(0);
	});

	it('same items', () => {
		const order1 = {
			items: [1, 2, 3, 4]
		};

		const order2 = {
			items: [1, 2, 3, 4]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(0);
	});

	it('first items are smaller', () => {
		const order1 = {
			items: [0, 1, 2, 3]
		};

		const order2 = {
			items: [1, 2, 3, 4]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(-1);
	});

	it('second items are smaller', () => {
		const order1 = {
			items: [1, 2, 3, 4]
		};

		const order2 = {
			items: [0, 1, 2, 4]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(1);
	});

	it('first order is not object', () => {
		const order1 = 'order';

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(0);
	});

	it('second order is not object', () => {
		const order1 = {
			items: ['1', '2', '3'],
		};

		const order2 = 'order';

		const result = sortByItemNames(order1, order2);

		expect(result).toEqual(0);
	});
});

describe('sortOrders function', () => {
	it('wrong arguments', () => {
		const result = sortOrders(null, undefined);
		expect(result).not.toBeTruthy();
	});

	it('sorting by data', () => {
		const orders = fakeOrders.slice();

		const result = sortOrders(orders, sortTypes.DATE);

		expect(result).toBeTruthy();
	});

	it('sorting by item names', () => {
		const orders = fakeOrders.slice();

		const result = sortOrders(orders, sortTypes.ITEM_NAMES);

		expect(result).toBeTruthy();
	});

	it('sorting by item count', () => {
		const orders = fakeOrders.slice();

		const result = sortOrders(orders, sortTypes.COUNT);

		expect(result).toBeTruthy();
	});
});