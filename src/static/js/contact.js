import wepy from 'wepy'

const defaultData = {
  deviceTime: new Date().toLocaleString() + new Date().getMilliseconds(),
  updateVersion: 'V2.0',
  clientType: '1',
  channel: 'H5'
}

const wxRequest = async (_url, data, fn) => {
  data = data || {}

  const _data = Object.assign({}, defaultData, data)
  try {
    await wepy.request({
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: _url,
      data: _data
    }).then((response) => {
      if (response.data.code === '40000') {
        fn && fn(response.data)
      } else if (response.data.code === '40003') {

      } else {
        fn && fn(response.data)
      }
    })
  } catch (e) {
    console.log(e)
  }
}
export {
  wxRequest
}
