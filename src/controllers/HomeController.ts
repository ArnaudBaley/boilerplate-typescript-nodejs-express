import { Get, JsonController } from "routing-controllers";

@JsonController()
export class HomeController {
  @Get("/")
  getHome() {
    return "This is home";
  }
}

export default HomeController;