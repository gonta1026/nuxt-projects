import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  if (['/'].includes(route.path)) {//ルートで来た際は処理をスキップ
    return
  }
  const hoge = (text) => {
    console.log(`${text} は頑張る。`)
  }
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  if (credential && route.path === '/login') {
    return redirect('/')
  }
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}