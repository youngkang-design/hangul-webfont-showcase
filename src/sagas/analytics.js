export default function* (ga) {
  if (process.env.NODE_ENV === 'production') {
    yield production(ga)
  }
}

function* production(ga) {
  ga('create', 'UA-43289302-5', 'auto');
  ga('send', 'pageview');
}
