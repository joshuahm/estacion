import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'assets/css/nucleo-icons.css';
import 'assets/scss/blk-design-system-react.scss?v=1.2.0';
import 'assets/demo/demo.css';

import Index from 'views/Index.js';
import Cine from 'views/Cine.js';
import Documental from 'views/Documental.js';
import Publicidad from 'views/Publicidad.js';
import Contacto from 'views/Contacto.js';
import DiasDeInvierno from 'views/movies/dias';
import SeLlamaFlor from 'views/movies/sellamaflor';
import EnElMurmulloDelViento from 'views/movies/enelmurmullodelviento';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cine" render={(props) => <Cine {...props} />} />
      <Route path="/documental" render={(props) => <Documental {...props} />} />
      <Route path="/publicidad" render={(props) => <Publicidad {...props} />} />
      <Route path="/contacto" render={(props) => <Contacto {...props} />} />
      <Route
        path="/diasDeInvierno"
        render={(props) => <DiasDeInvierno {...props} />}
      />
      <Route
        path="/sellamaflor"
        render={(props) => <SeLlamaFlor {...props} />}
      />
      <Route
        path="/enelmurmullodelviento"
        render={(props) => <EnElMurmulloDelViento {...props} />}
      />
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
