import { extend } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal.js';

/*
app.initializers.add('askelia/flarum-register-password-protected', () => {
  console.log('[askelia/flarum-register-password-protected] Hello, forum!');
});
*/

	extend(SignUpModal.prototype, 'items', function(items){
		items.add('key', <div>Key<input type="password"/></div>);
	});

