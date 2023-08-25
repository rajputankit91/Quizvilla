class HeadingController {
    constructor(model) {
        this.model = model;
    }

    handleEvent(e) {
        e.stopPropagation();
        switch (e.type) {
        case "click":
            this.clickHandler(e.target);
            break;
        default:
            console.log(e.target);
        }
    }

    get modelHeading() {
        return this.model.heading;
    }

    clickHandler(target) {
        this.model.heading = "World";
        target.innerText = this.modelHeading;
    }
}

export { HeadingController };