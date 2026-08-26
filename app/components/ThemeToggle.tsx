'use client';
import{useEffect}from'react';
export default function ThemeToggle(){useEffect(()=>{document.documentElement.dataset.theme=localStorage.getItem('svic-theme')==='dark'?'dark':'light'},[]);function toggle(){const next=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=next?'dark':'light';localStorage.setItem('svic-theme',next?'dark':'light')}return <button className="theme-toggle" onClick={toggle} aria-label="Toggle monochrome light and dark mode">Light / Dark</button>}
