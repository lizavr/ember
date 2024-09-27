import { module, test } from 'qunit';
import { setupRenderingTest } from 'beaver/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs` <Rental::Image
      src="/assets/imgs/teaching-tomster.png"
      alt="Teaching Tomster"
    />
  `);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/imgs/teaching-tomster.png')
      .hasAttribute('alt', 'Teaching Tomster');
  });
});
