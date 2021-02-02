import React from 'react';
import * as github from '../../assets/images/github.png';
import URLS from './utils/url';

const GitHub = () => {
    return (
        <a href={URLS.GITHUB_REPO} target="_blank">
            <img src={github} alt='github' style={{width: '45px', height: '45px'}}/>
        </a>
    )
};

export default GitHub;