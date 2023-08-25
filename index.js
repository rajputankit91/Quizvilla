import { HeadingModel } from "./models";
import { HeadingController } from "./controllers";
import { HeadingView } from "./views";

function main() {
  var model = new HeadingModel();
  var controller = new HeadingController(model);
  var view = new HeadingView(controller);
}

main();