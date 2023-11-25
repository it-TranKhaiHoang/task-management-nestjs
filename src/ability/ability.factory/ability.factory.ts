import { Ability, AbilityBuilder, AbilityClass, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import e from "express";
import { User } from "src/user/schemas/user.schema";

export enum Action {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}

export type Subjects = InferSubjects<typeof User> | "all";

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(Ability as AbilityClass<AppAbility>);
    can(Action.Read, User);
  }
}
