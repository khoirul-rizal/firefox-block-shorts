const toggleBtn = document.getElementById('btn_disable')
const pswdLabel = document.getElementById('pswd_label')
const pswdInput = document.getElementById('pswd_input')

const changeState = (isEnable) => {
  toggleBtn.textContent = isEnable ? 'Disable Block' : 'Enable Block'
  if (isEnable) {
    pswdLabel.style.display = 'unset'
    pswdInput.style.display = 'unset'
  } else {
    pswdLabel.style.display = 'none'
    pswdInput.style.display = 'none'
  }
}


browser.runtime.sendMessage({action: 'status'}).then(resp => {
  console.log('!dev! init', resp)
  const isEnable = resp.isEnable
  changeState(isEnable)
})


document.getElementById('btn_disable').addEventListener('click', async() => {
  const status = (await browser.runtime.sendMessage({action: 'status'})).isEnable
  if (status) {
    if (pswdInput.value === 'I WANT MY BRAIN TO BE BRAIN ROTTED') {
      const resp = await browser.runtime.sendMessage({action: 'toggleBlock'})
      changeState(resp.isEnable)
    } else {
      // console.log('falseee', pswdInput)
      // pswdInput.focus()
      // pswdInput.value === 'ADMIT IT !!!!!'
      // pswdInput.select()
    }
  } else {
    const resp = await browser.runtime.sendMessage({action: 'toggleBlock'})
    changeState(resp.isEnable)
  }
});
