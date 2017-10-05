const Primitives = {
  Styled: null,
  styled: null,
  View: null,
  Text: null,
  TextInput: null,
  Image: null,
  Touchable: null,
  Easing: null,
  Animated: null,
  Dimensions: null,
  Platform: null,
  inject: api => {
    if (api.Styled) {
      Primitives.Styled = api.Styled
      Primitives.styled = api.Styled
    }
    if (api.View) {
      Primitives.View = api.View
    }
    if (api.Text) {
      Primitives.Text = api.Text
    }
    if (api.TextInput) {
      Primitives.TextInput = api.TextInput
    }
    if (api.Image) {
      Primitives.Image = api.Image
    }
    if (api.Touchable) {
      Primitives.Touchable = api.Touchable
    }
    if (api.Easing) {
      Primitives.Easing = api.Easing
    }
    if (api.Animated) {
      Primitives.Animated = api.Animated
    }
    if (api.Dimensions) {
      Primitives.Dimensions = api.Dimensions
    }
    if (api.Platform) {
      Primitives.Platform = api.Platform
    }
  }
}

module.exports = Primitives
