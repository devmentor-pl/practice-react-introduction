import React, { useLayoutEffect } from 'react';
import MenuItem from './MenuItem';
// const arr = [<li>item1</li>, <li>item2</li>];
// const jsx = <ul>{arr}</ul>;
const Menu = props => {
	// zbieram elementy MenuItem z wlasciwoscami przechwyconymi z argumentu(props)(obiekt items z komponentu Nav) pozniej tworze tablice na podstawie tych wlascwiosci, ale wlasciwosci wrzucam do "argumentu?" MenuItem i przechowuje cala tablice gotwoych MenuItemó'w z odpowiednimi wlasciwoscami podanymi w Nav pod zmienna jsx, ktora pozniej umieszczam w ul liscie,

	// zmienia to tyle ze zamist tworzyc kolejno MenuList z wlasciwoscia text i url (W TYM PLIKU), to zarzadzam elementami nawigacji wewnatrz obiektu w komponencie Nav - moze wydawac sie to czytelniejsze
	const jsx = props.items.map(item => {
		return <MenuItem text={item.text} url={item.url} />;
	});
	return <ul>{jsx}</ul>;
};

export default Menu;
