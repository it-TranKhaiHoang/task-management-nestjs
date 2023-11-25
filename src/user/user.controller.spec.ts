import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
// import { Role } from "./schemas/user.schema";
import { JwtGuard } from "../auth/guard/jwt.guard";

describe("UserController", () => {
  let controller: UserController;

  const mockUserService = {
    update: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: JwtGuard,
          useExisting: JwtGuard,
        },
        JwtGuard,
      ],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  // it("should update a user", () => {
  //   const dto = {
  //     fullname: "Tran Khai Hoang 2",
  //     email: "info.trankhaihoang.com",
  //     password: "$2b$10$l3Q4R5YBGnPWT5ljU7LafuqgXrHzvU1Rq66z0dpHCaFF1Q/7kg/6e",
  //     status: "active",
  //     position: "chairman",
  //     role: Role.ADMIN,
  //     createdAt: "2023-11-18T12:19:43.005Z",
  //     updatedAt: "2023-11-18T12:19:43.005Z",
  //     __v: 0,
  //   };

  //   expect(controller.updateUserById("6558abdf3f50c971421a2d6f", dto)).toEqual({
  //     _id: "6558abdf3f50c971421a2d6f",
  //     fullname: "Tran Khai Hoang 2",
  //     email: "info.trankhaihoang.com",
  //     password: "$2b$10$l3Q4R5YBGnPWT5ljU7LafuqgXrHzvU1Rq66z0dpHCaFF1Q/7kg/6e",
  //     status: "active",
  //     position: "chairman",
  //     role: "Admin",
  //     createdAt: "2023-11-18T12:19:43.005Z",
  //     updatedAt: "2023-11-18T12:19:43.005Z",
  //     __v: 0,
  //   });

  //   expect(mockUserService.update).toHaveBeenCalled();
  // });
});
