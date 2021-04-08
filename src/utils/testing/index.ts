import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

function customRender(ui: any, {
  ...renderOptions
} = {}) {

  return render(ui, { ...renderOptions });
}

export * from '@testing-library/react';
export { customRender as render };
