/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import { Editor } from '@monaco-editor/react';
const CodeEditor = ({ files, handleEditorChange, isThemeLoaded, editorCode, handleCreateFile }) => {
    return (
        <div className='w-full h-[calc(100vh-96px)] flex relative text-white uppercase tracking-widest'>
            {files.length !== 0 ?
                <Editor
                    language='javascript'
                    onChange={handleEditorChange}
                    className='h-[calc(100vh-96px)]'
                    width='100%'
                    theme={isThemeLoaded ? "Blackboard" : "dark"}
                    value={editorCode}
                />
                : <div onClick={handleCreateFile} className='flex cursor-pointer justify-center items-center w-[70%] h-[calc(100vh-96px)]'>
                    <h1 className='text-xl text-white uppercase tracking-[5px]'>Create a File</h1>
                </div>}
        </div>
    )
}

export default CodeEditor