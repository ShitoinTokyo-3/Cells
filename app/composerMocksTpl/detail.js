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
                    text: 'Aqui llegaste no hay mas',
                }
            },
            
        ]
    };

    return base;
};