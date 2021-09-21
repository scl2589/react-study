MyComponent.propTypes = {
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. 
        It must be 10 <= value <= 20`
      );
    }
  },
};
