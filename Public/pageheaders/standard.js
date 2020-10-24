// Filename: public/page/standard.js
// import {pageStandard} from 'public/page/standard.js'; 
// call: pageStandard;

export function pageStandard() {
	$w('#headerTitle0').expand();
	$w('#headerTitleP').collapse();
	$w('#headerBoxPMain').collapse();
    $w('#headerBoxShop').collapse();
	$w('#headerBoxTheory').collapse();
	$w('#headerBoxProgramming').collapse();
	$w('#headerBoxMain').expand();
	$w('#headerBoxError').collapse();
}
