import { module, test } from 'qunit';
import { setupRenderingTest } from 'msgs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sent-message-username', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SentMessageUsername />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SentMessageUsername>
        template block text
      </SentMessageUsername>
    `);

    assert.dom().hasText('template block text');
  });
});
