import React from 'react';

require('../../scss/common/_page.scss');
require('../../scss/components/Info.scss');

export default class Info extends React.Component {

    render() {
        return (
            <div is class="page" id="info">
                <h1>Info</h1>
                <div is class="bio">
                 For now, I can be reached by email at <a href="mailto:rw3iss@gmail.com">rw3iss@gmail.com</a>.
                </div>
            </div>
        );
    }

};