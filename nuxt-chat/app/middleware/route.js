export default ({ req, route, redirect }) => {
  if (['/'].includes(route.path)) {//ルートで来た際は処理をスキップ
    return redirect('/group')
  }
}