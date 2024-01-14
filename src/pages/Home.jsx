/* eslint-disable no-unused-vars */
import { Editor, loader } from '@monaco-editor/react';
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';
import FilesList from '../components/FilesList';
import CodeEditor from '../components/CodeEditor';
import Question from '../components/Question';

const Home = () => {
    // States
    const [files, setFiles] = useState(JSON.parse(localStorage.getItem('codeData')) || []);
    const [editorCode, setEditorCode] = useState('');
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // UseEffects
    useEffect(() => {
        loader.init().then((monaco) => import('monaco-themes/themes/Blackboard.json')
            .then(data => {
                monaco.editor.defineTheme('Blackboard', data);
                setIsThemeLoaded(true);
            })
        )
    }, [])

    // Functions
    const handleEditorChange = (code) => {
        setEditorCode(code);
    }

    const handleCreateFile = () => {
        const newFile = {
            id: `files${Math.random(1030033833232320)}`,
            fileName: `file${files.length + 1}`,
            code: '//Code Here',
            programmingLanguage: 'javascript'
        };
        setFiles(
            prevFiles => (
                [...prevFiles,
                    newFile
                ]
            )
        )
        if (files.length !== 0) {
            setActiveIndex(prev => prev + 1);
        }
        setEditorCode(newFile.code);
    }

    const handleFileChange = (index) => {
        const updatedFiles = files.map((file, tempindex) => {
            if (activeIndex === tempindex) return { ...file, code: editorCode }
            else return file
        })
        setFiles(updatedFiles);
        setActiveIndex(index);
        setEditorCode(files[index].code);
    }

    const handleCloseFile = (id, index) => {
        const filteredFiles = files.filter(file => file.id !== id);
        setFiles(filteredFiles);
        if (files.length === 0) return;
        setActiveIndex(index - 1);
        setEditorCode(files[activeIndex].code);
    }

    const handleSaveFile = () => {
        localStorage.clear();
        localStorage.setItem('codeData', JSON.stringify(files));
    }

    const handleCompileCode = () => {
    };

    return (
        <div className='min-w-screen h-screen bg-gray-800 overflow-x-scroll'>
            {/* Menu */}
            <Menu handleCompileCode={handleCompileCode} handleCreateFile={handleCreateFile} handleSaveFile={handleSaveFile} />
            {/* Files and Coding Space and Question */}
            <div className='flex'>
                {/* Files and Coding Space */}
                <div className='w-[70%]'>
                    {/* Files */}
                    <FilesList files={files} handleCloseFile={handleCloseFile} handleFileChange={handleFileChange} />
                    {/* CodingSpace */}
                    <CodeEditor editorCode={editorCode} files={files} handleCreateFile={handleCreateFile} handleEditorChange={handleEditorChange} isThemeLoaded={isThemeLoaded} />
                </div>
                {/* Questions */}
                <Question />
            </div>
        </div>
    )
}

export default Home