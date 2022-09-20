'use-strict';

module.exports = CONFIG => {

    const base = {
        template: {
            tag: 'cells-template-paper-drawer-panel',
            familyPath: '@cells-components/cells-template-paper-drawer-panel',
            render: 'litElement',
            properties: {
                mode: 'seamed',
                zones:[
                    'app__header',
                    'app__main',
                    'app__footer'
                ]
            }
        },
        components:[
            {
                zone: 'app__header',
                type: 'UI',
                tag: 'bbva-header-main',
                familyPath: '@bbva-web-components/bbva-header-main',
                render: 'litElement',
                properties: {
                    text: 'Home',
                }
            },
            {
                zone: 'app__main',
                type: 'DM',
                tag: 'giphy-dm',
                familyPath: '../elements/giphy-dm',
                render: 'litElement',
                properties:{
                    _host:'https://api.giphy.com',
                    _path:'/v1/gifs/search?api_key=mx86gcqn1QMbH8sXj6cF0tJXVkdYlWyN&q=pug',
                    _method:'GET',

                    cellsConnections: {
                        in: {},
                        out:{
                            __home_response: {
                                bind: 'success-response-api'
                            }
                        }
                    }
                }
            },
            {
                zone: 'app__main',
                type: 'UI',
                tag: 'list-giphy',
                familyPath: '../elements/list-giphy',
                render: 'litElement',
                properties:{
                    cellsConnections: {
                        in: {
                            __home_response: {
                                bind: 'successResponseApi'
                            }
                        },
                        out: {
                            __home_navigation: {
                                bind: 'navigate',
                                link: {
                                    page : 'detail'
                                }
                            }
                        }
                    }
                }
            }
        ]
    };

    return base;
};