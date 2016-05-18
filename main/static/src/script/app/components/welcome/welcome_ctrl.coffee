
class Welcome extends Controller

  constructor: (@CONFIG_DB) ->
    @cvButtons = [
      {title: 'Stack Overflow', url: 'careers.stackoverflow.com/kristop', icon: 'stack-overflow'}
      {title: 'Linked In', url: 'linkedin.com/in/topaloudis', icon: 'linkedin'}
      {title: 'Github', url: 'github.com/topless', icon: 'github'}
      {title: 'BitBucket', url: 'bitbucket.org/topless', icon: 'bitbucket'}
    ]
