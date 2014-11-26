> sencha -sdk ~/Downloads/ext-5.0.1 generate workspace ./questions-package
> cd questions-package
> sencha generate package wizard
> sencha -sdk ~/Downloads/ext-5.0.1 generate app Questions ./questions
> cd questions
! add "wizard" to requires in app.json
> sencha app watch
! watches both the app and the package