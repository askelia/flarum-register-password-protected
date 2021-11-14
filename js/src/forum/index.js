import { extend } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';

app.initializers.add('askelia/flarum-register-password-protected', () => {
  console.log('[askelia/flarum-register-password-protected] Hello, forum!');
	extend(SignUpModal.prototype, 'oninit', function () {
    this.key = Stream(this.attrs.key || '');
  });
  
  extend(SignUpModal.prototype, 'fields', function(items){
		items.add('key', 
			<div className="Form-group">
          <input
            className="FormControl"
            name="key"
            type="password"
            placeholder={extractText(app.translator.trans('askelia-register-password-protected.forum.sign_up.key_placeholder'))}
            bidi={this.key}
            disabled={this.loading}
          />
        </div>);
	});

  extend(SignUpModal.prototype, 'submitData', function (data) {
      data['key'] = this.key;
      return data;
  });

});
