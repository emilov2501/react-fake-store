import { injectStores } from "@mobx-devtools/tools";

import { createContainer, asClass, InjectionMode } from "awilix";

import { ServiceBuilder } from "ts-retrofit";

export const DI = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

DI.register({
  // Adapters
  serviceBuilder: asClass<ServiceBuilder>(ServiceBuilder).singleton(),
});

injectStores({});
