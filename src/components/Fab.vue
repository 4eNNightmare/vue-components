<template>
  <styled-fab @click="e => $emit('click', e)" :_color="color">
    <styled-icon :_textColor="textColor">add</styled-icon>
  </styled-fab>
</template>

<script>
import styled from 'vue-styled-components'
import chroma from 'chroma-js'

const StyledProps = {
  _color: String,
  _textColor: String
}

const StyledIcon = styled('i', StyledProps)`
  font-size: 24px;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  color: ${props => props._textColor};
`

const StyledFab = styled('button', StyledProps)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 15px;
  border: none;
  cursor: pointer;
  height: 56px;
  width: 56px;
  border-radius: 50%;
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
  name: 'Fab',
  props: {
    /** Sets the button font color */
    color: String,
    /** Sets the button text color */
    textColor: String
  },
  components: {
    'styled-fab': StyledFab,
    'styled-icon': StyledIcon
  }
}
</script>

<style>
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}
</style>

<docs>
### Instalação
```sh
npm i @bit/nightmare4en.vue-components.button
```

### Exemplos
*Básico*
```jsx
  const containerStyle = {position: 'relative', height: '100px'}

  <div v-bind:style="containerStyle">
    <Fab color="orange" textColor="white"/>
  </div>
```
</docs>
