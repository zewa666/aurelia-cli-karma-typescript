import { StageComponent } from "aurelia-testing";
import { bootstrap } from "aurelia-bootstrapper";

import { App } from '../../src/app';

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });

  it("should smoke test app", async () => {
    const component = StageComponent
      .withResources("app")
      .inView(`
        <app></app>
      `)
      .boundTo({});

    component.bootstrap((aurelia) => {
      aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .eventAggregator();
    });

    

    await component.create(bootstrap);
    expect(document.querySelector("app")).not.toBe(null);

    component.dispose();
  });
});
