import { module, test } from 'qunit';
import { setupRenderingTest } from 'msgs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | received-message-avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ReceivedMessageAvatar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ReceivedMessageAvatar>
        template block text
      </ReceivedMessageAvatar>
    `);

    assert.dom().hasText('template block text');
  });
});
