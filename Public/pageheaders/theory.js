// Filename: public/page/theory.js
// import {pageTheory} from 'public/page/theory.js'; 
// call: pageTheory;

export function pageTheory() {
	$w('#headerTitle0').expand();
	$w('#headerTitleP').collapse();
	$w('#headerBoxPMain').collapse();
    $w('#headerBoxShop').collapse();
	$w('#headerBoxTheory').expand();
	$w('#headerBoxProgramming').collapse();
	$w('#headerBoxMain').collapse();
	$w('#headerBoxError').collapse();
}
