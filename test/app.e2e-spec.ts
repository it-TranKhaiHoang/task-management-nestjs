import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { describe } from "node:test";
import { AppModule } from "src/app.module";

describe("App EndToEnd tests", () => {
  let app: INestApplication;
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });
  it.todo("Should PASS");
});

describe("Test Authentication", () => {
  describe("Register", () => {
    it("should Register", () => {
      return null;
    });
  });
});
