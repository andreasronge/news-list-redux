import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import App from './app';
import store from './configure-store';

function createDebugPanel() {
return (<DebugPanel top right bottom>
		<DevTools store={store} monitor={LogMonitor} />
	</DebugPanel>
);
}


React.render(
	<div>
		<Provider store={ store }>
			{ () => <App />}
		</Provider>
			{createDebugPanel()}
	</div>,
  document.getElementById('app'));
