$ ->
  init_common()

$ -> $('html.auth').each ->
  init_auth()

$ -> $('html.feedback').each ->
  console.info 'Welcome to feedback'

$ -> $('html.user-list').each ->
  init_user_list()

$ -> $('html.user-merge').each ->
  init_user_merge()

$ -> $('html.admin-config').each ->
  init_admin_config()
