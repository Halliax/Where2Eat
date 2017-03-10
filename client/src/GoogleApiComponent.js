//from https://gist.github.com/auser/1d55aa3897f15d17caf21dc39b85b663

import React, {PropTypes as T} from 'react'
import ReactDOM from 'react-dom'

import {scriptCache} from './scriptCache'
import GoogleApi from './GoogleApi'

const defaultMapConfig = {}
const defaultCreateCache = (options) => {
    options = options || {};
    const apiKey = options.apiKey;
    const libraries = options.libraries || ['places'];
    const version = options.version || '3.27.12';

    return scriptCache({
        google: GoogleApi({apiKey: apiKey, libraries: libraries, version: version})
    });
};

export const wrapper = (options) => (WrappedComponent) => {
    const apiKey = options.apiKey;
    const libraries = options.libraries || ['places'];
    const version = options.version || '3.27.12';
    const createCache = options.createCache || defaultCreateCache;

    class Wrapper extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.scriptCache = createCache(options);
            this.scriptCache.google.onLoad(this.onLoad.bind(this));

            this.state = {
                loaded: false,
                map: null,
                google: null
            }
        }

        onLoad(err, tag) {
            this._gapi = window.google;
            this.setState({loaded: true, google: this._gapi});
        }

        render() {
            const props = Object.assign({}, this.props, {
                loaded: this.state.loaded,
                google: window.google
            });

            return (
                <div>
                    <WrappedComponent {...props}/>
                    <div ref='map'/>
                </div>
            )
        }
    }

    return Wrapper;
}

export default wrapper;
