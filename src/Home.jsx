/* eslint-disable no-unused-vars */
import { Editor, loader } from '@monaco-editor/react';
import React, { useEffect, useState } from 'react'

const Home = () => {
    // States
    const [files, setFiles] = useState([]);
    const [editorCode, setEditorCode] = useState('');
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);

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

    const [activeIndex, setActiveIndex] = useState(0);

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
        console.log(files);
    }

    const handleCompileCode = (id) => { }

    return (
        <div className='w-screen h-screen bg-gray-800'>
            {/* Menu */}
            <div className='flex gap-5 p-2 bg-black'>
                <button onClick={handleCreateFile} className='bg-white text-gray-800 px-5 py-2 rounded-lg'>New File</button>
                <button onClick={handleSaveFile} className='bg-white text-gray-800 px-5 py-2 rounded-lg'>Save File</button>
                <button onClick={handleCompileCode} className='bg-white text-gray-800 px-5 py-2 rounded-lg'>Compile Code</button>
            </div>
            {/* Files and Coding Space and Question */}
            <div className='flex'>
                {/* Files and Coding Space */}
                <div className='w-[70%]'>
                    {/* Files */}
                    <div className='flex gap-1 w-full overflow-scroll'>
                        {
                            files.map(
                                (file, index) =>
                                    <div className='bg-gray-500 flex gap-3 w-fit  px-2 py-1' key={file.id}>
                                        <button onClick={() => handleFileChange(index)} className=' text-white text-lg '>
                                            {file.fileName}
                                        </button>
                                        <button onClick={() => handleCloseFile(file.id, index)} className='text-red-500'>X</button>
                                    </div>
                            )
                        }
                    </div>
                    {/* CodingSpace */}
                    <div className='w-full h-[calc(100vh-96px)] flex relative'>
                        {files.length !== 0 ?
                            <Editor
                                language='javascript'
                                onChange={handleEditorChange}
                                className='h-[calc(100vh-96px)]'
                                width='100%'
                                theme={isThemeLoaded ? "Blackboard" : "dark"}
                                value={editorCode}
                            />
                            : <div onClick={handleCreateFile} className='flex cursor-pointer justify-center items-center w-[70%] h-[calc(100vh-96px)]'><h1 className='text-xl text-white'>Create a File</h1></div>}
                    </div>
                </div>
                {/* Questions */}
                <div className='w-[30%] h-[calc(100vh-56px)] bg-[#0000004c]'></div>
            </div>
        </div>
    )
}

export default Home