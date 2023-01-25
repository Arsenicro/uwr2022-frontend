import { css } from '@emotion/css'

export function box3() {
  console.log`Hello`;
  
  return `<div class="box ${css`background-color: yellow`}"></div>`
}