const isOrderReady = () => {
    return pizzaDiv.bread && pizzaDiv.fill && pizzaDiv.str && pizzaDiv.shape;
}
const isBreadSelected = () => {
    return pizzaDiv.bread;
}
const isFillSelected = () => {
    return pizzaDiv.fill;
}
const isStrSelected = () => {
    return pizzaDiv.str;
}
const isShapeSelected = () => {
    return pizzaDiv.shape;
}

const setBread = (value) => {
    pizzaDiv.bread = value;
    updateView();
};
const setFill = (value) => {
    pizzaDiv.fill = value;
    updateView();
};
const setStr = (value) => {
    pizzaDiv.str = value;
    updateView();
};
const setShape = (value) => {
    pizzaDiv.shape = value;
    updateView();
};