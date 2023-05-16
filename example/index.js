const { createDoCanvas } = XCanvas

function initCanvas() {
  const canvas = document.querySelector('#canvas')
  canvas.style.display = 'block'

  const _ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio
  const _w = window.innerWidth
  const _h = window.innerHeight / 2
  canvas.width = _w * dpr
  canvas.height = _h * dpr

  console.log(_ctx, dpr, _w, _h)

  _ctx.scale(dpr, dpr)

  const DoCanvas = createDoCanvas({
    canvas,
    ctx: _ctx,
    dpr,
    width: _w,
    height: _h,
    backgroundColor: '#fff',
    debug: false
  })

  const elm = DoCanvas.createElement('view')
  const childElm1 = DoCanvas.createElement('view', {
    style: {
      color: 'red',
      textAlign: 'center',
      backgroundColor: '#00aeec45',
      width: 100,
      height: 100,
      marginTop: 40
    }
  })
  const childElm2 = DoCanvas.createElement('view', {
    style: {
      backgroundColor: '#00aeec45',
      width: 50,
      height: 120
    }
  })
  const textElm = DoCanvas.createElement('text', {}, 'hello')

  childElm1.appendChild(textElm)
  elm.appendChild(childElm1)
  elm.appendChild(childElm2)
  DoCanvas.body.appendChild(elm)

  console.log(elm.node.instance, elm)
  console.log(childElm1.container === elm)
}

function initHTMLELement() {
  const canvas = document.querySelector('#canvas')
  const elm = document.createElement('div')
  const childElm = document.createElement('div')
  const textElm = document.createElement('p')
  const text = document.createTextNode('hello')

  elm.style = `height: ${
    window.innerHeight / 2
  }px; border-bottom: 1px solid #000;box-sizing: border-box`
  childElm.style =
    'color: red; rext-align: center; background-color: #00aeec45; width: 100px; height: 100px; margin-top: 40px;'

  document.body.insertBefore(elm, canvas)
  textElm.appendChild(text)
  childElm.appendChild(textElm)
  elm.appendChild(childElm)
}

initCanvas()
initHTMLELement()