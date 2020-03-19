<template>
  <styled-button @click="e => $emit('click', e)" :_color="color">
    <styled-label :_textColor="textColor">
      <slot/>
    </styled-label>
  </styled-button>
</template>

<script>
import styled from 'vue-styled-components'
import chroma from 'chroma-js'

const StyledProps = {
  _color: String,
  _textColor: String
}

const StyledLabel = styled('span', StyledProps)`
  font-size: .875rem;
  letter-spacing: .0892857143em;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  color: ${props => props._textColor}
`
const StyledButton = styled('button', StyledProps)`
  border: none;
  cursor: pointer;
  height: 36px;
  min-width: 64px;
  border-radius: 4px;
  background-color: ${props => props._color};
  padding: 0 16px 0 16px;
  :focus {
    outline:0;
  }
  :hover {
    background-color: ${props => chroma(props._color).brighter(0.5).css()};
  }
  :active {
    background-color: ${props => chroma(props._color).darken(0.5).css()};
  }
`

export default {
  name: 'Button',
  props: {
    /** Sets the button font color */
    color: String,
    /** Sets the button text color */
    textColor: String
  },
  components: {
    'styled-button': StyledButton,
    'styled-label': StyledLabel
  }
}
</script>

<docs>
### Instalação
```sh
npm i @bit/nightmare4en.vue-components.button
```

### Exemplos
*Básico*
```jsx
  <Button color="orange" textColor="white">Button</Button>
```
</docs>
