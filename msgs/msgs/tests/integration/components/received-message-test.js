import { module, test } from 'qunit';
import { setupRenderingTest } from 'msgs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | received-message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ReceivedMessage />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ReceivedMessage>
        template block text
      </ReceivedMessage>
    `);

    assert.dom().hasText('template block text');
  });
});
