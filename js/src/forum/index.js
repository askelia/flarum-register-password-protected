import {SignUpModal} from 'flarum/forum/components/HeaderPrimary.js'; //SignUpModal.js';
import { extend } from 'flarum/common/extend';


app.initializers.add('askelia/flarum-register-password-protected', () => {
  console.log('[askelia/flarum-register-password-protected] Hello, forum!');
});


	extend(SignUpModal.prototype, 'items', function(items){
		items.add('key', <div>Key<input type="password"/></div>);
	});

