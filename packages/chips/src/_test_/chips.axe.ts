import { OrxeChips } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-chips-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Chips;

  beforeEach(async () => {
    OrxeChips;
    document.body.appendChild(document.createElement('Chips'));
    Chips = document.querySelector('Chips') as OrxeChips;
  });

  afterEach(() => {
    Chips.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Chips);
    expect(result).toHaveNoViolations();
  });
});
