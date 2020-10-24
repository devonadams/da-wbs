// Filename: public/page/shop.js 
// import {pageShop} from 'public/page/shop.js'; 
// call: pageStandard;

export function pageShop() {
	$w('#headerTitle0').expand();
	$w('#headerTitleP').collapse();
	$w('#headerBoxPMain').collapse();
    $w('#headerBoxShop').expand();
	$w('#headerBoxTheory').collapse();
	$w('#headerBoxProgramming').collapse();
	$w('#headerBoxMain').collapse();
	$w('#headerBoxError').collapse();
}
