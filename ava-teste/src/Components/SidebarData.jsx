import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Início',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Criar Atividades',
        path: '/CreateActivities',
        icon: <MdIcons.MdCreate/>,
        cName: 'nav-text'
    },  
    {
        title: 'Atividade 1',
        path: '/ActivityOne',
        icon: <FaIcons.FaClipboardCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Atividade 2',
        path: '/ActivityTwo',
        icon: <FaIcons.FaClipboardCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Atividade 3',
        path: '/ActivityTree',
        icon: <FaIcons.FaClipboardCheck/>,
        cName: 'nav-text'
    },
    
    
]